import React from 'react'
import './header.css'

function Header() {
  return (
        <div className="container header__container">
            <div class="home-title">
                <h1 id="home-title__hi">Hi, my name is </h1>
                <h1 id="home-title__erica">
                    <span>E</span>
                    <span>r</span>
                    <span>i</span>
                    <span>c</span>
                    <span>a</span>
                    </h1>
                {//<h1 id="home-title__hi">Hi, my name is </h1><h1 id="home-title__erica">Erica Nwoga</h1>
                }
            </div>
            <h2>I create lovely frontend products that are simple and 
                UI friendly.
            </h2>
        </div>
  )
}

export default Header