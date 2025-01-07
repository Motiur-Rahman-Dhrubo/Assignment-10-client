import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import AllReviews from "../Components/AllReviews/AllReviews";
import AddReview from "../Components/AddReview/AddReview";
import MyReviews from "../Components/MyReviews/MyReviews";
import GameWatchList from "../Components/GameWatchList/GameWatchList";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ReviewDetails from "../Components/ReviewDetails/ReviewDetails";
import UpdateReview from "../Components/UpdateReview/UpdateReview";
import AboutUs from "../Components/AboutUs/AboutUs";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://chill-game-server-tau.vercel.app/top-rated'),
            },
            {
                path: "/reviews",
                element: <AllReviews></AllReviews>,
                loader: () => fetch('https://chill-game-server-tau.vercel.app/reviews'),
            },
            {
                path: "/review/:id",
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch('https://chill-game-server-tau.vercel.app/reviews')
                    .then(res => res.json())
                    .then(reviews => reviews.find(review => review._id === params.id))
            },
            {
                path: "/addReview",
                element: (
                    <PrivateRoute>
                        <AddReview></AddReview>
                    </PrivateRoute>
                ),
            },
            {
                path: "/updateReview/:id",
                element: (
                    <PrivateRoute>
                        <UpdateReview></UpdateReview>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://chill-game-server-tau.vercel.app/reviews/${params.id}`)
            },
            {
                path: "/myReviews",
                element: (
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://chill-game-server-tau.vercel.app/reviews'),
            },
            {
                path: "/myWatchList",
                element: (
                    <PrivateRoute>
                        <GameWatchList></GameWatchList>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://chill-game-server-tau.vercel.app/watch_list'),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>,
            },
        ],
    },
]);

export default Router;