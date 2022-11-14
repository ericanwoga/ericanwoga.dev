import React , {useState } from 'react'
import './nav.css'
import {IoMenu, IoClose} from 'react-icons/io5'


function Nav() {
  const [clickedNav, setClickedNav] = useState(false);
  const handleClick = () => {
    setClickedNav(!clickedNav);
  }
  
  return (
    /*Navbar is the desktop default navbar. 
    Navbar-open is for smaller devices*/
    <>
      <nav className="navbar">
      {clickedNav ? 
      <IoClose className='menu-icon-open' onClick={handleClick}/> :
      <IoMenu className='menu-icon-closed' onClick={handleClick}/>}

      <div className='navbar-links'>
        <a href="#" className="navbar-item">home</a>
        <a href="#about" className="navbar-item">about</a>
        <a href="#work" className="navbar-item">portfolio</a>
        <a href="#contact" className="navbar-item">contact</a>
      </div>

        <div className="menu-dropdown">
          <span class="dropdown-item"></span>
          <span class="dropdown-item"></span>
          <span class="dropdown-item"></span>
        </div>  
    </nav>
    
    </>
  )
}

export default Nav