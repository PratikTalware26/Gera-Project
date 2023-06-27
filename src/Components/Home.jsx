import React from 'react'
import "./home.css"
import homeImg from "../assets/homeImg.jpg"

const Home = () => {
  return (
    <div className='home-cont'>
        <img src={homeImg} alt="homeImg" className='w-100'/>
    </div>
  )
}

export default Home