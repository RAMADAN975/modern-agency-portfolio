import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    const isDark = theme === 'dark';

    // الألوان بناءً على طلبك (لون خلفية ولون حدود)
    const bgColor = isDark ? '#0f172a' : '#f8f9fa'; // لون خلفية مخصص للفوتر
    const borderColor = '#6366f1'; // اللون اللبني/البنفسجي للحدود والزر

    return (
        // هنا وضعنا لون الخلفية والحدود للقسم بالكامل
        <footer className={`container-fluid py-5 mt-5 ${isDark ? 'text-white' : 'text-dark'}`}
            style={{
                backgroundColor: bgColor,
                borderTop: `2px solid ${borderColor}`, // حدود علوية ملونة
                borderBottom: `2px solid ${borderColor}` // حدود سفلية ملونة
            }}>

            <div className="container px-md-5">
                <div className="row gy-4 align-items-center justify-content-between">

                    {/* الجانب الأيسر: اللوجو والروابط */}
                    <div className="col-lg-6 text-start">
                        <img
                            src={isDark ? assets.logo_dark : assets.logo}
                            alt="logo"
                            className="mb-3"
                            style={{ height: '32px' }}
                        />
                        <p className="opacity-75 mb-4" style={{ maxWidth: '420px', fontSize: '15px' }}>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        <div className="d-flex gap-4 flex-wrap">
                            {['Home', 'Services', 'Our work', 'Testimonial'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-decoration-none text-reset opacity-75 small fw-medium">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* الجانب الأيمن: حقل الاشتراك باللون والحدود */}
                    <div className="col-lg-5">
                        <div className="d-flex flex-column align-items-lg-end">
                            <div className="w-100" style={{ maxWidth: '400px' }}>
                                <h6 className="fw-bold mb-2">Subscribe to our newsletter</h6>
                                <p className="opacity-75 small mb-3">The latest news, articles, and resources, sent to your inbox weekly.</p>

                                {/* حقل الاشتراك مع حدود ملونة */}
                                <div className="input-group overflow-hidden shadow-sm"
                                    style={{ borderRadius: '8px', border: `1px solid ${borderColor}` }}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`form-control border-0 shadow-none py-2 px-3 ${isDark ? 'bg-transparent text-white' : 'bg-white'}`}
                                        style={{ fontSize: '14px' }}
                                    />
                                    <button
                                        className="btn px-4 fw-medium text-white border-0"
                                        style={{ backgroundColor: borderColor, fontSize: '14px' }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* خط فاصل ناعم */}
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
                                style={{ width: '18px', filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;