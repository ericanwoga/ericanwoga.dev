import React from 'react'
import img01 from '../../images/hiragana_flashcards_preview.png';
import img02 from  '../../images/chimsara.dev_socialPreview.png';
import image from '../../images/bunny.gif'

function PortfolioItem({title, desc, imgUrl, stack, link, repo}) {
    return ( 
        <div>
            <img src={imgUrl} alt={title} className='portfolio-item' />
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