import React from 'react'
import "./index.css"
import Logo from './assets/brand_logo.png'


const BrandPage = () => {
  return (
    <div>
        <nav>
            <div className="logo"><img src={Logo} alt="" /></div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button className='btn'>Login</button>
        </nav>
    </div>
  )
}

export default BrandPage