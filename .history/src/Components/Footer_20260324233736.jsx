import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    const isDark = theme === 'dark';

    return (
        // الخلفية الرئيسية للفوتر مع حدود علوية وسفلية واضحة
        <div className={`container-fluid py-5 mt-5 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`}
            style={{
                borderTop: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
                borderBottom: `1px solid ${isDark ? '#333' : '#e5e7eb'}`
            }}>

            <div className="container px-md-5">
                {/* الجزء العلوي: توزيع متوازن وليس متباعداً جداً */}
                <div className="row gy-4 align-items-center justify-content-between">

                    {/* الجانب الأيسر: اللوجو والروابط */}
                    <div className="col-lg-6">
                        <img
                            src={isDark ? assets.logo_dark : assets.logo}
                            alt="logo"
                            className="mb-3"
                            style={{ height: '32px' }}
                        />
                        <p className="opacity-75 mb-4" style={{ maxWidth: '420px', fontSize: '15px' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        <div className="d-flex gap-4">
                            {['Home', 'Services', 'Our work', 'Testimonial'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-decoration-none text-reset opacity-75 small fw-medium">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* الجانب الأيمن: حقل الاشتراك (الحدود واللون اللبني) */}
                    <div className="col-lg-5">
                        <div className="d-flex flex-column align-items-lg-end">
                            <div className="text-lg-start w-100" style={{ maxWidth: '400px' }}>
                                <h6 className="fw-bold mb-2">Subscribe to our newsletter</h6>
                                <p className="opacity-75 small mb-3">The latest news, articles, and resources, sent to your inbox weekly.</p>

                                {/* حقل الإدخال مع حدود ملونة بنفس لون الزر */}
                                <div className="input-group overflow-hidden"
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #6366f1' // الحدود اللبنية الملونة
                                    }}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`form-control border-0 shadow-none py-2 px-3 ${isDark ? 'bg-transparent text-white' : ''}`}
                                        style={{ fontSize: '14px' }}
                                    />
                                    <button
                                        className="btn px-4 fw-medium text-white border-0"
                                        style={{
                                            backgroundColor: '#6366f1', // اللون اللبني المائل للبنفسجي
                                            fontSize: '14px'
                                        }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* خط فاصل داخلي رفيع */}
                <hr className="my-5 opacity-10" />

                {/* الجزء السفلي: الحقوق والسوشيال ميديا */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <p className="small opacity-50 mb-0">
                        Copyright 2026 © agency.ai - All Right Reserved.
                    </p>

                    <div className="d-flex gap-3">
                        {[assets.facebook_icon, assets.twitter_icon, assets.instagram_icon, assets.linkedin_icon].map((icon, i) => (
                            <img
                                key={i} src={icon} alt="social" className="opacity-50"
                                style={{
                                    width: '18px',
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