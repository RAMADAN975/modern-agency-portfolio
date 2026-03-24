import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
    return (
        // تم استبدال الهوامش الجانبية بـ container-fluid مع padding مخصص
        <div className="d-flex flex-column align-items-center gap-4 py-5 text-secondary dark-text-white-80 container-fluid px-md-5">

            <h3 className="fw-semibold h5 mb-4">Trusted by Leading Companies</h3>

            {/* استخدام justify-content-center لتوسيط الشعارات و flex-wrap لترتيبها عند صغر الشاشة */}
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-4 gap-md-5 mx-2">
                {company_logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt="Company Logo"
                        className="company-logo-img dark-shadow"
                    />
                ))}
            </div>
        </div>
    )
}

export default TrustedBy