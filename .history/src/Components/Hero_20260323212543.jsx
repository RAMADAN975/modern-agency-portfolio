import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
    return (
        <div id='hero' className="d-flex flex-column align-items-center gap-4 py-5 px-3 px-md-5 text-center w-100 overflow-hidden text-secondary dark-text-white hero-container">

            {/* Trusted Badge */}
            <div className="d-inline-flex align-items-center gap-2 border border-secondary-subtle p-1 pe-3 rounded-pill bg-body-tertiary">
                <img style={{ width: '80px' }} src={assets.group_profile} alt="Profiles" />
                <p className="mb-0 small fw-medium">Trusted by 10k+ people</p>
            </div>

            {/* Heading with Gradient */}
            <h1 className="display-4 fw-bold lh-sm mt-2">
                Turning imagination into <br /><span className="text-gradient">digital</span> impact.
            </h1>

            {/* Description */}
            <p className="lead fw-medium text-secondary-emphasis mx-auto pb-3 custom-max-w">
                Creating meaningful connections and turning big ideas into interactive digital experiences.
            </p>

            {/* Hero Image Section */}
            <div className="position-relative w-100 d-flex justify-content-center">
                <img src={assets.hero_img} alt="Hero" className="img-fluid z-1" style={{ maxWidth: '1100px' }} />

                {/* Background Decor Image */}
                <img
                    src={assets.bgImage1}
                    className="position-absolute top-0 end-0 z-n1 w-50 d-none d-md-block"
                    style={{ opacity: 0.7, pointerEvents: 'none' }}
                    alt=""
                />
            </div>

        </div>
    )
}

export default Hero