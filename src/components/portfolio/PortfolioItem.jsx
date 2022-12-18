import React from 'react'

function PortfolioItem({title, desc, imgUrl, stack, link, repo}) {
    return ( 
        <div className='ptf-item'>
            <h3 className='ptf-title'>{title}</h3>
            
            <div className='ptf-item-no-title'>
                <img src={imgUrl} alt={title} className='ptf-img' />
                <div className='ptf-text-content'>
                    <div>
                        <p className='ptf-desc'>{desc}</p>
                    </div>
                    <div className='ptf-tech-list'>
                        <p>
                            {stack.map(name => (
                                <span className="ptf-tech-list-item" key={name}>
                                    {name}
                                </span>)
                            )}
                        </p>
                    </div>
                    <div className='ptf-links'>
                        <a href={link} target="_blank"  rel="noopener noreferrer">website</a>
                        <a href={repo} target="_blank"  rel="noopener noreferrer">github</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default PortfolioItem;