import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Cuisine.css"
import CuisineOverall from './CuisineOverall';

function Asian() {
  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])
  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"
  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=asian&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
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
      <h1>Asian Cuisine</h1>
      <p>Asian cuisine includes several major regional cuisines: Central Asian, East Asian, North Asian, South Asian, Southeast Asian, and West Asian. Asia, being the largest and most populous continent, is home to many cultures, many of which have their own characteristic cuisine.</p>
    </div>
   <CuisineOverall cuisine = {cuisine} />
  </div>
  )
}

export default Asian
