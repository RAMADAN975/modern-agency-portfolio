import toast from 'react-hot-toast';
import assets from '../assets/assets'
import Title from './Title'

const ContactUs = () => {

    const onSubmit = async () => {
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
        <div id='contact-us' className=''>
            <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
            <form onSubmit={onSubmit} className=''>
                <div>
                    <p className=''>Your name</p>
                    <div className=''>
                        <img src={assets.person_icon} alt="" />
                        <input name='name' type="text" placeholder='Enter your name' className='' required />
                    </div>
                </div>

                <div>
                    <p className=''>Email id</p>
                    <div className=''>
                        <img src={assets.email_icon} alt="" />
                        <input name='email' type="text" placeholder='Enter your email' className='' required />
                    </div>
                </div>

                <div className=''>
                    <p className=''>Message</p>
                    <textarea name='message' rows={8} placeholder='Enter your message' className='' required />
                </div>

                <button type="submit" className=''>
                    Submit  <img src={assets.arrow_icon} alt="" className='' />
                </button>
            </form>
        </div>
    )
}

export default ContactUs
