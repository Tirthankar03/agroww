// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <div className=" h-[500px] w-full  bg-black z-0 mb-10">
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full z-0"
        >
          <SwiperSlide className="bg-blue-500 text-white flex items-center justify-center w-full h-full">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-green-500 text-white flex items-center justify-center">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-yellow-500 text-white flex items-center justify-center">Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
