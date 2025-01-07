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
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwUY66MkJS0Koui1MTVDXYYtXbkfX12ttq3fdpfJN5-_r9WF9SZKC1OGHz6vq4Jvq5T8&usqp=CAU" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Nintendo</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>A pioneer of gaming, known for iconic franchises like Mario, Zelda, and Pokémon, blending nostalgia with innovation.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://sonyinteractive.com/tachyon/2024/06/featuredimage-General.jpg" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Sony Interactive Entertainment</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>The creators of PlayStation, offering cutting-edge technology and a vast library of award-winning games.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcHme6TDdvFxSy18xCplPSgKabZ7QTELdtg&s" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Microsoft Xbox Game Studios</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Makers of legendary franchises like Halo and Forza, redefining gaming with Xbox and Game Pass.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://cdn2.unrealengine.com/egs-brand-gradient-1920x1080-fee5291b4190.jpg" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Epic Games</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Revolutionizing gaming with Fortnite and the Unreal Engine, empowering creators globally.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-m1j1z2eSlIEGR0owc_1B6opYWGYPX6FeQ&s" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Valve Corporation</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Developers of Half-Life and Steam, setting benchmarks for PC gaming and digital distribution.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://www.logitech.com/content/dam/logitech/vc/nl/resource-center/case-study/electronic-arts-logo.png.imgw.1000.1000.jpg" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Electronic Arts (EA)</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Known for FIFA, The Sims, and Battlefield, EA has been a mainstay in gaming for decades.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1Cgf93EyvJuQEluy1j6yxv/d9cfe0ea1f62619ee48667bcedc3e6eb/NeutralLogo_960x540.jpg" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Ubisoft</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Creators of Assassin’s Creed, Far Cry, and Just Dance, delivering diverse gaming adventures.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://variety.com/wp-content/uploads/2015/05/activision-blizzard.jpg?w=1000&h=562&crop=1" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Activision Blizzard</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>Behind Call of Duty and World of Warcraft, they have left an indelible mark on gaming culture.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://static.apiseven.com/uploads/2024/06/03/rtJUR849_tencent-games.png" alt="game industry" />
                                <h2 className='lg:text-lg text-base font-bold mt-2'>Tencent Games</h2>
                                <p className='lg:text-base text-sm font-light mt-1'>A major player in mobile and online gaming, owning stakes in many international studios.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "180px"}}>
                            <div className='lg:p-4 border rounded-xl md:p-3 p-2'>
                                <img className="aspect-[3/2] rounded-xl w-full border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8QYNRgtsfTuGpIE5av6qP0SI3uta5vuQNA&s" alt="game industry" />
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