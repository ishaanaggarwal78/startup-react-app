import React from 'react'
import '../Background/Background.css';


const Background = (props, crossImg, crossImg2, circleImg) => {

    return (
        <div className='main_bg'>
            <div className='cross_shape'>
                <img src={props.crossImg} alt="" />
            </div>

            <div className='cross_shape2'>
                <img src={props.crossImg2} alt="" />
            </div>

            <div className='circle_shape'>
                <div className="inner">
                    <img src={props.circleImg} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Background;
