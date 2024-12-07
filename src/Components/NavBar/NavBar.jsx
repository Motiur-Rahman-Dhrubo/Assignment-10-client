import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Tooltip } from 'react-tooltip'

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li><NavLink className='py-1 px-3' to="/">Home</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/reviews">All Reviews</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/addReview">Add Review</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/myReviews">My Reviews</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/myWatchList">Game WatchList</NavLink></li>
    </>
    const joining = <>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
    </>

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto px-0">
            <div className="navbar-start flex-grow">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="font-bold text-xl italic w-[140px]">Chill Gamer</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            {
                user ? (
                    <div className="navbar-end md:w-1/2 w-min">
                        <div className='hidden gap-2 lg:flex items-center'>
                            {
                                user?.photoURL ? <img data-tooltip-id="user-name" data-tooltip-content={user.displayName} data-tooltip-place="bottom" src={user.photoURL} alt="user photo" className='w-12 aspect-[1/1] rounded-full border border-black object-cover' /> : <img data-tooltip-id="user-name" data-tooltip-content={user.displayName} data-tooltip-place="bottom" src="/assets/user.png" alt="user photo" className='w-12 rounded-full' />
                            }
                            <Tooltip id="user-name" />
                            <button className='btn' onClick={logOut}>Log Out</button>
                        </div>
                        <div className='block lg:hidden'>
                            <details className="dropdown">
                                <summary className="btn m-1">User</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[10] p-2 shadow gap-2 right-0 items-center">
                                    {
                                        user?.photoURL ? <img src={user.photoURL} alt="user photo" className='w-12 aspect-[1/1] rounded-full border border-black object-cover' /> : <img src="/assets/user.png" alt="user photo" className='w-12 rounded-full' />
                                    }
                                    <h2 className='text-center'>{user.displayName}</h2>
                                    <button className='btn w-full min-w-[150px]' onClick={logOut}>Log Out</button>
                                </ul>
                            </details>
                        </div>
                    </div>
                ) :
                    (
                        <div className="navbar-end md:w-1/2 w-min">
                            <div className='gap-2 hidden lg:flex'>
                                {joining}
                            </div>
                            <div className='block lg:hidden'>
                                <details className="dropdown">
                                    <summary className="btn m-1">Join</summary>
                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[10] md:w-52 w-40 p-2 shadow gap-2 right-0">
                                        {joining}
                                    </ul>
                                </details>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default NavBar;