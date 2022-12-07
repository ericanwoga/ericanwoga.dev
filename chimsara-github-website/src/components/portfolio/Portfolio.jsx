import React from 'react'
import portfolioData from '../../data/portfolio.js'
import PortfolioItem from './PortfolioItem'
import './portfolio.css'

function Portfolio() {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className='portfolio-container'>
        {portfolioData.map(project =>(
          <PortfolioItem key={project.id}
            title={project.title}
            desc={project.desc}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
            repo={project.repo}
          />
        )
          )}
      </div>
    </section>
  )
}

export default Portfolio