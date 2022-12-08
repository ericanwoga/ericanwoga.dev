import React from 'react'

function PortfolioItem({title, desc, imgUrl, stack, link, repo}) {
    return ( 
        <div>
            <img src={imgUrl} alt={title} className='portfolio-item'></img>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>
                {stack.map(name => (
                    <span>
                        {name}
                    </span>)
                )}
            </p>
            <a href={link}>view</a>
            <a href={repo}>code</a>
        </div>

     );
}

export default PortfolioItem;