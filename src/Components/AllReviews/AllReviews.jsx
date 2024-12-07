import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const AllReviews = () => {

    const loadReviews = useLoaderData();

    console.log(loadReviews);

    return (
        <div className="w-11/12 mt-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                loadReviews.map(review => (
                    <div key={review._id} className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl shadow-lg bg-[url('/assets/gaming.jpg')] bg-cover bg-center shadow-red-400 p-4 flex flex-col">
                        <img src={review.game_image} alt="game cover image" className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover" />
                        <div className="mt-4 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow gap-2 rounded-lg p-1">
                            <h2 className="text-xl font-bold">Game Title: {review.game_title}</h2>
                            <div className="flex gap-2 items-center">
                                <p className="text-base font-medium">Ratings: </p>
                                <ReactStars count={5} value={review.rating} size={20} activeColor="#ffd700" />
                            </div>
                            <p className="text-base font-medium flex-grow">Genres: {review.genres}</p>
                            <button className="btn btn-sm btn-neutral">Explore Details</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllReviews;