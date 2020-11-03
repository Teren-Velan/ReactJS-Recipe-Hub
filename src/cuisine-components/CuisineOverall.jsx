import React, {useState , useEffect} from 'react'
import axios from "axios"
import {Card , Button,Row} from "react-bootstrap"
import "./css/Cuisine.css"

function CuisineOverall({cuisine}) {
  return (
    <Row className="justify-content-center">
    {cuisine.map((item , index) => (
      <Card className="mr-3 mb-3" border="light" bg="warning" style={{ width: '20rem' , height: '40rem'}}>
      <Card.Img fluid variant="warning" src={item.recipe.image ? item.recipe.image: "http://placehold.it/300x300"} />
      <Card.Body className="d-flex flex-column" >
      <Card.Title>{item.recipe.label}</Card.Title>
        <Card.Text >{`Calorie Count: ${Math.floor(item.recipe.calories)} Kcal`}</Card.Text>
        <Card.Text>{`Cooking Time: ${item.recipe.totalTime == 0 ? 30 : item.recipe.totalTime} mins`}</Card.Text>
        <Card.Text>{`Makes for: ${item.recipe.yield == 0 ? 1 : item.recipe.yield} pax`}</Card.Text>
        <Button  href={item.recipe.url} className="m-auto flex-end" variant="primary">Read More</Button>{" "}
        <Button variant="primary">Add to CookBook</Button>
      </Card.Body>
      </Card>
        ))}
    </Row>
  )
}

export default CuisineOverall
