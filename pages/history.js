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
import React from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { searchHistoryAtom } from '../store.js';
import styles from '../styles/History.module.css';

export default function History() {
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const router = useRouter();
  let parsedHistory = [];

  searchHistory.forEach(h => {
    let params = new URLSearchParams(h);
    let entries = params.entries();
    parsedHistory.push(Object.fromEntries(entries));
  });

  const historyClicked = (e, index) => {
    router.push(`/artwork?${searchHistory[index]}`);
  };

  const removeHistoryClicked = (e, index) => {
    e.stopPropagation(); // stop the event from trigging other events
    setSearchHistory(current => {
        let x = [...current];
        x.splice(index, 1)
        return x;
    });    
  };

  return (
    <>
      {parsedHistory.length === 0 ?
        <Card>
          <Card.Body>
            <Card.Title>No Search History</Card.Title>
            <Card.Text>Try searching for some artwork</Card.Text>
          </Card.Body>
        </Card>
        :
        <ListGroup className="mt-3">
          {parsedHistory.map((historyItem, index) => (
            <ListGroup.Item key={index} className={styles.historyListItem} onClick={e => historyClicked(e, index)}>
              {Object.keys(historyItem).map(key => (<>{key}: <strong>{historyItem[key]}</strong>&nbsp;</>))}
              <Button className="float-end" variant="danger" size="sm" onClick={e => removeHistoryClicked(e, index)}>&times;</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      }
    </>
  );
};
