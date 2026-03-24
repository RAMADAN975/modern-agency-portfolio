import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
    return (
        <div className="container my-5 pb-5 pt-3">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-xl-10">

                    {/* العنوان: رمادي وبخط صغير */}
                    <p className="text-secondary small fw-medium mb-5" style={{ letterSpacing: '0.5px' }}>
                        Trusted by Leading Companies
                    </p>

                    {/* حاوية الشعارات الملونة مع مسافات (gap) كبيرة ومتجاوبة */}
                    {/* حذفنا opacity-75 من هنا ليكون اللون قوياً */}
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5">
                        {company_logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Company Logo"
                                className="brand-logo-colored"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedBy