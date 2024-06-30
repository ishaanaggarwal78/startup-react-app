import React from 'react';
import './Circle.css';
import circle from '../../assets/img/circle-shape.png'


const Circle = () => {
    return (
        <div className='circle_shape'>
            <img src={circle} alt="" />
        </div>
    )
}

export default Circle
