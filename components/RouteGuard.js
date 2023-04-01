/*********************************************************************************
*  WEB422 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: - Amandeep Singh Student ID: 145041208 Date: April 1, 2023
*
*  Vercel App (Deployed) Link: https://web-422-a6-cuhgjilwn-amandeep-singh-007.vercel.app
*
********************************************************************************/ 
import { isAuthenticated } from '../lib/authenticate';
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import { useAtom } from "jotai";
import { searchHistoryAtom, favouritesAtom } from "../store";
import { getFavourites, getHistory } from "../lib/userData";


const PUBLIC_PATHS = ['/login','/register', '/', '/_error'];

export default function RouteGuard(props) {
  const [authorized, setAuthorized] = useState(false);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const [favourites, setFavourites] = useAtom(favouritesAtom);
  async function updateAtoms() {
    setFavourites(await getFavourites());
    setSearchHistory(await getHistory());
  }

  const router = useRouter();
  function authCheck(url) {
    const path = url.split('?')[0];
    if (!isAuthenticated() && !PUBLIC_PATHS.includes(path)) {
      setAuthorized(false);
      router.push('/login');
    } else {
      setAuthorized(true);
    }
  }

  useEffect(()=>{
    updateAtoms();
    authCheck(router.pathname);
    router.events.on('routeChangeComplete', authCheck);
    return () => {
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);  

  return <>{authorized && props.children}</>
}