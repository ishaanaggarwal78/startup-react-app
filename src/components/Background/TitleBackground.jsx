import React from 'react'

import Background from '../../components/Background/Background'
import cross from '../../assets/img/cross-shape.svg'
import cross2 from '../../assets/img/cross-shape.svg'
import circle from '../../assets/img/circle-shape.png'
import triangle1 from '../../assets/img/triangle-1.svg'
import abstract from '../../assets/img/abstract.png'

const TitleBackground = (props, heading) => {
    return (
        <div className='pages_top'>
            <h3>{props.heading}</h3>
            <Background crossImg={cross} crossImg2={cross2} circleImg={circle} triangleImg={triangle1} triangleImg2={triangle1} abstractImg={abstract} />
        </div>
    )
}

export default TitleBackground;
