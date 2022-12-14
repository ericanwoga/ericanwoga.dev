import React from 'react'
import './technologies.css';

function Technologies() {
  return (
    <section id="technologies">
        <h1 className="section-header">Tech Stack</h1>
        <div className="tech-list">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="html" title="HTML"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="css" title="CSS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" title="JavaScript"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" title="ReactJS"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" alt="java"  title="Java" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"  title="Node.js" />
          
        </div>
    </section>
  )
}

export default Technologies