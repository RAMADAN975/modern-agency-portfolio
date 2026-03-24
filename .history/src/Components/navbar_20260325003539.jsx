import React from 'react';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top blur-nav">
            <div className="container nav-container">
                <a className="navbar-brand" href="#hero">
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="logo" className="logo-img" />
                </a>

                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-lg-4">
                        {/* ✅ التأكد من أن href يطابق الـ id في الأقسام */}
                        <li className="nav-item"><a className="nav-link nav-link-custom" href="#hero">Home</a></li>
                        <li className="nav-item"><a className="nav-link nav-link-custom" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link nav-link-custom" href="#work">Our Work</a></li>
                        <li className="nav-item"><a className="nav-link nav-link-custom" href="#contact-us">Contact</a></li>
                    </ul>
                    <div className="ms-lg-4 mt-3 mt-lg-0">
                        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;