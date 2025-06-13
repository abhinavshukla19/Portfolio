import "./navbar.css"
import { useState, useEffect } from "react"
import { FaUserAstronaut, FaBars, FaTimes } from 'react-icons/fa';

export let Navbar = ({textcolor}) => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const isDarkMode = textcolor === "beige";

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'skills', 'about'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            }) || 'home';
            
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on link click (mobile)
    const handleNavClick = () => setMenuOpen(false);

    return (
        <nav className={`nav-menu ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="nav-brand">
                <FaUserAstronaut className="nav-brand-icon" />
                <span className="nav-brand-text">Abhinav Shukla</span>
            </div>
            <button className="nav-hamburger" aria-label="Toggle navigation" onClick={() => setMenuOpen(m => !m)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={handleNavClick}>
                    <span className="nav-link-text">Home</span>
                </a>
                <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleNavClick}>
                    <span className="nav-link-text">Project 🛠️</span>
                </a>
                <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={handleNavClick}>
                    <span className="nav-link-text">Skills</span>
                </a>
                <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={handleNavClick}>
                    <span className="nav-link-text">About</span>
                </a>
            </div>
        </nav>
    )
}