import React from 'react'
import './nav.css'

function Nav() {
  return (
    <nav className="nav">
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#work">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav