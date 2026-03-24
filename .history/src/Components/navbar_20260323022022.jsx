import React from 'react'
import assets from '../assets/assets'

const navbar = ({ theme, setTheme }) => {
    return (
        <div className="d-flex justify-content-between align-items-center sticky-top px-4 py-2 bg-white bg-opacity-75 blur-effect prop">

            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt="" />

        </div>

    )
}

export default navbar
