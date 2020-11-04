import React from 'react'
import HeaderIntro from "../Top-Home-Components/HeaderIntro"
import Sidepanel from "../Top-Home-Components/Sidepanel"

function HeroSection({search , setSearch}) {
  return (
    <div>
      <HeaderIntro search={search} setSearch={setSearch}/>
      <Sidepanel/>
    </div>
  )
}

export default HeroSection
