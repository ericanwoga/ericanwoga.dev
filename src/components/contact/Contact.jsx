iimport React from 'react'
import './contact.css'
import {IoLogoLinkedin, IoMail} from 'react-icons/io5'
import {GoMarkGithub} from 'react-icons/go'

function Contact() {
  return (
    <section id="contact">
      <h1 className='section-header'>Let's Connect</h1>
      <div className='contact-content'>
        <div className='contact-list'>
          {//<a href='https://www.linkedin.com/in/ericanwoga/' target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className='linkedin-icon'/> </a>
          //<a href="https://github.com/ericanwoga" target="_blank" rel="noopener noreferrer"><GoMarkGithub className='github-icon'/> </a>
          //<a href="mailto: nwoga.erica@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail className='email-icon'/> </a>
        }
          <a href='https://www.linkedin.com/in/ericanwoga/' target="_blank" rel="noopener noreferrer" className='linkedin-icon'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" title="LinkedIn"/>
          </a>
          <a href="mailto: nwoga.erica@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail className='email-icon'/></a>
          <a href="https://github.com/ericanwoga" target="_blank" rel="noopener noreferrer"><GoMarkGithub className='github-icon'/> </a>

        </div>

      </div> 
    </section>
  )
}

export default Contact
