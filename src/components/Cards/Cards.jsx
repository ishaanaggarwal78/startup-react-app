import React from 'react'
import './Cards.css'
import { NavLink } from 'react-router-dom'


const Cards = (props, icon, heading, content) => {
    return (
        <>
            <div className="cards">
                <div className="cards_icon">
                    <div>{props.icon}</div>
                </div>
                <NavLink>{props.heading}</NavLink>
                <p>{props.content}</p>
            </div>
        </>
    )
}

export const Cards2 = (props, icon, heading, content) => {
    return (
        <>
            <div className="cards2">
                <div className="cards_icon">
                    <div>{props.icon}</div>
                </div>
                <div className="cards_content">
                    <NavLink>{props.heading}</NavLink>
                    <p>{props.content}</p>
                </div>
            </div>
        </>
    )
}

export default Cards
