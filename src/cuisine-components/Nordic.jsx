import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Cuisine.css"
import CuisineOverall from './CuisineOverall';

function Nordic() {
  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])
  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"
  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=nordic&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
      );
      console.log(result.data.hits)
      setCuisine(result.data.hits);
    } catch (error) {
      console.log("this is the error",error);
    }
  }
  return (
    <div className="Cuisine">
    <div className="welcomeMSG">
      <h1>Nordic Cuisine</h1>
      <p>New Nordic Cuisine is a culinary movement which has been developed in the Nordic countries and Scandinavia in particular since the 2000s with Denmark being centre of the movement. New Nordic Cuisine was propelled by and found inspiration in ideas and a manifesto written by food activist and entrepreneur Claus Meyer and a number of Scandinavian chefs in 2004 in Copenhagen. </p>
    </div>
   <CuisineOverall cuisine = {cuisine} />
  </div>
  )
}


export default Nordic