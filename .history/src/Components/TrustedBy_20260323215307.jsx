import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
    return (
        <div className="container my-5 py-4">
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    {/* العنوان بخط صغير ورمادي فاتح */}
                    <p className="text-secondary small fw-semibold text-uppercase mb-5" style={{ letterSpacing: '1px' }}>
                        Trusted by Leading Companies
                    </p>

                    {/* حاوية الشعارات */}
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5 opacity-75">
                        {company_logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Company Logo"
                                className="company-logo-img"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedBy