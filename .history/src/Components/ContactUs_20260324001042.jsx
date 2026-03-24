import React from 'react'
import assets from '../assets/assets'

const ContactUs = (title) => {
    return (
        <div id='contact-us' className=''>
            <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
            <form>
                <div>
                    <p className=''>Your name</p>
                    <div className=''>
                        <img src={assets.person_icon} alt="" />
                        <input type="text" placeholder='Enter your name' className='' required />
                    </div>
                </div>

                <div>
                    <p className=''>Email id</p>
                    <div className=''>
                        <img src={assets.email_icon} alt="" />
                        <input type="text" placeholder='Enter your email' className='' required />
                    </div>
                </div>

                <div>
                    <p className=''>Message</p>
                </div>
            </form>
        </div>
    )
}

export default ContactUs
