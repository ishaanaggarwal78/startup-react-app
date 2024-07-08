import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import { Button1 } from './Buttons/Button1';
import { Button2 } from './Buttons/Button2';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="nav_logo">
                            <h2>Startup</h2>
                        </div>
                        <div className="nav_links">
                            <ul className="nav_ul">
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>Projects</NavLink>
                                </li>
                            </ul>
                            <div className="nav_btns">
                                <Button2 />
                                <Button1 />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
