import React from 'react'
import TopHome from './Top-Home-Components/Top-Home';
import MidHome from './Mid-Home-Components/Mid-Home';
import EndHome from './End-Home-Components/End-Home'

function MainHome({search, setSearch}) {
  return (
    <div>
      <TopHome search ={search} setSearch={setSearch} />
      <MidHome/>
      <EndHome/>
    </div>
  )
}

export default MainHome
