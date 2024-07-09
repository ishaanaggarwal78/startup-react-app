import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import { Button1 } from './Buttons/Button1';
import { Button2 } from './Buttons/Button2';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 100);
    });

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
                                    <NavLink to='/services'>Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/projects'>Projects</NavLink>
                                </li>
                            </ul>
                            <div className="nav_btns">
                                <Button2 />
                                <Button1 />
                            </div>
                            <div className="sidebar_icon">
                                <GiHamburgerMenu />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
