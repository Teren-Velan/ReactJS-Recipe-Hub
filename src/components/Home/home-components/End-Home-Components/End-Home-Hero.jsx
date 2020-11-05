import React from 'react'
import {Button } from "react-bootstrap"
import "../css/end-home-hero.css"

function EndHomeHero() {
  return (
    <div className="EndHomeHero">
      <h1>Create your own Cookbook</h1>
      <p>Create your own collection of recipes by adding your favourites to your own cookbook. All of your different cuisines , recipes and diets accessible at the click of a button </p>
      
      <Button href="/mycookbook" variant="info">My Cookbook</Button>
    </div>
  )
}

export default EndHomeHero


