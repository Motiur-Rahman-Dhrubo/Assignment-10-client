import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './slider.css';

const Slider = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className='mt-5'>
            <AutoplaySlider play={true} interval={3000} className='w-full aspect-[3/1]'>
                <div className='w-full rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl bg-blue-500 lg:p-5 md:p-4 p-3 flex items-center gap-5'>
                    <img src="/assets/chill-gamer-logo.png" alt="slider img" className='w-5/12 object-center aspect-[3/2] object-cover rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl rounded-3xl' />
                    <div className='w-7/12'>
                        <h2 className='lg:text-5xl md:text-3xl text-xl'>Chill Gamer</h2>
                        <p className='lg:text-2xl md:text-lg text-sm lg:mt-4 md:mt-3 mt-2'>A Game Review Application</p>
                    </div>
                </div>
                <div className='w-full rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl bg-amber-400 lg:p-5 md:p-4 p-3 flex items-center gap-5'>
                    <img src="/assets/rating.png" alt="slider img" className='w-5/12 object-center aspect-[3/2] object-cover rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl rounded-3xl' />
                    <div className='w-7/12'>
                        <h2 className='lg:text-5xl md:text-3xl text-xl'>Game Review</h2>
                        <p className='lg:text-2xl md:text-lg text-sm lg:mt-4 md:mt-3 mt-2'>Rate A Game You Have Played</p>
                    </div>
                </div>
                <div className='w-full rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl bg-green-500 lg:p-5 md:p-4 p-3 flex items-center gap-5'>
                    <img src="/assets/experiences_of_others.jpg" alt="slider img" className='w-5/12 object-center aspect-[3/2] object-cover rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl rounded-3xl' />
                    <div className='w-7/12'>
                        <h2 className='lg:text-5xl md:text-3xl text-xl'>Others Experience</h2>
                        <p className='lg:text-2xl md:text-lg text-sm lg:mt-4 md:mt-3 mt-2'>Explore From Others Experience</p>
                    </div>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Slider;