import React from 'react'
import './Home.css';
import MainLogo from '../../assets/img/main-logo.png'
import heroImage from '../../assets/img/hero.jpg'
import Button1 from '../../components/Buttons/Button1';
import Cards, { Cards2 } from '../../components/Cards/Cards';
import { BsHddStack } from "react-icons/bs";
import Bar from '../../components/Bar/Bar';
import Carousel from '../../components/Carousel/Carousel';
import Background from '../../components/Background/Background';
import cross from '../../assets/img/cross-shape.svg'
import cross2 from '../../assets/img/cross-shape.svg'
import circle from '../../assets/img/circle-shape.png'

import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <>
            {/* ============================================ HERO ============================================= */}

            <section className="hero_section sections">
                <Background crossImg={cross} crossImg2={cross2} circleImg={circle} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero_content">
                                <h1>Secure IT Solutions for a more secure environment</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat molestias nisi soluta ipsam omnis, accusamus ex ab fugit asperiores eligendi?</p>
                                <Button1 className='btn1' item='GET STARTED' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={heroImage} alt="Error uploading" className='img-fluid' />
                        </div>
                    </div>

                    <div className="main_cards">
                        <div className="row">
                            <div className="col-lg-3">
                                <Cards icon={<BsHddStack />} heading='Zero Configuration' content='Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.' />
                            </div>
                            <div className="col-lg-3">
                                <Cards icon={<BsHddStack />} heading='Zero Configuration' content='Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ HOSTING SERVICES ============================================= */}


            <section className="hosting_services sections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services_content">
                                <h2>Cloud Hosting Services</h2>
                                <Bar />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aliquam perspiciatis ex porro enim modi sit numquam impedit molestias nam?</p>

                                <div className="services_blocks">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Cards icon={<BsHddStack />} content='Cloud Database' />
                                        </div>
                                        <div className="col-lg-6">
                                            <Cards icon={<BsHddStack />} content='Website Hosting' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div>
            </section>
            {/* ============================================ DESIGN & DEVELOPMENT ============================================= */}


            <section className="designDev sections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">
                            <div className="services_content">
                                <h2>Cloud Hosting Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aliquam perspiciatis ex porro enim modi sit numquam impedit molestias nam?</p>

                                <div className="services_blocks">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Cards icon={<BsHddStack />} content='Cloud Database' />
                                        </div>
                                        <div className="col-lg-6">
                                            <Cards icon={<BsHddStack />} content='Website Hosting' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================================ FEATURES ============================================= */}

            <section className="features sections">
                <div className="container">
                    <div className="row">
                        <div className="sections_head">
                            <h2>Our Features</h2>
                            <Bar />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda incidunt repellendus! Ab aperiam nesciunt natus voluptates.</p>
                        </div>
                    </div>
                    <div className="features_blocks">
                        <div className="row">
                            <div className="col-lg-6">
                                <Cards2 icon={<BsHddStack />} heading='Incredible Infrastructure' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nam error ratione recusandae laboriosam autem dolorum modi quibusdam amet cum.' />
                            </div>
                            <div className="col-lg-6">
                                <Cards2 icon={<BsHddStack />} heading='Incredible Infrastructure' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nam error ratione recusandae laboriosam autem dolorum modi quibusdam amet cum.' />
                            </div>
                            <div className="col-lg-6">
                                <Cards2 icon={<BsHddStack />} heading='Incredible Infrastructure' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nam error ratione recusandae laboriosam autem dolorum modi quibusdam amet cum.' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ TEAM ============================================= */}

            <section className="our_team sections">
                <div className="container">
                    <div className="row">
                        <div className="sections_head">
                            <h2>Our Team</h2>
                            <Bar />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda incidunt repellendus! Ab aperiam nesciunt natus voluptates.</p>
                        </div>
                    </div>

                    <div className="row">

                    </div>
                </div>
                <Carousel />
            </section>

            {/* ============================================ COUNTER ============================================= */}

            <section className="counter_main sections">
                <div className="container">
                    <div className="row">
                        <div className="sections_head">
                            <h2>We Always Try To Understand Users Expectation</h2>
                            <Bar />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda incidunt repellendus! Ab aperiam nesciunt natus voluptates.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg d-flex justify-content-center">
                            <div className="figures">
                                <h2>180K</h2>
                                <p>Downloaded</p>
                            </div>
                        </div>
                        <div className="col-lg d-flex justify-content-center">
                            <div className="figures">
                                <h2>20K</h2>
                                <p>Feedback</p>
                            </div>
                        </div>
                        <div className="col-lg d-flex justify-content-center">
                            <div className="figures">
                                <h2>500K +</h2>
                                <p>Workers</p>
                            </div>
                        </div>
                        <div className="col-lg d-flex justify-content-center">
                            <div className="figures">
                                <h2>70 +</h2>
                                <p>Contributors</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="counter_contact">
                            <div className="text">
                                <h5>Have any question about us?</h5>
                                <p>Don't hesitate to contact us</p>
                            </div>
                            <div className="counter_btn">
                                <Button1 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ RECENT WORKS ============================================= */}

            <section className="recent_works sections">
                <Background />
                <div className="container">
                    <div className="row">
                        <div className="sections_head">
                            <h2>Our Recent Works</h2>
                            <Bar />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda incidunt repellendus! Ab aperiam nesciunt natus voluptates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ HEADING ============================================= */}

            {/* <Background /> */}

            {/* ============================================ FOOTER ============================================= */}

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
                    </div>
                </section>
            </footer>

        </>
    )
}

export default Home;
