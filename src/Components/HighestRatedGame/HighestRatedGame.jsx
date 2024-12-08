import { useContext } from "react";
import { HomeContext } from "../Home/Home";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const HighestRatedGame = () => {

    const topReviewsData = useContext(HomeContext);

    return (
        <div className="mt-5">
            <h2 className="lg:text-5xl md:text-3xl text-xl font-medium text-center">Highest Rated Games:</h2>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5">
                {
                    topReviewsData.map(review => (
                        <div key={review._id} className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl shadow-lg bg-[url('/assets/gaming.jpg')] bg-cover bg-center shadow-red-400 p-2 flex flex-col mt-5">
                            <img src={review.game_image} alt="game cover image" className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover" />
                            <div className="mt-2 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow rounded-lg p-1">
                                <h2 className="text-sm font-bold flex-grow">Game Title: {review.game_title}</h2>
                                <div>
                                    <p className="text-sm mt-1 font-medium -mb-1">Ratings:</p>
                                    <ReactStars count={5} value={review.rating} size={15} edit={false} activeColor="#ffd700"/>
                                </div>
                                <Link to={`/review/${review._id}`} className="btn mt-1 btn-sm btn-neutral">Explore Details</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HighestRatedGame;