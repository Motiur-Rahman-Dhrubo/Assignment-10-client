import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateReview = () => {

    const reviewForUpdate = useLoaderData();
    const { game_image, game_title, review, rating, publish_year, genres, user_email, user_name, _id } = reviewForUpdate;

    const navigate = useNavigate();

    const handelUpdateReview = (e) => {
        e.preventDefault();
        const game_image = e.target.image.value;
        const game_title = e.target.title.value;
        const review = e.target.review.value;
        const rating = e.target.rating.value;
        const publish_year = e.target.year.value;
        const genres = e.target.genres.value;
        const user_email = e.target.email.value;
        const user_name = e.target.name.value;
        const updateReview = { game_image, game_title, review, rating, publish_year, genres, user_email, user_name }

        fetch(`https://chill-game-server-tau.vercel.app/reviews/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Review Successfully Updated", {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    setTimeout(() => navigate("/myReviews"), 2000);
                };
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="min-h-screen flex justify-center items-center mt-5 w-11/12 mx-auto">
            <ToastContainer />
            <div className="card rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full max-w-xl shrink-0 shadow-lg bg-[url('/assets/gaming.jpg')] bg-cover bg-center shadow-red-400">
                <form className="card-body" onSubmit={handelUpdateReview}>

                    {/* Game Cover Image */}
                    <div className="form-control" >
                        <label className="label">
                            <span className="label-text text-white">Game Cover Image URL</span>
                        </label>
                        <input name="image" type="text" placeholder="Game Cover Image" className="input input-bordered" defaultValue={game_image} required />
                    </div>

                    {/* Game Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Game Title</span>
                        </label>
                        <input name="title" type="text" placeholder="Game Title/Name" className="input input-bordered" defaultValue={game_title} required />
                    </div>

                    {/* Review Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Review Description</span>
                        </label>
                        <textarea name="review" className="textarea textarea-bordered" placeholder="Review Description" defaultValue={review} required></textarea>
                    </div>

                    {/* Rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Game Rating</span>
                        </label>
                        <input name="rating" type="number" placeholder="Game Rating" className="input input-bordered" min="1" max="5" defaultValue={rating} required />
                    </div>

                    {/* Publishing year */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Publishing Year</span>
                        </label>
                        <select className="select select-bordered w-full" name="year" defaultValue={publish_year} required>
                            <option disabled value="">year</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>

                    {/* Genres */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Genres</span>
                        </label>
                        <select className="select select-bordered w-full" name="genres" defaultValue={genres} required>
                            <option disabled value="">Genres</option>
                            <option value="Action">Action</option>
                            <option value="RPG">RPG</option>
                            <option value="Adventure">Adventure</option>
                        </select>
                    </div>

                    {/* User Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">User Email</span>
                        </label>
                        <input name="email" type="text" className="input input-bordered" defaultValue={user_email} readOnly />
                    </div>

                    {/* User Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">User Name</span>
                        </label>
                        <input name="name" type="text" className="input input-bordered" defaultValue={user_name} readOnly />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;