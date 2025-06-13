import { MoonIcon, SunDimIcon } from "lucide-react"
import "./theme.css"
import { Navbar } from "../navbar/navbar"

export let Header = ({color, dark, setdark, setcolor, textcolor, settextcolor}) => {
    const handleThemeChange = () => {
        const newIsDarkMode = !dark;
        setdark(newIsDarkMode);
        if (newIsDarkMode) {
            setcolor("#242424");
            settextcolor("beige");
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setcolor("beige");
            settextcolor("#333");
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    return (
        <header className={`header ${dark ? 'dark' : 'light'}`} style={{backgroundColor: color}}>
            <div className="header-container">
                <Navbar textcolor={textcolor} />
                <button 
                    className="theme-toggle" 
                    onClick={handleThemeChange}
                    title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {dark ? 
                        <SunDimIcon size={24} color={textcolor} /> : 
                        <MoonIcon size={24} color={textcolor} />
                    }
                </button>
            </div>
        </header>
    )
}