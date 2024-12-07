import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewDetails = () => {

    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    const reviewData = useLoaderData();
    const { game_image, game_title, review, rating, publish_year, genres, user_email, user_name } = reviewData;

    const addToWatchList = () => {

        if (!user) {
            toast.error("You must be logged in to add to the WatchList", {
                position: "top-center",
                autoClose: 2000,
            });
            return;
        }
        
        const loggedUserName = user.displayName;
        const loggedUserEmail = user.email;
        const newWatchListData = { game_image, game_title, review, rating, publish_year, genres, user_email, user_name, loggedUserEmail, loggedUserName };

        fetch('http://localhost:5000/watch_list', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWatchListData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success(`${game_title} Successfully Added to WatchList`, {
                        position: "top-center",
                        autoClose: 2000,
                    });
                };
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        if (reviewData) {
            setLoading(false);
        }
    }, [reviewData]);

    if (loading) {
        return <Loading></Loading>
    };

    return (
        <div className="flex justify-center items-center mt-5 w-11/12 mx-auto">
            <ToastContainer />
            <div className="card rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full max-w-2xl shrink-0 shadow-lg bg-[url('/assets/gaming.jpg')] bg-cover bg-center shadow-red-400 p-5">
                <img src={game_image} alt="game cover image" className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover" />
                <div className="mt-4 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow rounded-lg p-1">
                    <h2 className="md:text-2xl text-xl font-bold">Game Title: {game_title}</h2>
                    <p className="md:text-lg text-base font-medium mt-2">Review Description:</p>
                    <p className="md:text-base text-sm">{review}</p>
                    <div className="flex gap-2 items-center mt-2">
                        <p className="md:text-lg text-base font-medium">Ratings:</p>
                        <ReactStars count={5} value={rating} size={20} edit={false} activeColor="#ffd700" />
                    </div>
                    <div className="mt-2 flex gap-2">
                        <p className="md:text-lg text-base font-medium w-1/2">Publishing Year: <span className="font-normal">{publish_year}</span></p>
                        <p className="md:text-lg text-base font-medium w-1/2">Genres: <span className="font-normal">{genres}</span></p>
                    </div>
                    <p className="md:text-lg text-base font-medium mt-2">Reviewer's Name: <span className="font-normal">{user_name}</span></p>
                    <p className="md:text-lg text-base font-medium mt-2">Reviewer's Email: <span className="font-normal">{user_email}</span></p>
                    <button onClick={addToWatchList} className="btn md:btn-md btn-sm btn-neutral mt-2">Add to WatchList</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;