import React from 'react'
import './Hero.scss'

const Hero = () => {
    return (
        <div className="hero-page">
            <div className="left-side">
                <div className="header">
                    <h2>Discovery</h2>
                    <div className="items">
                        <p>Login</p>
                        <div className='search'>
                            <p>Search</p>
                            <img src="images/icons/search.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="left-side-content">
                    <div className="content-container">
                        <h1>Join Discovery, <br />
                            <span>the new Community   <br /> for book lovers</span>
                        </h1>
                        <div>
                            <button>Go to Discovery
                                <img src="images/icons/link.svg" alt="" />
                            </button>
                        </div>
                        <p>Trust Book Recommendations from real people, not robots 😄</p>
                    </div>
                </div>
            </div>
            <img src="images/Img3.png" alt="image" />
        </div>
    )
}

export default Hero