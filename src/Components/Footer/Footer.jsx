import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-neutral mt-10'>
            <div className="footer text-neutral-content items-center py-4 w-11/12 mx-auto">
                <aside className="grid-flow-col items-center">
                    <Link to='/' className="font-bold text-xl italic w-[140px]">Chill Gamer</Link>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <div className="flex gap-5 text-3xl md:place-self-center md:justify-self-end">
                    <a href="https://www.facebook.com/md.motiur.rahman.383" target="_blank"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/md-motiur-rahman-105598318/" target="_blank"><FaLinkedin /></a>
                    <a href="https://www.youtube.com/@ruitom.coder383" target="_blank"><FaYoutube /></a>
                    <a href="https://github.com/Motiur-Rahman-Dhrubo" target="_blank"><FaGithub /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;