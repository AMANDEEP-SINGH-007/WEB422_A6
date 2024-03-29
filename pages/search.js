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
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form,Row,Col, Button} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store.js';
import { addToHistory } from "../lib/userData";

export default function Search(){
  const router = useRouter();
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  const {register, handleSubmit, setValue , formState:{errors}} = useForm({
    defaultValues: {
      searchBy: "title",
      geoLocation: "",
      medium: "",
      isOnView: false,
      isHighlight: false,
      q: ""
    },
  });

  useEffect(()=>{
    let data={
      searchBy: "title",
      geoLocation: "",
      medium: "",
      isOnView: false,
      isHighlight: false,
      q: ""
    }
    for (const prop in data){
      setValue(prop, data[prop]);
    }
  });

  async function submitForm(data) {
    let queryString = ""
    queryString = `${data.searchBy}=true`
    if (data.geoLocation) {queryString += `&geoLocation=${data.geoLocation}`}
    
    if (data.medium) {queryString += `&medium=${data.medium}`}
    queryString += `&isOnView=${data.isOnView}&isHighlight=${data.isHighlight}&q=${data.q}`;
    router.push(`/artwork?${queryString}`);
    setSearchHistory(await addToHistory(queryString));
  }
    return(
        <>
        <Form onSubmit={handleSubmit(submitForm)}>
            <Row>
                <Col>
                <Form.Group className="mb-3">
                    <Form.Label>Search Query</Form.Label>
                    <Form.Control type="text" name="q" className={errors.q?"is-invalid":"valid"} {...register("q",{required: true})} />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                <Form.Label>Search By</Form.Label>
                <Form.Select name="searchBy" className="mb-3" {...register("searchBy")}>
                    <option value="title">Title</option>
                    <option value="tags">Tags</option>
                    <option value="artistOrCulture">Artist or Culture</option>
                </Form.Select>
                </Col>
                <Col md={4}>
                <Form.Group className="mb-3">
                    <Form.Label>Geo Location</Form.Label>
                    <Form.Control type="text" name="geoLocation" {...register("geoLocation")}/>
                    <Form.Text className="text-muted">
                    Case Sensitive String (ie &quot;Europe&quot;, &quot;France&quot;, &quot;Paris&quot;, &quot;China&quot;, &quot;New York&quot;, etc.), with multiple values separated by the | operator
                </Form.Text>
                </Form.Group>
                </Col>
                <Col md={4}>
                <Form.Group className="mb-3">
                    <Form.Label>Medium</Form.Label>
                    <Form.Control type="text" name="medium" {...register("medium")}/>
                    <Form.Text className="text-muted">
                    Case Sensitive String (ie: &quot;Ceramics&quot;, &quot;Furniture&quot;, &quot;Paintings&quot;, &quot;Sculpture&quot;, &quot;Textiles&quot;, etc.), with multiple values separated by the | operator
                </Form.Text>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Check type="checkbox" label="Highlighted" name="isHighlight" {...register("isHighlight")}/>
                <Form.Check type="checkbox" label="Currently on View" name="isOnView" {...register("isOnView")}/>
                </Col>
            </Row>
            <Row>
                <Col><br />
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
        </>
    )
    

}