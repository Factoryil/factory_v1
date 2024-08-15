import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './IconSlider.css';

const IconSlider = ({ items }) => {
    const swiperRef = useRef(null);

    return (
        <div className="icon-slider-container">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay, Parallax]}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                parallax={true}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="icon-slide">
                            <img src={item.icon} alt={`Icon ${index}`} className="icon-image" />
                            <p>{item.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default IconSlider;
