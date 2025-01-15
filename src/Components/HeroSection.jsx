import React from 'react'
import Flipkart from '../assets/flipkart.png'
import Amazon from '../assets/amazon.png'
import HeroImg from '../assets/shoe_image.png'


const HeroSection = () => {
  return (
    <main className='hero'>
        <div className="hero-content">
            <h1>YOUR FEET  DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
        <div className="hero-btn">
            <button className='btn1'>Shop Now</button>
            <button className='btn2'>Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
        </div>
        <div className="brand-logo">
            <img src={Flipkart} alt="" className='flipkart'/>
            <img src={Amazon} alt="" className='amazon'/>
        </div>
        </div>

        <div className="hero-img">
            <img src={HeroImg} alt="" />
        </div>
    </main>
  )
}

export default HeroSection