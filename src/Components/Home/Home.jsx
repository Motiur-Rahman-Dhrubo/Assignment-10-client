import HomeTop from "../HomeTop/HomeTop";
import Slider from "../Slider/Slider";


const Home = () => {

    return (
        <div className="w-11/12 mx-auto mt-5 min-h-screen">
            <HomeTop></HomeTop>
            <Slider></Slider>
        </div>
    );
};

export default Home;