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
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer
