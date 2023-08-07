import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"


import logo from "../assests/2.png"
const Home = () => {
  return (
    <div className='home-container'>
      <div className='description'>
        <h1 className='name'>Hi,Iam Manish Reddy Naini</h1>
        <p className='role'>-- Frontend Developer</p>
        <p className='objective'>A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. </p>
        <Link className='about-me-btn' to="/about">About Me</Link>
      </div>
      <div className='logo-container'>
        <img src={logo} alt='aboutimg' className='logo-img' />
       


      </div>
    </div>
  )
}

export default Home