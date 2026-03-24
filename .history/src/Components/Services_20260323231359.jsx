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
        <div id="services" className="position-relative text-center text-dark py-5">

            <img
                src={assets.bgImage2}
                alt=""
                className="position-absolute top-0 start-0 translate-middle d-none d-md-block"
                style={{ zIndex: -1 }}
            />

            <div className="container">

                <Title
                    title="How can we help?"
                    desc="From strategy to execution, we craft digital solutions that move your business forward."
                />

                <div className="row mt-4">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-12 col-md-6 mb-4">
                            <ServiceCard service={service} index={index} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Services