import React from 'react'
import './about.css'
import Technologies from '../technologies/Technologies';
import pfp from '../../images/Erica_LinkedIn_pfp.png';

function About() {
  return (
    <section id="about">
      <h1 className='section-header'>About Me</h1>
      <div className='about-content'>
        <div className='img-and-paragraph'>
            <img src={pfp} alt="Erica"></img>
            <div className='about-paragraph'>
              <p>
                Hi! My name is Erica Nwoga.
                I am a <strong className="deco-about-text">Computer Science </strong>
                graduate from the <strong className="deco-about-text">University of Maryland</strong>. 
                 
                Outside of school, I tutor elementary to high school students in mathmatics. Other hobbies I enjoy are :
                <br />
                <br />
                🎨 Traditional and digital illustrating <br></br>
                📚 Reading novels and comics <br></br>
                🎾 Playing tennis
                <br />
                <br />
                Currently, I am looking for full-time opportunities within
                <strong className="deco-about-text"> Software Development</strong>, 
                <strong className="deco-about-text"> Web Development</strong>,
                <strong className="deco-about-text"> Cybersecurity</strong>,
                or other related fields. 🌱 <br></br><br></br>
              </p>
            </div>
          </div>
      </div> 
    </section>
  )
}

export default About
