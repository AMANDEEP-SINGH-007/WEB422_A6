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
import MainNav from './MainNav';
import { Container } from 'react-bootstrap';

export default function Layout(props){
    return (
        <>
          <MainNav />
          <br />
          <Container>{props.children}</Container>
          <br />
        </>
      );
}