import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    const isDark = theme === 'dark';

    return (
        <div className={`container-fluid py-5 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`} style={{ borderTop: '1px solid #eee' }}>
            <div className="container px-md-5">
                <div className="row gy-4 align-items-start">

                    {/* القسم الأيسر: اللوجو والوصف والروابط */}
                    <div className="col-lg-7 text-start">
                        <img
                            src={isDark ? assets.logo_dark : assets.logo}
                            alt="logo"
                            className="mb-3"
                            style={{ height: '30px' }}
                        />
                        <p className="opacity-75 mb-4" style={{ maxWidth: '450px', fontSize: '14px', lineHeight: '1.6' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        {/* الروابط: تباعد متوازن كما في الصورة */}
                        <ul className="list-unstyled d-flex gap-4 mb-0">
                            <li><a href="#home" className="text-decoration-none text-reset opacity-75 small fw-medium">Home</a></li>
                            <li><a href="#services" className="text-decoration-none text-reset opacity-75 small fw-medium">Services</a></li>
                            <li><a href="#work" className="text-decoration-none text-reset opacity-75 small fw-medium">Our work</a></li>
                            <li><a href="#testimonial" className="text-decoration-none text-reset opacity-75 small fw-medium">Testimonial</a></li>
                        </ul>
                    </div>

                    {/* القسم الأيمن: حقل الاشتراك (مطابق للصورة تماماً) */}
                    <div className="col-lg-5 text-md-end text-start">
                        <h6 className="fw-bold mb-2">Subscribe to our newsletter</h6>
                        <p className="opacity-75 small mb-3">The latest news, articles, and resources, sent to your inbox weekly.</p>

                        <div className="d-flex justify-content-md-end">
                            <div className="input-group" style={{ maxWidth: '380px' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`form-control shadow-none border-secondary-subtle py-2 ${isDark ? 'bg-transparent text-white' : ''}`}
                                    style={{ borderRadius: '6px 0 0 6px' }}
                                />
                                <button
                                    className="btn px-4 text-white fw-medium"
                                    style={{ backgroundColor: '#6366f1', borderRadius: '0 6px 6px 0' }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* الخط الفاصل السفلي */}
                <hr className="my-5 opacity-25" />

                {/* الجزء السفلي: الحقوق وأيقونات التواصل */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <p className="small opacity-50 mb-0">
                        Copyright 2026 © agency.ai - All Right Reserved.
                    </p>

                    <div className="d-flex gap-3 align-items-center">
                        <img src={assets.facebook_icon} alt="FB" style={{ width: '18px', opacity: '0.6' }} />
                        <img src={assets.twitter_icon} alt="TW" style={{ width: '18px', opacity: '0.6' }} />
                        <img src={assets.instagram_icon} alt="IG" style={{ width: '18px', opacity: '0.6' }} />
                        <img src={assets.linkedin_icon} alt="IN" style={{ width: '18px', opacity: '0.6' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;