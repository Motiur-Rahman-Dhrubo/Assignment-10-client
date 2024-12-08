import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const TopGames = () => {
    return (
        <div className="mt-10">
            <h2 className="lg:text-5xl md:text-3xl text-xl font-medium text-center">The Best Games of 2024 You Can Try</h2>
            <div className="mt-5">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1.5,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-1.png" alt="1" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-2.png" alt="2" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-3.png" alt="3" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-4.png" alt="4" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-5.png" alt="5" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-6.png" alt="6" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-7.png" alt="7" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-8.png" alt="8" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-9.png" alt="9" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-10.png" alt="10" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-11.png" alt="11" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl" src="/assets/top_games/game-12.png" alt="12" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TopGames;