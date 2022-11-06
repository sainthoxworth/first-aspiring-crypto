import React from 'react'
import Information from './Information'
import Market from './Market'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import "./style.css"

export function Home() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Portfolio></Portfolio>
      <Information></Information>
      <Market></Market>
    </div>
  )
}

