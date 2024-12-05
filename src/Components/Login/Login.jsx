import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center mt-5 w-11/12 mx-auto">
            <div className="card rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full max-w-sm shrink-0 shadow-lg bg-[url('/assets/gaming.jpg')] bg-cover bg-center shadow-red-400">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 gap-4">
                        <input className="btn btn-primary" type="submit" value="Login" />
                        <button className="btn btn-neutral">Sign in with Google</button>
                    </div>
                    <p className="mt-2 text-white">Don't have an account? <Link to="/register" className="link-hover font-bold text-blue-600 bg-white px-1 rounded-lg">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;