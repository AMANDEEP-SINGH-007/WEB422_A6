/*********************************************************************************
*  WEB422 – Assignment 5
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: - Amandeep Singh Student ID: 145041208 Date: Mar 14, 2023
*
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