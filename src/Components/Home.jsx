import React, { useEffect, useState } from 'react'
import "./home.css"
import homeImg from "../assets/homeImg.jpg"
import homeMobImg from "../assets/homeMobImg.jpg"

const Home = () => {
  const [windowWidth, setWindowwidth]= useState(window.innerWidth)
  useEffect(()=>{
    const handleResize=()=>{
      setWindowwidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return (
    <div className='home-cont' id='home'>
        {windowWidth<600?<img src={homeMobImg} alt="homeMobImg" className='w-100'/>:<img src={homeImg} alt="homeImg" className='w-100'/>}
    </div>
  )
}

export default Home