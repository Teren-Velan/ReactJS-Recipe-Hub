import React from 'react'
import "/Users/terenvelan/Documents/sei25sg/Unit2/Project2/project2/src/components/Home/home-components/css/home.css"
import HeroSection from '../Top-Home-Components/HeroSection'


function Home({search , setSearch}) {
  return (
    <div className="Home">
      <HeroSection search ={search} setSearch={setSearch} />
    </div>
  )
}

export default Home
