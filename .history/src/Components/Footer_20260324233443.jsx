import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    const isDark = theme === 'dark';

    return (
        <div className={`container-fluid py-5 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`}
            style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container">
                {/* الصف الرئيسي: توزيع متوازن وليس متباعداً جداً */}
                <div className="row justify-content-between align-items-start gy-5">

                    {/* الجانب الأيسر: اللوجو والروابط */}
                    <div className="col-lg-5 col-md-6">
                        <img
                            src={isDark ? assets.logo_dark : assets.logo}
                            alt="logo"
                            className="mb-3"
                            style={{ height: '32px' }}
                        />
                        <p className="opacity-75 mb-4" style={{ fontSize: '15px', maxWidth: '380px' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        {/* الروابط: تباعد متوسط وأنيق */}
                        <div className="d-flex gap-4">
                            {['Home', 'Services', 'Our work', 'Testimonial'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-decoration-none text-reset opacity-75 small fw-medium">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* الجانب الأيمن: حقل الاشتراك (اللون اللبني والحجم المتوسط) */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex flex-column">
                            <h6 className="fw-bold mb-2">Subscribe to our newsletter</h6>
                            <p className="opacity-75 small mb-3">The latest news, articles, and resources, sent to your inbox weekly.</p>

                            {/* حقل الاشتراك: اللون اللبني المائل للبنفسجي كما في الصورة */}
                            <div className="input-group" style={{ height: '45px' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`form-control shadow-none border-secondary-subtle px-3 ${isDark ? 'bg-transparent text-white' : ''}`}
                                    style={{ borderRadius: '6px 0 0 6px', fontSize: '14px' }}
                                />
                                <button
                                    className="btn px-4 fw-medium text-white border-0"
                                    style={{
                                        backgroundColor: '#6366f1', // هذا هو اللون اللبني/البنفسجي في الصورة الأصلية
                                        borderRadius: '0 6px 6px 0',
                                        fontSize: '14px'
                                    }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* خط فاصل رفيع جداً */}
                <hr className="my-5 opacity-25" />

                {/* الجزء السفلي: الحقوق والسوشيال ميديا */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <p className="small opacity-50 mb-0">
                        Copyright 2026 © agency.ai - All Right Reserved.
                    </p>

                    <div className="d-flex gap-3">
                        {[assets.facebook_icon, assets.twitter_icon, assets.instagram_icon, assets.linkedin_icon].map((icon, i) => (
                            <img
                                key={i}
                                src={icon}
                                alt="social"
                                className="opacity-50"
                                style={{
                                    width: '18px',
                                    cursor: 'pointer',
                                    filter: isDark ? 'brightness(0) invert(1)' : 'none'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;