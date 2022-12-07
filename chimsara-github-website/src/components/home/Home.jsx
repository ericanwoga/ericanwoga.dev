import React from 'react'
import './home.css'
import bunny from '../../images/bunny.gif'
import Title from '../title/Title'

function Home() {
  return (
    <section id="home">
      
      <h1>Hi! I'm Erica</h1>
      <div id="subtitle-text">
        <h2>An aspiring front-end
          <span className='deco-subtitle-text'>   developer </span></h2> 
        <h2>with appreciation for user-friendly
          <span className='deco-subtitle-text'>   design</span></h2>
      </div>
      <img src={bunny} id="bunny"/>
    </section>
  )
}

export default Home