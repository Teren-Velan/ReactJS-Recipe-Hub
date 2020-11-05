import React from 'react'
import { Card, Button, Row,Col } from 'react-bootstrap'
import "./css/MyCookbook.css"


function MyCookbook({book , removeFromBook}) {
  console.log(book)

  function removeItem(index){
    let temp = [...book]

    temp.splice(index , 1)
    removeFromBook(temp)
  }
  return (
    <div className="Cookbook">
       <div className="welcomeMSG">
        <h1>Your Cookbook</h1>
      </div>
    <Row className="">
      {book.map((item, index) => (
         <Col className="mr-5" xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
            <Card className="mr-3 mb-3 card" border="light" bg="warning" style={{ width: '21rem' , height: '40rem'}}>
            <Card.Img variant="warning" src={item.recipe.image ? item.recipe.image: "http://placehold.it/300x300"} />
          <Card.Body className="d-flex flex-column" >
            <Card.Title>{item.recipe.label}</Card.Title>
            <Card.Text >{`Calorie Count: ${Math.floor(item.recipe.calories)} Kcal`}</Card.Text>
            <Card.Text>{`Cooking Time: ${item.recipe.totalTime === 0 ? 30 : item.recipe.totalTime} mins`}</Card.Text>
            <Card.Text>{`Makes for: ${item.recipe.yield === 0 ? 1 : item.recipe.yield} pax`}</Card.Text>
            <Button target="blank"  href={item.recipe.url} className="m-auto flex-end" variant="primary">Read More</Button>{" "}
            <Button onClick = {() => removeItem(index)} className="m-auto w-100 flex-end" variant="danger">Remove from Cookbook</Button>
        </Card.Body>
        </Card>
        </Col>
       ))}
      </Row>
    </div>
  )
}

export default MyCookbook
