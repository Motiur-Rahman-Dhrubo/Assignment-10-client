import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyReviews = () => {

    const loadReviews = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user.email);

    const userReviews = loadReviews.filter(review => review.user_email === user.email);

    return (
        <>
             {userReviews.length > 0 ? (
                <div className="w-11/12 mt-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        userReviews.map(review => (
                            <div key={review._id} className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl shadow-lg bg-[url('/assets/gaming.jpg')] bg-cover bg-center shadow-red-400 p-4 flex flex-col">
                                <img src={review.game_image} alt="game cover image" className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover" />
                                <div className="mt-4 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow gap-2 rounded-lg p-1">
                                    <h2 className="text-xl font-bold">Game Title: {review.game_title}</h2>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-base font-medium">Ratings:</p>
                                        <ReactStars count={5} value={review.rating} size={20} edit={false} activeColor="#ffd700" />
                                    </div>
                                    <p className="text-base font-medium flex-grow">Genres: {review.genres}</p>
                                    <p className="text-base font-medium flex-grow">{review.user_email}</p>
                                    <div className="flex gap-2">
                                        <button className="btn btn-sm btn-accent flex-1">Update</button>
                                        <button className="btn btn-sm btn-secondary flex-1">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
             ) : (
                <div className="min-h-screen flex justify-center items-center w-11/12 mx-auto">
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center text-red-500">No reviews have been added by you!</h1>
                </div>
             )}
        </>
        
    );
};

export default MyReviews;