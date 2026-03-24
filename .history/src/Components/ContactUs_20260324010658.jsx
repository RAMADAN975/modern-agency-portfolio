import React from 'react'
import toast from 'react-hot-toast'
import assets from '../assets/assets'
import Title from './Title'

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "d46c74ce-71fa-4bab-88cd-a5b913f14df0");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                toast.success('Thank you for your submission!')
                event.target.reset();
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div id='contact-us' className="container py-5 text-white">
            <Title title='Reach out to us' desc='Ready to grow your brand? Let’s connect and build something exceptional together.' />

            <div className="row justify-content-center mt-5">
                <div className="col-lg-8">
                    <form onSubmit={onSubmit}>
                        <div className="row g-4 mb-4">
                            {/* حقل الاسم */}
                            <div className="col-md-6 text-start">
                                <label className="form-label small opacity-75">Your name</label>
                                <div className="custom-input-group d-flex align-items-center rounded-3 px-3">
                                    <img src={assets.person_icon} alt="" style={{ width: '18px', filter: 'brightness(0) invert(1)' }} />
                                    <input name='name' type="text" placeholder='Enter your name' className="form-control bg-transparent border-0 text-white shadow-none py-2" required />
                                </div>
                            </div>
                            {/* حقل الإيميل */}
                            <div className="col-md-6 text-start">
                                <label className="form-label small opacity-75">Email id</label>
                                <div className="custom-input-group d-flex align-items-center rounded-3 px-3">
                                    <img src={assets.email_icon} alt="" style={{ width: '18px', filter: 'brightness(0) invert(1)' }} />
                                    <input name='email' type="email" placeholder='Enter your email' className="form-control bg-transparent border-0 text-white shadow-none py-2" required />
                                </div>
                            </div>
                        </div>

                        {/* حقل الرسالة */}
                        <div className="mb-5 text-start">
                            <label className="form-label small opacity-75">Message</label>
                            <div className="custom-input-group rounded-3 px-3 py-2">
                                <textarea name='message' rows={5} placeholder='Enter your message' className="form-control bg-transparent border-0 text-white shadow-none p-0" required />
                            </div>
                        </div>

                        <div className="text-start">
                            <button type="submit" className="btn btn-primary rounded-pill px-5 py-2 shadow-sm d-flex align-items-center gap-2" style={{ backgroundColor: '#6366f1', border: 'none' }}>
                                Submit <img src={assets.arrow_icon} alt="" style={{ width: '14px', filter: 'brightness(0) invert(1)' }} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs