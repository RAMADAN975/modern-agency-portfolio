import { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({ theme, setTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <nav className="d-flex justify-content-between align-items-center w-100 sticky-top z-3 blur-nav nav-container">

            <img
                src={theme === 'dark' ? assets.logo_dark : assets.logo}
                className="logo-img"
                alt="Logo"
            />

            <div className={`d-flex flex-column flex-sm-row gap-3 gap-sm-4 align-items-sm-center mobile-sidebar ${!sidebarOpen ? 'sidebar-closed' : 'sidebar-open'}`}>

                <img
                    src={assets.close_icon}
                    alt="close"
                    className="d-sm-none position-absolute"
                    style={{ width: '20px', right: '20px', top: '20px', cursor: 'pointer' }}
                    onClick={() => setSidebarOpen(false)}
                />

                {/* ✅ تم التصحيح هنا */}
                <a onClick={() => setSidebarOpen(false)} href="#hero" className="text-decoration-none text-reset nav-link-custom">Home</a>
                <a onClick={() => setSidebarOpen(false)} href="#services" className="text-decoration-none text-reset nav-link-custom">Services</a>
                <a onClick={() => setSidebarOpen(false)} href="#our-work" className="text-decoration-none text-reset nav-link-custom">Our Work</a>
                <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="text-decoration-none text-reset nav-link-custom">Contact Us</a>
            </div>

            <div className="d-flex align-items-center gap-2 gap-sm-4">
                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                <img
                    src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
                    alt="menu"
                    onClick={() => setSidebarOpen(true)}
                    className="d-sm-none"
                    style={{ width: '30px', cursor: 'pointer' }}
                />

                <a href="#contact-us" className="btn btn-primary rounded-pill d-none d-sm-flex align-items-center gap-2 px-4 py-2 shadow-sm fw-bold">
                    Connect <img src={assets.arrow_icon} width={12} alt="arrow" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar