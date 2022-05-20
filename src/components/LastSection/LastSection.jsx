// it is the last section which is before the copyright

import React, { useEffect, useRef, useState } from 'react'
import Boxs from './Boxs'
import './LastSection.scss'

const LastSection = () => {
    const [index, setIndex] = useState(1)
    const [translate , setTransate] = useState( index * -100)
    const item = useRef()


    return (
        <div className="last-section">
            <div onClick={() => window.scrollTo(0, 0)} className="top-button">
                <img src="images/icons/arrowTop.svg" alt="" />
            </div>
            <div ref={item} style={{transform:`translateX(${index * -100}vw)`}} className="box-container">
                <Boxs />
                <Boxs />
                <Boxs />
            </div>
            <div className="controller">
                <span   style={{fontSize:index===0&&"70px"}} onClick={()=>setIndex(0)}>.</span>
                <span   style={{fontSize:index===1&&"70px"}} onClick={()=>setIndex(1)}>.</span>
                <span   style={{fontSize:index===2&&"70px"}} onClick={()=>setIndex(2)}>.</span>
            </div>
            
        </div>
    )
}

export default LastSection