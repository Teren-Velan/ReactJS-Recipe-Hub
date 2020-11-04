import React from 'react'
import "/Users/terenvelan/Documents/sei25sg/Unit2/Project2/project2/src/components/Home/home-components/css/mid-home.css"
import CuisineBtn from "../Mid-Home-Components/Cuisine-Btn"

function MidHome() {
  return (
    <div className="Mid-Home">
      <div className ="hero">
        <h1>Explore a wide variety of cuisines</h1>
        <p>
         Miss the joys of trying different cusines from different countries? <br/> Here at taste the world we have a wide variety of cuisines to choose from. All from the comfort of your own home.
        </p>
        <CuisineBtn/>
      </div>
     
    </div>
  )
}

export default MidHome
