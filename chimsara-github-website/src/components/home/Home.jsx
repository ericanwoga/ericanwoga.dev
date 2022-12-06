import React from 'react'
import './home.css'
import Title from '../title/Title'

function Home() {
  return (
    <section id="home">
      <Title />
      <h2>An aspiring front-end<span className='deco-subtitle-text'>   developer </span></h2> 
      
      <h2>with appreciation for user-friendly<span className='deco-subtitle-text'>   design</span></h2>
    </section>
  )
}

export default Home