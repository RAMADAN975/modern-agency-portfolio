import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience',
            icon: assets.social_icon
        },
    ]

    return (
        <div
            className="position-relative overflow-hidden card shadow-sm border mb-3 mx-auto"
            style={{ maxWidth: "500px", borderRadius: "15px" }}>

            {/* <img
                src={assets.bgImage2}
                alt=""
                className="position-absolute top-50 start-50 translate-middle bg-image"
                style={{ zIndex: -1 }}
            /> */}

            <div className="container">

                <Title
                    title="How can we help?"
                    desc="From strategy to execution, we craft digital solutions that move your business forward."
                />

                <div className="row justify-content-center">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-5 mb-4">
                            <ServiceCard service={service} index={index} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Services