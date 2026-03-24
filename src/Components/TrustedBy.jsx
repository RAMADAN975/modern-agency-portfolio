import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
    return (
        <div className="container text-center py-5 mt-4">
            {/* p-small و fw-medium لاختصار العنوان */}
            <p className="text-secondary mb-5" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
                Trusted by Leading Companies
            </p>

            {/* d-flex مع gap-5 لتوزيع الشعارات بوضوح وقوة لون كاملة */}
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5">
                {company_logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt="brand"
                        style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
                    />
                ))}
            </div>
        </div>
    )
}

export default TrustedBy