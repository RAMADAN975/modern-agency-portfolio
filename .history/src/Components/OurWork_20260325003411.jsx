import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {
    const workData = [
        {
            title: 'Mobile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app,
            aos: 'fade-right'
        },
        {
            title: 'Dashboard management',
            description: 'We help you execute your plan and deliver results.',
            image: assets.work_dashboard_management,
            aos: 'fade-up'
        },
        {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results.',
            image: assets.work_fitness_app,
            aos: 'fade-left'
        },
    ]

    return (
        // ✅ الـ ID مطابق تماماً لما في الـ Navbar
        <div id='work' className="container py-5 my-5">
            <div data-aos="fade-down">
                <Title
                    title='Our latest work'
                    desc='From strategy to execution, we craft digital solutions that move your business forward.'
                />
            </div>

            <div className="row g-4 mt-4">
                {workData.map((work, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4" data-aos={work.aos} data-aos-delay={index * 100}>
                        <div className="h-100 border-0">
                            <div className="d-flex justify-content-center align-items-center p-4 mb-3 rounded-4"
                                style={{ backgroundColor: '#F0F4FF' }}>
                                <img
                                    src={work.image}
                                    className="img-fluid rounded-3 shadow-sm"
                                    alt={work.title}
                                />
                            </div>
                            <div className="text-start">
                                <h3 className="h5 fw-bold mb-2">{work.title}</h3>
                                <p className="text-secondary small lh-base">{work.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurWork;