import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    return (
        <div className={`container-fluid py-4 mt-4 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                {/* الجزء العلوي */}
                <div className="row gy-4 align-items-center">

                    {/* اليسار */}
                    <div className="col-md-6 text-start">
                        <img
                            src={theme === 'dark' ? assets.logo_dark : assets.logo}
                            className="mb-2"
                            alt="GreetStack Logo"
                            style={{ height: '32px' }}
                        />

                        <p className="opacity-75 mb-3 small" style={{ maxWidth: '380px' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        <ul className="list-unstyled d-flex gap-3 mb-0">
                            <li><a className="text-decoration-none text-reset opacity-75 small" href="#hero">Home</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75 small" href="#services">Services</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75 small" href="#our-work">Our Work</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75 small" href="#testimonials">Testimonial</a></li>
                        </ul>
                    </div>

                    {/* اليمين */}
                    <div className="col-md-6 text-md-end text-start">
                        <div className="d-flex flex-column align-items-md-end align-items-start gap-1">

                            <h6 className="fw-semibold mb-1">
                                Subscribe to our newsletter
                            </h6>

                            <p className="opacity-75 mb-2 small">
                                The latest news, articles, and resources, sent to your inbox weekly.
                            </p>

                            <div className="input-group" style={{ maxWidth: '350px' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`form-control border-secondary-subtle py-1 shadow-none ${theme === 'dark' ? 'bg-transparent text-white' : ''}`}
                                    style={{ borderRadius: '6px 0 0 6px' }}
                                />

                                <button
                                    className="btn px-3 text-white small"
                                    style={{ backgroundColor: '#6366f1', borderRadius: '0 6px 6px 0' }}
                                >
                                    Subscribe
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* خط فاصل */}
                <hr className="my-4 opacity-25" />

                {/* الجزء السفلي */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

                    <p className="mb-0 opacity-50" style={{ fontSize: '13px' }}>
                        Copyright 2026 © GreetStack - All Rights Reserved.
                    </p>

                    <div className="d-flex gap-3">
                        <img src={assets.facebook_icon} alt="Facebook" style={{ width: '16px', cursor: 'pointer', opacity: 0.7 }} />
                        <img src={assets.twitter_icon} alt="Twitter" style={{ width: '16px', cursor: 'pointer', opacity: 0.7 }} />
                        <img src={assets.instagram_icon} alt="Instagram" style={{ width: '16px', cursor: 'pointer', opacity: 0.7 }} />
                        <img src={assets.linkedin_icon} alt="LinkedIn" style={{ width: '16px', cursor: 'pointer', opacity: 0.7 }} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer