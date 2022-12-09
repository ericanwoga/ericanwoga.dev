import React from 'react'
import './home.css'
import laptop from '../../images/laptop.jpg'
import bunny from '../../images/bunny.gif'

function Home() {
  return (
    <section id="home">
      <div className="entire-title">
        <h1 className="home-title">Hi! I'm Erica</h1>
        <div>
          <h2 className='home-subtitle'>An aspiring front-end 
            <span className='deco-subtitle-text'> developer </span>
            with love for user-friendly 
            <span className='deco-subtitle-text'> design</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Home