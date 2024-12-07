import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import ReactStars from "react-rating-stars-component";

const GameWatchList = () => {

    const loadWatchList = useLoaderData();
    const { user } = useContext(AuthContext);

    const [watchListData, setWatchListData] = useState(loadWatchList.filter(WatchList => WatchList.loggedUserEmail === user.email));

    const handleDeleteWL = (_id) => {
        fetch(`http://localhost:5000/watch_list/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                setWatchListData(prevWLData => prevWLData.filter(WLData => WLData._id !== _id));
            }
        })
    }

    return (
        <>
            {watchListData.length > 0 ? (
                <div className="w-11/12 mx-auto mt-5 min-h-screen flex">
                    <div className="overflow-x-auto card rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full shrink-0 shadow-lg bg-[url('/assets/gaming.jpg')] bg-cover bg-center shadow-red-400 p-5">
                        <table className="table text-white min-w-[500px]">
                            {/* head */}
                            <thead className="text-white text-base">
                                <tr>
                                    <th></th>
                                    <th>Game Title</th>
                                    <th>Ratings</th>
                                    <th>Genres</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {
                                watchListData.map((watchList, index) => (
                                    <tbody key={watchList._id}>
                                        {/* row 1 */}
                                        <tr className="hover hover:text-black dark:hover:text-white">
                                            <th>{index + 1}</th>
                                            <td>{watchList.game_title}</td>
                                            <td><ReactStars count={5} value={watchList.rating} size={20} edit={false} activeColor="#ffd700" /></td>
                                            <td>{watchList.genres}</td>
                                            <td><button onClick={() => handleDeleteWL(watchList._id)} className="text-xl text-red-500"><MdDeleteForever /></button></td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen flex justify-center items-center w-11/12 mx-auto">
                    <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center text-red-500">No WatchList Item have been added by you!</h1>
                </div>
            )
            }
        </>
    );
};

export default GameWatchList;