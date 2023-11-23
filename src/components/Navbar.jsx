import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import ChatAppcontext from '../context/Context'
import Alert from './Alert'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const context =useContext(ChatAppcontext)
  const {alert,setAlert}=context
  return (
    <>
    <div className="navbar">
        <div className="logo"><Link>SwiftChat</Link></div>
        <div className={`nav-items ${isOpen ? 'active' : ''}`}>

        <ul className='nav-links'>
            <li><Link to='/' onClick={toggleNavbar}>Home</Link></li>
            <li><Link to='/about' onClick={toggleNavbar}>About Us</Link></li>
            <li><Link to='/contact' onClick={toggleNavbar}>Contact Us</Link></li>
        </ul>
        <div className="btn-container">
        <Link to='/createroom' onClick={toggleNavbar}><button className="room-btn">Create Room</button></Link>
        <Link to='joinroom' onClick={toggleNavbar}><button className="room-btn">Join Room</button></Link>
        </div>
        </div>
        <i onClick={toggleNavbar} className=" burger fa-solid fa-bars fa-xl"></i>
        {alert && (<Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)}/>)}
    </div>
   
    <Outlet/>
    </>
  )
}

export default Navbar