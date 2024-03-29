/*********************************************************************************
*  WEB422 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: - Amandeep Singh Student ID: 145041208 Date: April 1, 2023
*
*  Vercel App (Deployed) Link: https://web-422-a6-beryl.vercel.app
*
********************************************************************************/ 
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SWRConfig } from 'swr'
import Layout from '../components/Layout'
import RouteGuard from "../components/RouteGuard";

export default function App({ Component, pageProps }) {
  return (
    <RouteGuard>
    <Layout>
      <SWRConfig value={{
        fetcher: 
          async url => {
            const res = await fetch(url)
          
            // If the status code is not in the range 200-299,
            // we still try to parse and throw it.
            if (!res.ok) {
              const error = new Error('An error occurred while fetching the data.')
              // Attach extra info to the error object.
              error.info = await res.json()
              error.status = res.status
              throw error
            }
  
            return res.json()
          }
        }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
    </RouteGuard>
  )
}
