import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Cuisine.css"
import CuisineOverall from './CuisineOverall';

function Caribbean() {
  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])
  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"
  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=caribbean&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
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
      <h1>Caribbean Cuisine</h1>
      <p>Caribbean cuisine is a fusion of African,Creole, Cajun, Amerindian, European, Latin American, Indian/South Asian, Middle Eastern, and Chinese. These traditions were brought from many different countries when they came to the Caribbean.In addition, the population has created styles that are unique to the region.</p>
    </div>
   <CuisineOverall cuisine = {cuisine} />
  </div>
  )
}

export default Caribbean