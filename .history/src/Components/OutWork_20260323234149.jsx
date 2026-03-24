import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OutWork = () => {

    const workData = [
        {
            title: 'Mobile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard managment',
            description: 'We help you execute your plan and deliver results.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results.',
            image: assets.work_fitness_app
        },
    ]

    return (
        <div id='our-work' className=''>
            <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

            <div className=''>
                {
                    workData.map((work, index) => (
                        <div></div>
                    ))
                }
            </div>
        </div>
    )
}

export default OutWork
