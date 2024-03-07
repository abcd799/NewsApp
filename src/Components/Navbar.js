import React from 'react'
import logo from './logo.jpg';
function Navbar() {
  return (
    <>
      <nav>
        <div className="logo-heading">
          <img src={logo} className='logo' alt='something here' />
          <h2>News App</h2>
        </div>
        <div className="tabs">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Follow</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar