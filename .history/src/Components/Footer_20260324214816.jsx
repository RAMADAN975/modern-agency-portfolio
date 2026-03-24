import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    return (
        <div className=''>
            {/* footer top */}
            <div className=''>
                <div className=''>
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='' alt="" />
                    <p className=''>From strategy to execution, we craft digital solutions that move your business forward.</p>

                    <ul className=''>
                        <li><a className='' href="#hero">Home</a></li>
                        <li><a className='' href="#services">Services</a></li>
                        <li><a className='' href="#our-work">Our Work</a></li>
                        <li><a className='' href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className=''>
                    <h3>Subscribe to our newsletter</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
