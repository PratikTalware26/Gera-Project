import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import BestPrice from './BestPrice'
import Amenities from './Amenities'
import FloorPlans from './FloorPlans'
import Enquiry from './Enquiry'
import BottomButtons from './BottomButtons'

const AllHomeComponents = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <BestPrice/>
        <Amenities/>
        <FloorPlans/>
        <Enquiry/>
        <BottomButtons/>
    </div>
  )
}

export default AllHomeComponents