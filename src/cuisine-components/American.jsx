import React, {useState , useEffect} from 'react'
import axios from "axios"
import {Jumbotron , Container, Card , Button,Row,Col} from "react-bootstrap"
import "./css/American.css"

function American() {

  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])

  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"

  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=american&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
      );
      console.log(result.data.hits)
      setCuisine(result.data.hits);
    } catch (error) {
      console.log("this is the error",error);
    }
  }

    


  return (
    <div className="American">

      <div className="welcomeMSG">
        <h1>American Cuisine</h1>
        <p>American cuisine reflects the history of the United States, blending the culinary contributions of various groups of people from around the world, including indigenous American Indians, African Americans, Asians, Europeans, Pacific Islanders, and Latin Americans.</p>
      </div>

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
    </div>
  )
}

export default American






 