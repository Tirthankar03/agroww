
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../assets/1_sparts.jpg'
import img2 from '../assets/2_sparts.jpg'
import img3 from '../assets/3_sparts.jpg'
import img4 from '../assets/4_sparts.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <div className=" h-[600px] w-full  bg-white z-0 mb-10">
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
          <SwiperSlide className="bg-white text-white flex items-center justify-center w-full h-full">
            <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-white text-white flex items-center justify-center w-full h-full">
            <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-white text-white flex items-center justify-center w-full h-full">
            <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-white text-white flex items-center justify-center w-full h-full">
            <img src={img4} alt="" />
            </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
