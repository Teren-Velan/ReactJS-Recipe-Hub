import React from 'react'
import {Card , Button,Row, Col} from "react-bootstrap"
import "./css/Cuisine.css"

function CuisineOverall({cuisine,setBook}) {

  function addItemToCart(item){
    setBook((prevBookShelf) => [...prevBookShelf, item]);
  }

  return (
    <Row className="m-auto justify-content-center " style={{ width: '100%' , height: '40rem'  }}>
    {cuisine.map((item , index) => (
      <Col className="column-overall" xl={3} lg={4} md={4} sm={6} xs={12}>
      <Card xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 mr-3" border="light" bg="warning" style={{ width: '20rem' , height: '40rem'}} key={index}>
      <Card.Img variant="warning" src={item.recipe.image ? item.recipe.image: "http://placehold.it/300x300"} />
      <Card.Body className="d-flex flex-column" >
      <Card.Title>{item.recipe.label}</Card.Title>
        <Card.Text >{`Calorie Count: ${Math.floor(item.recipe.calories)} Kcal`}</Card.Text>
        <Card.Text>{`Cooking Time: ${item.recipe.totalTime === 0 ? 30 : item.recipe.totalTime} mins`}</Card.Text>
        <Card.Text>{`Makes for: ${item.recipe.yield === 0 ? 1 : item.recipe.yield} pax`}</Card.Text>
        <Button  href={item.recipe.url} className="m-auto flex-end" variant="primary">Read More</Button>{" "}
        <Button onClick={() => addItemToCart(item)} variant="primary">Add to CookBook</Button>
      </Card.Body>
      </Card>
      </Col>
        ))}
    </Row>
  )
}
export default CuisineOverall
