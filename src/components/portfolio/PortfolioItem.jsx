import React from 'react'
import img01 from '../../images/hiragana_flashcards_preview.png';
import img02 from  '../../images/chimsara.dev_socialPreview.png';
import image from '../../images/bunny.gif'

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
                        <a href={link}>website</a>
                        <a href={repo}>github</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default PortfolioItem;