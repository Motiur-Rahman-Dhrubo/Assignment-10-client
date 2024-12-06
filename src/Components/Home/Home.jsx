import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";


const Home = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1 className="bg-red-600 text-5xl text-center py-52">this is home</h1>
            <input type="checkbox" className="toggle theme-controller" onChange={toggleTheme} checked={theme === 'dark'}/>
        </div>
    );
};

export default Home;