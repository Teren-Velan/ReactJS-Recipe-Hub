import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Cuisine.css"
import CuisineOverall from './CuisineOverall';

function Mexican() {
  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])
  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"
  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=mexican&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
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
      <h1>Mexican Cuisine</h1>
      <p>Mexican cuisine consists of the cooking cuisines and traditions of the modern state of Mexico. Its roots lie in a combination of Mesoamerican and Spanish cuisine. Many of its ingredients and methods have their roots in the first agricultural communities such as the Maya who domesticated maize, created the standard process of maize nixtamalization, and established their foodways (Maya cuisine).</p>
    </div>
   <CuisineOverall cuisine = {cuisine} />
  </div>
  )
}

export default Mexican
