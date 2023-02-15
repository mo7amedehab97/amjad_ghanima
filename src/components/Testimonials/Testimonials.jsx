import "./index.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import SingleTestiComp from "./SingleTestiComp";

const Testimonials = () => {
  return (
    <section className="testimonials_container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{ delay: 6000 }}
        navigation
        pagination={{ clickable: true }}
        className="swiper_container"
      >
        <SwiperSlide className="swiper_slider">
          <SingleTestiComp />
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <SingleTestiComp />
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper_slider">
          <SingleTestiComp />
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper_slider">
          <SingleTestiComp />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
