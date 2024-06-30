import React from 'react'
import './Home.css';
import heroImage from '../../assets/img/hero.jpg'
import Button1 from '../../components/Buttons/Button1';
import Cards, { Cards2 } from '../../components/Cards/Cards';
import { BsHddStack } from "react-icons/bs";
import Bar from '../../components/Bar/Bar';
import Cross, { Cross2 } from '../../components/Shapes/Cross';
import Circle from '../../components/Shapes/Circle';


const Home = () => {
    return (
        <>
            {/* ============================================ HERO ============================================= */}

            <section className="hero_section sections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero_content">
                                <Circle />
                                <h1>Secure IT Solutions for a more secure environment</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat molestias nisi soluta ipsam omnis, accusamus ex ab fugit asperiores eligendi?</p>
                                <Cross />
                                <Button1 className='btn1' item='GET STARTED' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Cross2 />
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
        </>
    )
}

export default Home;
