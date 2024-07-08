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
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import './TestimonialCarousel.css';


const TestimonialCarousel = () => {
    return (
        <div className="feedback_main">
            <Swiper className='Swiper'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="testimonial_block">
                        <div className="user_img">
                            <img src={Team1} alt="" />
                            <h5>Sarah Taylor</h5>
                            <p>Ceo at Envato</p>
                        </div>
                        <div className="user_feedback">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eum nisi quam asperiores fuga neque quos enim quasi consequatur placeat.</p>
                            <div className="user_rating">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStarHalf />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial_block">
                        <div className="user_img">
                            <img src={Team2} alt="" />
                            <h5>Sarah Taylor</h5>
                            <p>Ceo at Envato</p>
                        </div>
                        <div className="user_feedback">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eum nisi quam asperiores fuga neque quos enim quasi consequatur placeat.</p>
                            <div className="user_rating">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStarHalf />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial_block">
                        <div className="user_img">
                            <img src={Team3} alt="" />
                            <h5>Sarah Taylor</h5>
                            <p>Ceo at Envato</p>
                        </div>
                        <div className="user_feedback">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eum nisi quam asperiores fuga neque quos enim quasi consequatur placeat.</p>
                            <div className="user_rating">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStarHalf />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial_block">
                        <div className="user_img">
                            <img src={Team4} alt="" />
                            <h5>Sarah Taylor</h5>
                            <p>Ceo at Envato</p>
                        </div>
                        <div className="user_feedback">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eum nisi quam asperiores fuga neque quos enim quasi consequatur placeat.</p>
                            <div className="user_rating">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStarHalf />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial_block">
                        <div className="user_img">
                            <img src={Team5} alt="" />
                            <h5>Sarah Taylor</h5>
                            <p>Ceo at Envato</p>
                        </div>
                        <div className="user_feedback">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eum nisi quam asperiores fuga neque quos enim quasi consequatur placeat.</p>
                            <div className="user_rating">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStarHalf />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default TestimonialCarousel;
