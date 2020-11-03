import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Diet.css"
import CuisineOverall from '../cuisine-components/CuisineOverall';

function Keto() {
  useEffect(() => {
    getRandomData();
  }, []);

  const [cuisine, setCuisine] = useState([])
  let YOUR_APP_ID = "8faa824a"
  let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"
  async function getRandomData() {
    try {
      let result = await axios.get(`https://api.edamam.com/search?q=keto&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=36`
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
      <h1>Keto Diet</h1>
      <p>The ketogenic diet is a high-fat, adequate-protein, low-carbohydrate diet that in medicine is used mainly to treat hard-to-control (refractory) epilepsy in children. The diet forces the body to burn fats rather than carbohydrates. </p>
    </div>
   <CuisineOverall cuisine = {cuisine} />
  </div>
  )
}

export default Keto
