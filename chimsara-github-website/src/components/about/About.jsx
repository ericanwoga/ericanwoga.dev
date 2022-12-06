import React from 'react'
import './about.css'
import pfp from '../../images/Erica_LinkedIn_pfp.png';

function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className='about-content-container'>
        <img src={pfp} alt="It's me, Erica!"/>
        <p>
          Hi! My name is Erica Nwoga. I am a senior Computer Science student at the University of Maryland. 
          Outside of my classes, I tutor elementary to high school students in mathematics. 
          
          During my free time, I enjoy ...
          <ul>
            <li>🎨 Traditional and digital illustrating </li>
            <li>📚 Reading novels and web-comics </li>
            <li>🎾 Playing tennis</li>
          </ul>
          And of course - web development!
          I am looking for internship oppurtunities to immerse myself in the fields of
          <strong> UI Design</strong>, 
          <strong> Web Development</strong>,
          <strong> Software Development</strong>,
          or any other related fields. 🌱 
        </p>
      </div> 
    </section>
  )
}

export default About