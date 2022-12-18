import React , {useState, useRef } from 'react'
import './nav.css'
import {IoMenu, IoClose} from 'react-icons/io5'


function Nav() {
  const [clickedNav, setClickedNav] = useState(false);

  //changes the actual icon
  const switchIcon = () => {
    setClickedNav(!clickedNav);
    toggleNav();
  }

  //changes the orientaion of the links
  const toggleNav = () => {
    const navbar = document.querySelector(".navbar-links");
    //adds class name "active" or removes it based on click
    //navbar.classList.toggle("active");
    if (navbar.className === "navbar-links") {
      navbar.className += " active";
    } else {
      navbar.className = "navbar-links";
    }
  }
  
  return (
    /*Navbar is the desktop default navbar. 
    Navbar-open is for smaller devices*/
    <>
      <nav className="navbar">
        <ul className='navbar-links'>
          <li><a href="#home" className="navbar-item">home</a></li>
          <li><a href="#about" className="navbar-item">about</a></li>
          <li><a href="#portfolio" className="navbar-item">portfolio</a></li>
          <li><a href="#contact" className="navbar-item">contact</a></li>
        </ul>

        {clickedNav ? 
        <IoClose className='menu-icon-open' onClick={switchIcon}/> :
        <IoMenu className='menu-icon-closed' onClick={switchIcon}/>}
      </nav>
    </>
  )
}

export default Nav