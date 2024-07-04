// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// SwiperCore.use([Navigation, Pagination]);

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 5000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const MyCarousel = () => {
    return (
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 3" />
          <p className="legend">Slide 3</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 4" />
          <p className="legend">Slide 4</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 5" />
          <p className="legend">Slide 5</p>
        </div>
      </Carousel>
    );
  };
  
  export default MyCarousel;
  


// const MyCarousel = () => {
//     return (
//         <Carousel
//             showArrows={true}
//             autoPlay={true}
//             infiniteLoop={true}
//             showThumbs={false}
//             showStatus={false}
//             interval={3000}
//         >
//             <div>
//                 <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
//                 <p className="legend">Slide 1</p>
//             </div>
//             <div>
//                 <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
//                 <p className="legend">Slide 2</p>
//             </div>
//             <div>
//                 <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
//                 <p className="legend">Slide 3</p>
//             </div>
//         </Carousel>
//     );
// };

// export default MyCarousel;


// const MySwiper = () => {
//     return (
//       <Swiper
//         spaceBetween={30} // Space between slides
//         slidesPerView={3} // Number of slides visible
//         navigation // Enables navigation buttons
//         // pagination={{ clickable: true }} // Enables pagination
//         loop={true} // Enables loop mode
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // Enables autoplay
//       >
//         <SwiperSlide>
//           <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://via.placeholder.com/600x400" alt="Slide 4" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://via.placeholder.com/600x400" alt="Slide 5" />
//         </SwiperSlide>
//       </Swiper>
//     );
//   };
  
//   export default MySwiper;
  