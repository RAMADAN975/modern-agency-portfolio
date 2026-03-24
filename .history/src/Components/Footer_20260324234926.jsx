import React from 'react'
import assets from '../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد ملف التنسيقات الخاص بالحركة
import { useEffect } from 'react';

const Footer = ({ theme }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // سرعة الحركة (1000ms تعني ثانية واحدة)
            once: true,     // الحركة تحدث مرة واحدة فقط عند التمرير لأسفل
            offset: 100     // تبدأ الحركة قبل وصول العنصر بـ 100 بكسل
        });
    }, []);
    return (
        <div
            className="container-fluid mt-5"
            style={{
                backgroundColor: theme === 'dark' ? '#0f172a' : '#f9fafb',
                borderTop: theme === 'dark'
                    ? '1px solid rgba(255,255,255,0.1)'
                    : '1px solid #e5e7eb'
            }}
        >
            <div className="container py-4" style={{ maxWidth: '1100px' }}>

                {/* الجزء العلوي */}
                <div className="row gy-4 align-items-center">

                    {/* اليسار */}
                    <div className="col-md-6">
                        <img
                            src={theme === 'dark' ? assets.logo_dark : assets.logo}
                            className="mb-2"
                            alt="Logo"
                            style={{ height: '32px' }}
                        />

                        <p className="text-muted small mb-3" style={{ maxWidth: '380px' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        <ul className="list-unstyled d-flex gap-3 mb-0">
                            <li><a className="text-decoration-none text-muted small" href="#">Home</a></li>
                            <li><a className="text-decoration-none text-muted small" href="#">Services</a></li>
                            <li><a className="text-decoration-none text-muted small" href="#">Our Work</a></li>
                            <li><a className="text-decoration-none text-muted small" href="#">Testimonial</a></li>
                        </ul>
                    </div>

                    {/* اليمين */}
                    <div className="col-md-6 text-md-end">
                        <h6 className="fw-semibold mb-1">
                            Subscribe to our newsletter
                        </h6>

                        <p className="text-muted small mb-2">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>

                        <div className="input-group" style={{ maxWidth: '350px', marginLeft: 'auto' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control py-1"
                                style={{ borderRadius: '6px 0 0 6px' }}
                            />
                            <button
                                className="btn text-white small"
                                style={{
                                    backgroundColor: '#6366f1',
                                    borderRadius: '0 6px 6px 0'
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* خط بدل hr (أجمل) */}
                <div
                    style={{
                        height: '1px',
                        background: theme === 'dark'
                            ? 'rgba(255,255,255,0.1)'
                            : '#e5e7eb',
                        margin: '20px 0'
                    }}
                />

                {/* الجزء السفلي */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

                    <p className="mb-0 text-muted" style={{ fontSize: '13px' }}>
                        Copyright 2026 © GreetStack - All Rights Reserved.
                    </p>

                    <div className="d-flex gap-3">
                        <img src={assets.facebook_icon} alt="" style={{ width: '16px', opacity: 0.6 }} />
                        <img src={assets.twitter_icon} alt="" style={{ width: '16px', opacity: 0.6 }} />
                        <img src={assets.instagram_icon} alt="" style={{ width: '16px', opacity: 0.6 }} />
                        <img src={assets.linkedin_icon} alt="" style={{ width: '16px', opacity: 0.6 }} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer