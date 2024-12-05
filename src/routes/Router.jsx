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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/reviews",
                element: <AllReviews></AllReviews>,
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
                path: "/myReviews",
                element: (
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
                ),
            },
            {
                path: "/myWatchList",
                element: (
                    <PrivateRoute>
                        <GameWatchList></GameWatchList>
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default Router;