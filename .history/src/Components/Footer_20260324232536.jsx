import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    return (
        <div className={`container-fluid py-5 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
            <div className="container">
                {/* الجزء العلوي - Footer Top */}
                <div className="row gy-5 align-items-start">

                    {/* الجهة اليسرى: اللوجو والروابط */}
                    <div className="col-md-6 text-start">
                        <img
                            src={theme === 'dark' ? assets.logo_dark : assets.logo}
                            className="mb-3"
                            alt="Logo"
                            style={{ height: '35px' }}
                        />
                        <p className="opacity-75 mb-4" style={{ maxWidth: '400px' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        <ul className="list-unstyled d-flex gap-4 mb-0">
                            <li><a className="text-decoration-none text-reset opacity-75" href="#hero">Home</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75" href="#services">Services</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75" href="#our-work">Our Work</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75" href="#contact-us">Testimonial</a></li>
                        </ul>
                    </div>

                    {/* الجهة اليمنى: الاشتراك في النشرة البريدية */}
                    <div className="col-md-6 text-md-end text-start">
                        <h5 className="fw-bold mb-2">Subscribe to our newsletter</h5>
                        <p className="opacity-75 mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>

                        <div className="d-flex justify-content-md-end">
                            <div className="input-group" style={{ maxWidth: '400px' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`form-control border-secondary-subtle py-2 shadow-none ${theme === 'dark' ? 'bg-transparent text-white' : ''}`}
                                />
                                <button
                                    className="btn px-4 fw-medium text-white"
                                    style={{ backgroundColor: '#6366f1' }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-5 opacity-25" />

                {/* الجزء السفلي - Footer Bottom */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <p className="small opacity-50 mb-0">
                        Copyright 2026 © agency.ai - All Right Reserved.
                    </p>

                    <div className="d-flex gap-3 social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" className="opacity-75" style={{ width: '20px', cursor: 'pointer' }} />
                        <img src={assets.twitter_icon} alt="Twitter" className="opacity-75" style={{ width: '20px', cursor: 'pointer' }} />
                        <img src={assets.instagram_icon} alt="Instagram" className="opacity-75" style={{ width: '20px', cursor: 'pointer' }} />
                        <img src={assets.linkedin_icon} alt="LinkedIn" className="opacity-75" style={{ width: '20px', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer