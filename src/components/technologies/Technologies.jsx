import React from 'react'
import './technologies.css';

function Technologies() {
  return (
    <div id="technologies">
        <h1 className="section-header" id="tech-stack">Tech Stack</h1>
        <div className="tech-list">
          <div className="tech-list-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="html" title="HTML"/> HTML</div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="css" title="CSS" /></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" title="JavaScript"/></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" title="ReactJS"/></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" alt="java"  title="Java" /></div>
        </div>
    </div>
  )
}

export default Technologies