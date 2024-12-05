import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const nameCriteria = /^[A-Za-z\s]+$/;
        if (!nameCriteria.test(name)) {
            setError((prev) => ({ ...prev, name: "Name must not contain numbers or special characters." }));
            return;
        } else {
            setError((prev) => ({ ...prev, name: null }));
        }
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordCriteria.test(password)) {
            setError((prev) => ({ ...prev, password: "Password must contain at least 6 characters, including uppercase and lowercase letters.", }));
            return;
        } else {
            setError((prev) => ({ ...prev, password: null }));
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center mt-5 w-11/12 mx-auto">
            <div className="card rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full max-w-sm shrink-0 shadow-lg bg-[url('/assets/gaming.jpg')] bg-cover bg-center shadow-red-400">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 gap-4">
                        <input className="btn btn-primary" type="submit" value="Register Now" />
                    </div>
                    <p className="mt-2 text-white">Already have an account? <Link to="/login" className="link-hover font-bold text-blue-600 bg-white px-1 rounded-lg">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;