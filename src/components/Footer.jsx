import React from 'react'
import MainLogo from '../../src/assets/img/main-logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className="footer sections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer_first">
                                <img src={MainLogo} alt="" />
                                <span>Startup</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis numquam pariatur natus ab eaque soluta dolorem quo rerum hic. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, eligendi!</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_second">
                                <h5>Company</h5>
                                <ul className="footer_links">
                                    <li><NavLink to="">About Us</NavLink></li>
                                    <li><NavLink to="">Services</NavLink></li>
                                    <li><NavLink to="">Features</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5>Support</h5>
                            <ul className="footer_links">
                                <li><NavLink to="">FAQ's</NavLink></li>
                                <li><NavLink to="">Privacy Policy</NavLink></li>
                                <li><NavLink to="">Terms & Conditions</NavLink></li>
                                <li><NavLink to="">Team</NavLink></li>
                                <li><NavLink to="">Contact us</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_fourth">
                                <h5>Address</h5>
                                <ul>
                                    <li><IoLocationOutline />27 Division St, New York,<br /> NY, 10002, USA</li>
                                    <li><MdOutlineEmail />Email: startp@gmail.com</li>
                                    <li><FiPhone />Phone: <NavLink to="">+91 98494 44754</NavLink></li>
                                </ul>
                                <div className="social_links">
                                    <div className="social">
                                        <FiFacebook />
                                    </div>
                                    <div className="social">
                                        <RiTwitterXFill />
                                    </div>
                                    <div className="social">
                                        <IoLogoInstagram />
                                    </div>
                                    <div className="social">
                                        <FiLinkedin />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer_end">
                            <p>Copyright © 2024 StartP. All rights reserved by <NavLink>EnvyTheme</NavLink></p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
