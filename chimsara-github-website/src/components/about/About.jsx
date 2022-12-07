import React from 'react'
import './about.css'
import Technologies from '../technologies/Technologies';
import pfp from '../../images/Erica_LinkedIn_pfp.png';

function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className='about-content'>
        <div className='img-and-paragraph'>
            <img src={pfp} alt="Erica"></img>
            <div className='about-paragraph'>
              <p>
                Hi! My name is Erica Nwoga.
                I am a senior <strong className="deco-about-text">Computer Science </strong>
                student at the <strong className="deco-about-text">University of Maryland</strong>. 
                I am looking forward to graduating in December 2023. 
                Outside of school, I tutor elementary to high school students in mathmatics. ✏️ 
                <br></br>
                Other hobbies I enjoy are :
              </p><br></br>
              <p id="about-indent-list">
                🎨 Traditional and digital illustrating <br></br>
                📚 Reading novels and web-comics <br></br>
                🎾 Playing tennis <br></br>
              </p>
              <br></br>
              <p>
                And of course - web development! I fell in love with web development
                because it allows me to both express my artistic side, while also employing 
                my techinical programming skills. It's the best of both worlds.
                <br></br><br></br>
                Currently, I am looking for internship opportunities within the spheres of
                <strong className="deco-about-text"> UI Design</strong>, 
                <strong className="deco-about-text"> Web Development</strong>,
                <strong className="deco-about-text"> Software Development</strong>,
                or other related fields. 🌱 <br></br><br></br>
              </p>
            </div>
          </div>
        <Technologies />
      </div> 
    </section>
  )
}

export default About