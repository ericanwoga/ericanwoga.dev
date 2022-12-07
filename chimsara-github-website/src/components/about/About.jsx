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
          Hi! My name is Erica Nwoga.
          I am a senior <strong className="deco-about-text">Computer Science </strong>
          student at the <strong className="deco-about-text">University of Maryland</strong>. 
          I am looking forward to graduating in December 2023. 
          Outside of school, I tutor elementary to high school students in mathematics. ✏️ 
          <br></br>
          Other hobbies I enjoy are :
          <br></br>
          <br></br>
          <ul>
            <li>🎨 Traditional and digital illustrating </li>
            <li>📚 Reading novels and web-comics </li>
            <li>🎾 Playing tennis </li>
          </ul>
          <br></br>
          And of course - web development! I fell in love with web development
          because it allows me to both express my artistic side, while also employing 
          my techinical programming skills. It's the best of both worlds.
          <br></br>
          <br></br>
          Currently, I am looking for internship oppurtunities within the spheres of
          <strong className="deco-about-text"> UI Design</strong>, 
          <strong className="deco-about-text"> Web Development</strong>,
          <strong className="deco-about-text"> Software Development</strong>,
          or other related fields. 🌱 
        </p>
      </div> 
    </section>
  )
}

export default About