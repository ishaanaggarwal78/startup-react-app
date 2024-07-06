import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Team1 from '../../assets/img/team-1.jpg'
import Team2 from '../../assets/img/team-2.jpg'
import Team3 from '../../assets/img/team-3.jpg'
import Team4 from '../../assets/img/team-4.jpg'
import Team5 from '../../assets/img/team-5.jpg'
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import './TeamCarousel.css';

const TeamCarousel = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="team_carousel">
                    <div className="team_img">
                        <img src={Team1} alt="" />
                    </div>
                    <div className="team_name">
                        <h5>Josh Buttler</h5>
                        <p>Web Developer</p>
                    </div>
                    <div className="social">
                        <FiFacebook />
                        <RiTwitterXFill />
                        <IoLogoInstagram />
                        <FiLinkedin />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team_carousel">
                    <div className="team_img">
                        <img src={Team2} alt="" />
                    </div>
                    <div className="team_name">
                        <h5>Josh Buttler</h5>
                        <p>Web Developer</p>
                    </div>
                    <div className="social">
                        <FiFacebook />
                        <RiTwitterXFill />
                        <IoLogoInstagram />
                        <FiLinkedin />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team_carousel">
                    <div className="team_img">
                        <img src={Team3} alt="" />
                    </div>
                    <div className="team_name">
                        <h5>Josh Buttler</h5>
                        <p>Web Developer</p>
                    </div>
                    <div className="social">
                        <FiFacebook />
                        <RiTwitterXFill />
                        <IoLogoInstagram />
                        <FiLinkedin />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team_carousel">
                    <div className="team_img">
                        <img src={Team4} alt="" />
                    </div>
                    <div className="team_name">
                        <h5>Josh Buttler</h5>
                        <p>Web Developer</p>
                    </div>
                    <div className="social">
                        <FiFacebook />
                        <RiTwitterXFill />
                        <IoLogoInstagram />
                        <FiLinkedin />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team_carousel">
                    <div className="team_img">
                        <img src={Team5} alt="" />
                    </div>
                    <div className="team_name">
                        <h5>Josh Buttler</h5>
                        <p>Web Developer</p>
                    </div>
                    <div className="social">
                        <FiFacebook />
                        <RiTwitterXFill />
                        <IoLogoInstagram />
                        <FiLinkedin />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team_carousel">
                    <div className="team_img">
                        <img src={Team1} alt="" />
                    </div>
                    <div className="team_name">
                        <h5>Josh Buttler</h5>
                        <p>Web Developer</p>
                    </div>
                    <div className="social">
                        <FiFacebook />
                        <RiTwitterXFill />
                        <IoLogoInstagram />
                        <FiLinkedin />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default TeamCarousel;