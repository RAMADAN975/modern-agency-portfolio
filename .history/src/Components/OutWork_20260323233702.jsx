import React from 'react'
import Title from './Title'

const OutWork = () => {

    const workData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
        }
    ]

    return (
        <div id='our-work' className=''>
            <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
        </div>
    )
}

export default OutWork
