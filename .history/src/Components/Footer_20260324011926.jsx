import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
    return (
        <div className=''>
            {/* footer top */}
            <div className=''>
                <div>
                    <img src={assets.logo} className='' alt="" />
                    <p className=''>From strategy to execution, we craft digital solutions that move your business forward.</p>

                    <ul>
                        <li><a className='' href="#hero">Home</a></li>
                        <li><a className='' href="#services">Services</a></li>
                        <li><a className='' href="#">Our Work</a></li>
                        <li><a className='' href="#hero">Contact Us</a></li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer
