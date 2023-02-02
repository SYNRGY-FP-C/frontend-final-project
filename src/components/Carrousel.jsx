// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function App() {
  const data = [
    {
      photo: "aa",
    },
  ];

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
        className="mySwiper"
      >
        <SwiperSlide className="w-full h">
          <img src="/images/tes-banner.png" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tes-banner.png" alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
