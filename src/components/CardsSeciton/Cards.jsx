// it is the card in the cards section (3th section )

import React from 'react'

const Cards = () => {
    return (
        <div className="card">
            <div className='image-container'>
                <img src="images/Img2.jpg" alt="" />
            </div>
            <div className="bottom-bar">
                <h2>Rating: 5/6</h2>
                <button>Read</button>
            </div>
        </div>
    )
}

export default Cards