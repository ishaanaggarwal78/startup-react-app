// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Work1 from '../../assets/img/recent-carousel-1.jpg'
import Work2 from '../../assets/img/recent-carousel-2.jpg'
import Work3 from '../../assets/img/recent-carousel-3.jpg'
import Work4 from '../../assets/img/recent-carousel-4.jpg'
import { CiSettings } from "react-icons/ci";
import './Carousel.css';

const MySwiperComponent = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="works_img">
                    <img src={Work1} alt="" />
                    <div className="icon">
                        <CiSettings />
                    </div>
                    <div className="works_content">
                        <h5>Incredible Infastructure</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ducimus.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="works_img">
                    <img src={Work2} alt="" />
                    <div className="icon">
                        <CiSettings />
                    </div>
                    <div className="works_content">
                        <h5>Incredible Infastructure</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ducimus.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="works_img">
                    <img src={Work3} alt="" />
                    <div className="icon">
                        <CiSettings />
                    </div>
                    <div className="works_content">
                        <h5>Incredible Infastructure</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ducimus.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="works_img">
                    <img src={Work4} alt="" />
                    <div className="icon">
                        <CiSettings />
                    </div>
                    <div className="works_content">
                        <h5>Incredible Infastructure</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ducimus.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="works_img">
                    <img src={Work1} alt="" />
                    <div className="icon">
                        <CiSettings />
                    </div>
                    <div className="works_content">
                        <h5>Incredible Infastructure</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ducimus.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="works_img">
                    <img src={Work2} alt="" />
                    <div className="icon">
                        <CiSettings />
                    </div>
                    <div className="works_content">
                        <h5>Incredible Infastructure</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ducimus.</p>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default MySwiperComponent;