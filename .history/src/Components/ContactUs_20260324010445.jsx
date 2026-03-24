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
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div id='contact-us' className="container py-5">
            <Title title='Reach out to us' desc='Ready to grow your brand? Let’s connect and build something exceptional together.' />

            <div className="row justify-content-center mt-4">
                <div className="col-lg-9">
                    <form onSubmit={onSubmit}>
                        {/* الصف الأول: الاسم والإيميل */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-6 text-start">
                                <label className="form-label small fw-bold">Your name</label>
                                <div className="d-flex align-items-center border rounded-3 px-3 bg-white">
                                    <img src={assets.person_icon} alt="" style={{ width: '16px' }} />
                                    <input name='name' type="text" placeholder='Enter your name' className="form-control border-0 shadow-none py-2" required />
                                </div>
                            </div>
                            <div className="col-md-6 text-start">
                                <label className="form-label small fw-bold">Email id</label>
                                <div className="d-flex align-items-center border rounded-3 px-3 bg-white">
                                    <img src={assets.email_icon} alt="" style={{ width: '16px' }} />
                                    <input name='email' type="email" placeholder='Enter your email' className="form-control border-0 shadow-none py-2" required />
                                </div>
                            </div>
                        </div>

                        {/* الصف الثاني: الرسالة */}
                        <div className="mb-4 text-start">
                            <label className="form-label small fw-bold">Message</label>
                            <div className="border rounded-3 px-3 py-2 bg-white">
                                <textarea name='message' rows={6} placeholder='Enter your message' className="form-control border-0 shadow-none p-0" required />
                            </div>
                        </div>

                        {/* زر الإرسال */}
                        <div className="text-start">
                            <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2" style={{ backgroundColor: '#6366f1', borderColor: '#6366f1' }}>
                                Submit <img src={assets.arrow_icon} alt="" style={{ width: '12px', filter: 'brightness(0) invert(1)' }} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs