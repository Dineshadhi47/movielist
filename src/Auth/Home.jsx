import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="carousel"
      >
        <SwiperSlide>
          <img src="pvr1.jpg" alt="Movie 1" className="carousel-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="pvr2.webp" alt="Movie 2" className="carousel-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="pvr3.webp" alt="Movie 3" className="carousel-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
