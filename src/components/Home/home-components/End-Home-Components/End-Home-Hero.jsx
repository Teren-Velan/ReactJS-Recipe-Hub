import React from 'react'
import {Button} from "react-bootstrap"
import "../css/end-home-hero.css"

function EndHomeHero() {
  return (
    <div className="EndHomeHero">
      <h1>Create your own collection of recipes</h1>
      <p>Ever wanted to have your own cookbook? <br/> Well here's your chance, simply click on the "Add to Cookbook" button on each recipe to add your favourite recipes to your cookbook, and cook up a storm with us!</p>
      <Button href="/mycookbook" variant="info">My Cookbook</Button>
    </div>
  )
}

export default EndHomeHero


