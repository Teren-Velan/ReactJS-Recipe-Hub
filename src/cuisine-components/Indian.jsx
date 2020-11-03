import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Cuisine.css"
import CuisineOverall from './CuisineOverall';

function Indian() {
  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])
  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"
  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=indian&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
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
      <h1>Indian Cuisine</h1>
      <p>Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.</p>
    </div>
   <CuisineOverall cuisine = {cuisine} />
  </div>
  )
}


export default Indian
