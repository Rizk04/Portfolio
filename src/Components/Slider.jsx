import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import QuikQuest from '../assets/QuikQuest.jpg';
import DevAd from '../assets/DevAd.jpg';
import HoverText from "./HoverText";

const data = [
  {
    name: "Status: Halted",
    img: QuikQuest,
    link: "https://github.com/Rizk04/QuikQuest-Ecommerce"
  },
  {
    name: "Status: In Progress",
    img: DevAd,
    link: "https://github.com/Rizk04/Dev-Adventures"
  },
];

function Slider() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="w-full max-w-screen-lg">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="w-full"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {data.map((item) => (
            <SwiperSlide 
              key={item.name} 
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="flex flex-col items-center text-white rounded-xl px-6 py-3 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]">
                <HoverText>
                  <a href={item.link} className="flex flex-col h-full">
                    <div className="flex-grow flex items-center justify-center">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="object-cover w-full h-auto rounded-xl"  
                      />
                    </div>
                    <p className="text-lg font-semibold mt-2 text-center">{item.name}</p>
                  </a>
                </HoverText>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
