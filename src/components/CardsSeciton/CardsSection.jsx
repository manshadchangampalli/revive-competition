// card section (3th section )

import React from 'react'
import Cards from './Cards'
import './CardsSection.scss'

const CardsSection = () => {
  return (
    <div className='cards-section'>
        <div className="header">
            <h1>Check out latest reviews</h1>
            <p>
                see more
                <img src="images/icons/arrow.svg" alt="" />
            </p>
        </div>
        <div className="card-container">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/> 
            <Cards/> 
        </div>
    </div>
  )
}

export default CardsSection