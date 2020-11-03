import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Cuisine.css"
import CuisineOverall from './CuisineOverall';

function Japanese() {
  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])
  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"
  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=japanese&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
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
      <h1>Japanese Cuisine</h1>
      <p>Japanese cuisine encompasses the regional and traditional foods of Japan, which have developed through centuries of political, economic, and social changes. The traditional cuisine of Japan, washoku (和食), lit. "Japanese eating" (or kappō (ja:割烹)), is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients. </p>
    </div>
   <CuisineOverall cuisine = {cuisine} />
  </div>
  )
}

export default Japanese
