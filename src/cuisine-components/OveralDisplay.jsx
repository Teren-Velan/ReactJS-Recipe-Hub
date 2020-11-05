import React, {useState , useEffect} from 'react'
import axios from "axios"
import "./css/Cuisine.css"
import CuisineOverall from './CuisineOverall';
import { useParams } from 'react-router-dom';


let YOUR_APP_ID = "8faa824a"
let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"

function OveralDisplay({book , setBook}) {
  const [cuisine, setCuisine] = useState([])
  let { name } = useParams()

// <------------------- Copy from here----------------->
  useEffect(() => {
    async function getRandomData() {
      try {
        let result = await axios.get(`https://api.edamam.com/search?q=${name}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
        );
        console.log("called")
        setCuisine(result.data.hits);
      } catch (error) {
        console.log("this is the error",error);
      }
    }
    getRandomData()
  }, [name]);

 
//<--------------------- to here ------------------------->
    
return (
  <div className="Cuisine">
    <div className="welcomeMSG">
      <h1>{`${name}`}</h1>
    </div>
    <CuisineOverall cuisine={cuisine} book={book} setBook={setBook} />
  </div>
)
}

export default OveralDisplay






//  <CuisineOverall cuisine={cuisine} key={item.id} item={item} book={book} setBook={setBook} />