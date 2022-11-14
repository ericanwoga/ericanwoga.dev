import React , {useState } from 'react'
import './nav.css'
import {IoMenu, IoClose} from 'react-icons/io5'


function Nav() {
  const [clickedNav, setClickedNav] = useState(false);
  const handleClick = () => {
    setClickedNav(!clickedNav);
  }
  
  return (
  <nav className={clickedNav ? "navbar-open" : "navbar" } >
    {clickedNav ? 
    <IoClose className='menu-icon-open' onClick={handleClick}/> :
    <IoMenu className='menu-icon-closed' onClick={handleClick}/>}

    <a href="#">home</a>
    <a href="#about">about</a>
    <a href="#work">portfolio</a>
    <a href="#contact">contact</a>
    
  </nav>
  )
}

export default Nav