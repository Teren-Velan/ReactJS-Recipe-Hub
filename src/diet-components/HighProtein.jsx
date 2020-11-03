import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Diet.css"
import CuisineOverall from '../cuisine-components/CuisineOverall';

function HighProtein() {
  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])
  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"
  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=high-protein&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=36`
      );
      console.log(result.data.hits)
      setCuisine(result.data.hits);
    } catch (error) {
      console.log("this is the error",error);
    }
  }
  return (
    <div className="Diet">
    <div className="welcomeMSG">
      <h1>High-Protein Diet</h1>
      <p>A high-protein diet is a diet in which 20% or more of the total daily calories comes from protein.Most high protein diets are high in saturated fat and severely restrict intake of carbohydrates. </p>
    </div>
   <CuisineOverall cuisine = {cuisine} />
  </div>
  )
}

export default HighProtein
