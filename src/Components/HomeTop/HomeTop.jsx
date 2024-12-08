import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import { AuthContext } from "../../provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const HomeTop = () => {

    const { user } = useContext(AuthContext);

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="flex justify-between items-center">
            {
                user? (
                    <h2 className="md:text-2xl text-lg font-medium">
                        Welcome{' '}
                        <span className="text-orange-600">
                            <Typewriter
                                words={[user.displayName, 'To Chill Gamer']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                ) : (
                    <h2 className = "md:text-2xl text-lg font-medium">Welcome To Chill Gamer</h2>
                )
            }
            <input type="checkbox" className="toggle theme-controller" onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
    );
};

export default HomeTop;