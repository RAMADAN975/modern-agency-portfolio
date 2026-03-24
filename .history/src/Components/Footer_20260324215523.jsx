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
                    <h3 className=''>Subscribe to our newsletter</h3>
                    <p className=''>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className=''>
                        <input type="email" placeholder='Enter your email' className='' />
                        <button className=''>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='' />

            {/* footer bottom */}
            <div className=''>
                <p className=''>Copyright 2026 © GreetStack - All rights reserved</p>
                <div>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
