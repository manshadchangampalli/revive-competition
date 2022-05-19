import React from 'react'
import './LastSection.scss'

const LastSection = () => {
    return (
        <div className="last-section">
            <div className="top-button">
                <img src="images/icons/arrowTop.svg" alt="" />
            </div>
            <div className="box">
                <div className="img">
                    <img src="images/Img1.jpg" alt="" />
                </div>
                <div className="content">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum velit veniam quo et itaque, alias voluptate amet voluptates ratione quasi a asperiores ipsum ducimus qui labore dignissimos, quidem nisi corrupti? Perspiciatis unde similique omnis a distinctio aliquid iste labore quidem sapiente maiores voluptatibus, consequatur, minus sunt, eius placeat nisi?</p>
                </div>
            </div>

            <div className="controller">
                <h1>.</h1>
                <h1>.</h1>
                <h1>.</h1>
            </div>
        </div>
    )
}

export default LastSection