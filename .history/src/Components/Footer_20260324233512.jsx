import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    return (
        <div className={`container-fluid py-5 mt-5 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
            <div className="container">
                {/* الجزء العلوي - Footer Top - استخدام Grid و Flexbox */}
                <div className="row gy-5 align-items-center">

                    {/* الجهة اليسرى: اللوجو والروابط */}
                    <div className="col-md-6 text-start">
                        {/* استخدام theme لتغيير اللوجو تلقائياً */}
                        <img
                            src={theme === 'dark' ? assets.logo_dark : assets.logo}
                            className="mb-3"
                            alt="GreetStack Logo"
                            style={{ height: '35px' }}
                        />
                        <p className="opacity-75 mb-4" style={{ maxWidth: '400px' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        {/* ترتيب الروابط بجانب بعضها */}
                        <ul className="list-unstyled d-flex gap-4 mb-0">
                            <li><a className="text-decoration-none text-reset opacity-75 small fw-medium" href="#hero">Home</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75 small fw-medium" href="#services">Services</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75 small fw-medium" href="#our-work">Our Work</a></li>
                            <li><a className="text-decoration-none text-reset opacity-75 small fw-medium" href="#testimonials">Testimonial</a></li>
                        </ul>
                    </div>

                    {/* الجهة اليمنى: الاشتراك (التركيز على حل المشكلة) */}
                    <div className="col-md-6 text-md-end text-start">
                        <div className="d-flex flex-column align-items-md-end align-items-start gap-2">
                            <h5 className="fw-bold mb-1">Subscribe to our newsletter</h5>
                            <p className="opacity-75 mb-3 small">The latest news, articles, and resources, sent to your inbox weekly.</p>

                            {/* حقل الإدخال والزر مدمجين */}
                            <div className="input-group" style={{ maxWidth: '400px' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`form-control border-secondary-subtle py-2 shadow-none ${theme === 'dark' ? 'bg-transparent text-white' : ''}`}
                                    style={{ borderRadius: '8px 0 0 8px' }}
                                />
                                <button
                                    className="btn px-4 fw-medium text-white"
                                    style={{ backgroundColor: '#6366f1', borderRadius: '0 8px 8px 0' }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* الخط الفاصل */}
                <hr className="my-5 opacity-25" />

                {/* الجزء السفلي - Footer Bottom */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <p className="small opacity-50 mb-0">
                        Copyright 2026 © GreetStack - All Rights Reserved.
                    </p>

                    {/* أيقونات السوشيال */}
                    <div className="d-flex gap-3 social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" className="opacity-75" style={{ width: '18px', cursor: 'pointer', filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'grayscale(1)' }} />
                        <img src={assets.twitter_icon} alt="Twitter" className="opacity-75" style={{ width: '18px', cursor: 'pointer', filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'grayscale(1)' }} />
                        <img src={assets.instagram_icon} alt="Instagram" className="opacity-75" style={{ width: '18px', cursor: 'pointer', filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'grayscale(1)' }} />
                        <img src={assets.linkedin_icon} alt="LinkedIn" className="opacity-75" style={{ width: '18px', cursor: 'pointer', filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'grayscale(1)' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer