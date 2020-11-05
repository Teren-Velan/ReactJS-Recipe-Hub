import React, {useState} from 'react'

import "/Users/terenvelan/Documents/sei25sg/Unit2/Project2/project2/src/components/Home/home-components/css/header-intro.css"
import { Link} from 'react-router-dom'



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
