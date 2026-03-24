import React from 'react'

const Title = ({ title, desc }) => {
    return (
        <div>
            <h2 className='text-3xl sm:text-5xl font-medium'>{title}</h2>
        </div>
    )
}

export default Title
