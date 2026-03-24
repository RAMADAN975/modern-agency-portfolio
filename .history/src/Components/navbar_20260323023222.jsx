import React from 'react'
import assets from '../assets/assets'

const navbar = ({ theme, setTheme }) => {
    return (
        <div className='flex justify-between items-center px-4 sm:px12 lg:px-24 xl:px-40 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white-50 dark:bg-gray-900/70'>

            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt="" />

            <div className='text-gray-700 dark:text-white sm:text-sm'>
                <a href="#" className='sm:hoer:border-b'>Home</a>
                <a href="#services" className='sm:hoer:border-b'>Services</a>
                <a href="#our-work" className='sm:hoer:border-b'>Our-Work</a>
                <a href="#contact-us" className='sm:hoer:border-b'>Contact Us</a>
            </div>

        </div>
    )
}

export default navbar
