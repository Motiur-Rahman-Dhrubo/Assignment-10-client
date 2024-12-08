import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const GameIndustry = () => {
    return (
        <div className="mt-10">
            <h2 className="lg:text-5xl md:text-3xl text-xl font-medium text-center">Top 10 Game Maker Industries</h2>
            <div className='mt-5'>
                <div className="slider-container">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/nintendo1.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Nintendo</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>A pioneer of gaming, known for iconic franchises like Mario, Zelda, and Pokémon, blending nostalgia with innovation.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/sony2.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Sony Interactive Entertainment</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>The creators of PlayStation, offering cutting-edge technology and a vast library of award-winning games.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/microsoft3.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Microsoft Xbox Game Studios</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Makers of legendary franchises like Halo and Forza, redefining gaming with Xbox and Game Pass.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/epic4.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Epic Games</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Revolutionizing gaming with Fortnite and the Unreal Engine, empowering creators globally.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/valve5.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Valve Corporation</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Developers of Half-Life and Steam, setting benchmarks for PC gaming and digital distribution.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/ea6.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Electronic Arts (EA)</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Known for FIFA, The Sims, and Battlefield, EA has been a mainstay in gaming for decades.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/ubisoft7.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Ubisoft</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Creators of Assassin’s Creed, Far Cry, and Just Dance, delivering diverse gaming adventures.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/activision8.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Activision Blizzard</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Behind Call of Duty and World of Warcraft, they have left an indelible mark on gaming culture.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/tencent9.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Tencent Games</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>A major player in mobile and online gaming, owning stakes in many international studios.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full" src="/assets/top_indu/square10.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Square Enix</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Masters of RPGs like Final Fantasy and Kingdom Hearts, crafting rich narratives and immersive worlds.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default GameIndustry;