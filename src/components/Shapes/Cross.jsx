import React from 'react'
import cross from '../../assets/img/cross-shape.svg'
import './Cross.css'

const Cross = () => {
    return (
        <div className='cross_shape'>
            <img src={cross} alt="" />
        </div>
    )
}

export const Cross2 = () => {
    return (
        <div className='cross_shape2'>
            <img src={cross} alt="" />
        </div>
    )
}

export default Cross;
