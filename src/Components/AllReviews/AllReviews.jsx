import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { IoMdArrowDropdown } from "react-icons/io";

const AllReviews = () => {

    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [sortOption, setSortOption] = useState("");
    const loadReviews = useLoaderData();

    useEffect(() => {
        if (loadReviews) {
            setLoading(false);
        }
    }, [loadReviews]);

    if (loading) {
        return <Loading />;
    }

    const filteredReviews = selectedGenre
        ? loadReviews.filter(review => review.genres === selectedGenre)
        : loadReviews;

    const sortedReviews = [...filteredReviews].sort((a, b) => {
        if (sortOption === "rating") {
            return b.rating - a.rating;
        }
        if (sortOption === "year") {
            return b.publish_year - a.publish_year;
        }
        return 0;
    });

    return (
        <div className="w-11/12 mt-5 mx-auto min-h-screen">
            <div>
                <details className="dropdown">
                    <summary className="btn mr-2 bg-[#D142ED]">sort <IoMdArrowDropdown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                            <button onClick={() => setSortOption("rating")}>Sort by Rating</button>
                        </li>
                        <li>
                            <button onClick={() => setSortOption("year")}>Sort by Year</button>
                        </li>
                    </ul>
                </details>
                <details className="dropdown">
                    <summary className="btn bg-[#7B7CFB]">Filter <IoMdArrowDropdown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><button onClick={() => setSelectedGenre("")}>All Genres</button></li>
                        {Array.from(new Set(loadReviews.map(review => review.genres))).map((genre, index) => (
                            <li key={index}>
                                <button onClick={() => setSelectedGenre(genre)}>{genre}</button>
                            </li>
                        ))}
                    </ul>
                </details>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {
                    sortedReviews.map(review => (
                        <div key={review._id} className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl shadow-lg bg-[url('/assets/gaming1.jpg')] bg-cover bg-center shadow-red-400 p-4 flex flex-col">
                            <img src={review.game_image} alt="game cover image" className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover" />
                            <div className="mt-4 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow gap-2 rounded-lg p-1">
                                <h2 className="text-xl font-bold">Game Title: {review.game_title}</h2>
                                <ReactStars count={5} value={review.rating} size={20} edit={false} activeColor="#ffd700" />
                                <p className="text-base font-medium flex-grow">Genres: {review.genres}</p>
                                <p className="text-base font-medium flex-grow">Publish Year: {review.publish_year}</p>
                                <Link to={`/review/${review._id}`} className="btn mt-2 btn-sm btn-neutral">Explore Details</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllReviews;