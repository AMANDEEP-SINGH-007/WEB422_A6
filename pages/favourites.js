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
import React from 'react';
import { useAtom } from 'jotai';
import { favouritesAtom } from '../store.js';
import ArtworkCard from '../components/ArtworkCard';
import { Row ,Col, Card } from "react-bootstrap";

export default function Favourites() {
    const [favouritesList] = useAtom(favouritesAtom);
    if (!favouritesList) return null;
    if (favouritesList) {
        return (
            <><Row className="gy-4">
                {favouritesList.length > 0 ?(favouritesList.map((favouritesList) => {
                    return (<Col lg={3} key={favouritesList}><ArtworkCard objectID={favouritesList} /></Col>);
                })
            ):(
                <Card>
                    <Card.Body>
                        <Card.Title>Nothing Here</Card.Title>
                        <Card.Text>Try adding some new artwork to the list.</Card.Text>
                    </Card.Body>
                </Card>
            )}
            </Row>
            {!favouritesList && null}</>
        );
    }
}