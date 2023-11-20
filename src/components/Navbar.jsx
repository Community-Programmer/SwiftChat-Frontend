import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo"><Link>App</Link></div>
        <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        <button className="room-btn">Create Chat Room</button>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar