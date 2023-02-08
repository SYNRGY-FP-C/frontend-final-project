/* eslint-disable @next/next/no-img-element */
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="Test" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="Test" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="Test" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="Test" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="Test" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
