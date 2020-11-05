import React, {useEffect , useState} from 'react'
import axios from "axios"
import { useLocation } from "react-router-dom";
import CuisineOverall from "../../../../cuisine-components/CuisineOverall"
import "../css/searchPage.css"
import { Spinner } from 'react-bootstrap';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

let YOUR_APP_ID = "8faa824a"
let YOUR_APP_KEY = "6f1741200d3b3e4072b2622c0cea3d72"


function SearchPage() {
  let q = useQuery();
  let query = q.get("keyword")
  
  useEffect(() => {
    async function getRandomData() {
    
      try {
        let result = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40`
        );
        console.log(result.data.hits)
        setCuisine(result.data.hits);
      } catch (error) {
        console.log("this is the error",error);
      }
    }

    getRandomData(); 
  }, [query])

  const [cuisine, setCuisine] = useState([])



  const [timer, setTimer] = useState(false)

  setTimeout(() => {
    if(cuisine.length === 0){
      setTimer(true)
    }
  }, 1800);

  return (
    <div className="searchPage">
      <div className="resultMsg">
      <h1>{timer? `${cuisine.length} Results found for: "${query}"` : <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
      </Spinner>}</h1>
        {/* <h1>{cuisine.length > 0 ? `Results for: "${query}"` : <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
  </Spinner>}</h1> */}
      </div>
     <CuisineOverall cuisine = {cuisine} />
    </div>
  )
}

export default SearchPage

