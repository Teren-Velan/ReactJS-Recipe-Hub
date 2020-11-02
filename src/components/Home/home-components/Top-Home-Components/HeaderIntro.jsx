import React from 'react'
import {InputGroup, FormControl} from "react-bootstrap"
import "/Users/terenvelan/Documents/sei25sg/Unit2/Project2/project2/src/components/Home/home-components/css/header-intro.css"

function HeaderIntro() {
  return (
    <div className="Header-intro">
      <h1>Simple and <br/> Delicious Recipes</h1>
      <h3>For everyone <br/> From Around the World</h3>
      <InputGroup size="md" className="w-100">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-lg">Explore</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl  aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
    </div>
  )
}

export default HeaderIntro
