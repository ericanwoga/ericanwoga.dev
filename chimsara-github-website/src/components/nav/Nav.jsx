import React , {useState, useRef } from 'react'
import './nav.css'
import {IoMenu, IoClose} from 'react-icons/io5'


function Nav() {
  const [clickedNav, setClickedNav] = useState(false);

  const switchIcon = () => {
    setClickedNav(!clickedNav);
    toggleNav();
  }

  const toggleNav = () => {
    const navbar = document.querySelector(".navbar-links");
    navbar.classList.toggle("active");
  }
  
  return (
    /*Navbar is the desktop default navbar. 
    Navbar-open is for smaller devices*/
    <>
      <nav className="navbar">
      <div className='navbar-links'>
        <a href="#" className="navbar-item">home</a>
        <a href="#about" className="navbar-item">about</a>
        <a href="#work" className="navbar-item">portfolio</a>
        <a href="#contact" className="navbar-item">contact</a>
      </div>

      {clickedNav ? 
      <IoClose className='menu-icon-open' onClick={switchIcon}/> :
      <IoMenu className='menu-icon-closed' onClick={switchIcon}/>}
    </nav>
    
    </>
  )
}

export default Nav