import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
    return (
        // تم استخدام d-flex flex-column للترتيب، و py-5 للمسافات
        <div id='hero' className="d-flex flex-column align-items-center gap-4 py-5 px-3 text-center w-100 overflow-hidden text-secondary">

            {/* الشارة العليا - Trusted Badge */}
            <div className="d-inline-flex align-items-center gap-2 border border-secondary-subtle p-1 pe-3 rounded-pill bg-body">
                <img style={{ width: '80px' }} src={assets.group_profile} alt="" />
                <p className="mb-0 small fw-medium">Trusted by 10k+ people</p>
            </div>

            {/* العنوان الرئيسي - Heading */}
            <h1 className="display-4 fw-bold lh-sm mt-3" style={{ maxWidth: '800px' }}>
                Turning imagination into <br />
                <span className="text-gradient">digital</span> impact.
            </h1>

            {/* الوصف - Description */}
            <p className="text-secondary fw-medium mx-auto pb-3" style={{ maxWidth: '500px', fontSize: '1.1rem' }}>
                Creating meaningful connections and turning big ideas into interactive digital experiences.
            </p>

            <div className="position-relative w-100 d-flex justify-content-center">
                {/* الصورة الأساسية تبقى دائماً */}
                <img src={assets.hero_img} alt="Hero" className="img-fluid z-1" style={{ maxWidth: '1100px' }} />

                {/* الصورة الزرقاء تختفي في الوضع الليلي بفضل كلاس d-dark-none */}
                <img
                    src={assets.bgImage1}
                    alt=""
                    className="position-absolute hero-bg-decor d-dark-none"
                />
            </div>

        </div>
    )
}

export default Hero