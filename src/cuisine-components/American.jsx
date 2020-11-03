import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Cuisine.css"
import CuisineOverall from './CuisineOverall';

function American() {
// <------------------- Copy from here----------------->
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
//<--------------------- to here ------------------------->
    
  return (
    <div className="Cuisine">
      <div className="welcomeMSG">
        <h1>American Cuisine</h1>
        <p>American cuisine reflects the history of the United States, blending the culinary contributions of various groups of people from around the world, including indigenous American Indians, African Americans, Asians, Europeans, Pacific Islanders, and Latin Americans.</p>
      </div>
     <CuisineOverall cuisine = {cuisine} />
    </div>
  )
}

export default American






 