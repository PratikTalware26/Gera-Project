import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import BestPrice from './BestPrice'

const AllHomeComponents = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <BestPrice/>
    </div>
  )
}

export default AllHomeComponents