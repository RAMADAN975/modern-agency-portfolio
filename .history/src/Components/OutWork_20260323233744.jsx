import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OutWork = () => {

    const workData = [
        {
            title: 'Mobile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app
        }
    ]

    return (
        <div id='our-work' className=''>
            <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
        </div>
    )
}

export default OutWork
