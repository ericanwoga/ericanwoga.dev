import React from 'react'
import './contact.css'
import {IoLogoLinkedin, IoMail} from 'react-icons/io5'
import {GoMarkGithub} from 'react-icons/go'

function Contact() {
  return (
    <section id="contact">
      <h1 className='section-header'>Let's Connect</h1>
      <div className='contact-content'>
        <div className='contact-list'>
          <span><IoLogoLinkedin className='linkedin-icon' onClick=""/> </span>
          <span><GoMarkGithub className='github-icon' onClick=""/> </span>
          <span><IoMail className='email-icon' onClick=""/> </span>
        </div>

      </div> 
    </section>
  )
}

export default Contact