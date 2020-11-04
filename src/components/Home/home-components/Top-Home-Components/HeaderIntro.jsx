import React, {useState , useEffect} from 'react'
import axios from "axios"
import {InputGroup, FormControl,Button} from "react-bootstrap"
import "/Users/terenvelan/Documents/sei25sg/Unit2/Project2/project2/src/components/Home/home-components/css/header-intro.css"
import { Link, Route, Router } from 'react-router-dom'
import Switch from 'react-bootstrap/esm/Switch'
import SearchPage from './SearchPage'


function HeaderIntro({search, setSearch}) {

  const [query, setQuery] = useState('')

  const updateSearch = e => {
    setSearch(e.target.value)
    setQuery(q => (e.target.value))
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="Header-intro">
      <h1>Simple & <br/> Delicious Recipes</h1>
      <h3>From Around the World</h3>
        <form onSubmit={getSearch}>
          <input className="input" onChange={updateSearch} type="text" placeholder="Search for your recipes here"/>
          <Link className="btn" to={`/searchpage?keyword=${query}`}>Explore</Link>
        </form>
    </div>
  )
}

export default HeaderIntro
