import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li>
            <a className="nav-link active" href="#">Home</a>
            </li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className='connect'>Connect With Me</div>
      
    </div>
  )
}

export default Navbar
