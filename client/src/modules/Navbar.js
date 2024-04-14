import React from 'react'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav>
        <div className='logo-container'>
            <img src="/logo.png" alt='Logo'/>
        </div>
        <div class="nav-middle">
            <a href='/explore'>Explore</a>
            <a href='/about'>About Us</a>
        </div>
        <div className='end'>
            <a href='/login'>Login</a>
        </div>
    </nav>
  )
}

export default Navbar