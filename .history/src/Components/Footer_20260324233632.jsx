import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    const isDark = theme === 'dark';

    return (
        // الخلفية والتباعد العمودي للفوتر بالكامل
        <div className={`container-fluid py-5 mt-5 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
            <div className="container px-md-5">
                <div className="row gy-4 align-items-center"> {/* align-items-center لتقريب العناصر عمودياً */}

                    {/* القسم الأيسر: اللوجو والوصف والروابط */}
                    <div className="col-lg-7 text-start">
                        <img
                            src={isDark ? assets.logo_dark : assets.logo}
                            alt="logo"
                            className="mb-3"
                            style={{ height: '32px' }}
                        />
                        <p className="opacity-75 mb-4" style={{ maxWidth: '450px', fontSize: '15px', lineHeight: '1.6' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        {/* الروابط: تباعد متوسط وواضح */}
                        <ul className="list-unstyled d-flex gap-4 mb-0 flex-wrap">
                            <li><a href="#home" className="text-decoration-none text-reset opacity-75 small fw-medium">Home</a></li>
                            <li><a href="#services" className="text-decoration-none text-reset opacity-75 small fw-medium">Services</a></li>
                            <li><a href="#work" className="text-decoration-none text-reset opacity-75 small fw-medium">Our work</a></li>
                            <li><a href="#testimonial" className="text-decoration-none text-reset opacity-75 small fw-medium">Testimonial</a></li>
                        </ul>
                    </div>

                    {/* القسم الأيمن: حقل الاشتراك بالحدود واللون البنفسجي */}
                    <div className="col-lg-5 text-md-end text-start">
                        <h6 className="fw-bold mb-2">Subscribe to our newsletter</h6>
                        <p className="opacity-75 small mb-3">The latest news, articles, and resources, sent to your inbox weekly.</p>

                        <div className="d-flex justify-content-md-end justify-content-start">
                            {/* حدود واضحة حول حقل الاشتراك مع لون بنفسجي */}
                            <div className="input-group" style={{ maxWidth: '400px', borderRadius: '10px', overflow: 'hidden' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`form-control shadow-none py-2 px-3 ${isDark ? 'bg-transparent text-white' : 'bg-white'}`}
                                    style={{
                                        borderRadius: '10px 0 0 10px',
                                        borderColor: '#6366f1', // لون الحدود بنفس لون الزر اللبني
                                        fontSize: '14px'
                                    }}
                                />
                                <button
                                    className="btn px-4 fw-medium text-white border-0"
                                    style={{
                                        backgroundColor: '#6366f1', // لون الزر البنفسجي
                                        borderRadius: '0 10px 10px 0',
                                        fontSize: '14px'
                                    }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* خط فاصل ناعم */}
                <hr className="my-5 opacity-25" style={{ color: isDark ? '#fff' : '#000' }} />

                {/* الجزء السفلي: الحقوق وأيقونات التواصل */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <p className="small opacity-50 mb-0">
                        Copyright 2026 © agency.ai - All Right Reserved.
                    </p>

                    <div className="d-flex gap-3 align-items-center">
                        <img src={assets.facebook_icon} alt="Facebook" style={{ width: '20px', cursor: 'pointer', filter: isDark ? 'brightness(0) invert(1)' : 'grayscale(1)' }} />
                        <img src={assets.twitter_icon} alt="Twitter" style={{ width: '20px', cursor: 'pointer', filter: isDark ? 'brightness(0) invert(1)' : 'grayscale(1)' }} />
                        <img src={assets.instagram_icon} alt="Instagram" style={{ width: '20px', cursor: 'pointer', filter: isDark ? 'brightness(0) invert(1)' : 'grayscale(1)' }} />
                        <img src={assets.linkedin_icon} alt="LinkedIn" style={{ width: '20px', cursor: 'pointer', filter: isDark ? 'brightness(0) invert(1)' : 'grayscale(1)' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;