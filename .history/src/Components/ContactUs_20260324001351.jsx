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

                <div className=''>
                    <p className=''>Message</p>
                    <textarea rows={8} placeholder='Enter your message' className='' />
                </div>

                <button type="submit" className=''>
                    Submit  <img src={assets.arrow_icon} alt="" />
                </button>
            </form>
        </div>
    )
}

export default ContactUs
