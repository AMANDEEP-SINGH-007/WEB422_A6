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
import { Card, Button } from 'react-bootstrap';
import Error from 'next/error';
import Link from 'next/link';
import useSWR from 'swr';

export default function ArtworkCard( props ) {
  const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.objectID}`);

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.primaryImageSmall || 'https://via.placeholder.com/375x375.png?text=[+Not+Available+]'} />
      <Card.Body>
        <Card.Title>{data.title || 'N/A'}</Card.Title>
        <Card.Text>
            <strong>Date:</strong> {data.objectDate || 'N/A'}<br/>
            <strong>Classification:</strong> {data.classification || 'N/A'}<br/>
            <strong>Medium:</strong> {data.medium || 'N/A'}<br/>
        </Card.Text>
        <Link href={`/artwork/${props.objectID}`} passHref>
            <Button variant="outline-dark">
              <strong>ID: </strong> {props.objectID}
            </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
