import { useLoaderData } from "react-router-dom";
import HomeTop from "../HomeTop/HomeTop";
import Slider from "../Slider/Slider";
import { createContext, useEffect, useState } from "react";
import HighestRatedGame from "../HighestRatedGame/HighestRatedGame";
import Loading from "../Loading/Loading";
import TopGames from "../TopGames/TopGames";
import GameIndustry from "../GameIndustry/GameIndustry";

export const HomeContext = createContext();

const Home = () => {

    const [loading, setLoading] = useState(true);

    const shortedReviews = useLoaderData();

    useEffect(() => {
        if (shortedReviews) {
            setLoading(false);
        }
    }, [shortedReviews]);

    if (loading) {
        return <Loading></Loading>;
    };

    return (
        <div className="w-11/12 mx-auto mt-5 min-h-screen">
            <HomeTop></HomeTop>
            <Slider></Slider>
            <HomeContext.Provider value={shortedReviews}>
                <HighestRatedGame></HighestRatedGame>
            </HomeContext.Provider>
            <TopGames></TopGames>
            <GameIndustry></GameIndustry>
        </div>
    );
};

export default Home;