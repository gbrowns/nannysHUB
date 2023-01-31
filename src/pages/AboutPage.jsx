import React, {useState} from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import Nanny5 from '../assets/nanny5.jpeg';

function AboutPage() {

    const [message, setMessage] = useState(false);
    const [openForm, setOpenForm] = useState(false);
  return (
    <div className="AboutPage">
        <Navbar />
        <div className="AboutPage__content">

            <h3>Who are we?</h3>
            <img src={Nanny5} alt="nanny" width="100px" />
            <span>
                We are a platform that is passionate about helping people find the perfect nanny for their needs.
            </span>
            <p>
                
                Nannies Hub is a platform developed and whose main business is to help you find domestic workers in the easiest way possible.  We source for potential domestic workers. We then shortlist and interview them.  Those who qualify are entered into our data-base.  You can then find and pick them, interview them again, and choose the most suitable for your situation.

                At Nannies Hub we know how hard it is to find childcare designed to make your life easier and give you more peace of mind. Our site is designed to be an easy to use tool that will enable you to find the right child carer, when you require one.

                Nannies HUb believes that the right fit is the most important thing. The platform helps you to find talented people to help you and your family in your day-to-day activities.

            </p>

            <input 
                type='button' 
                value={openForm ? 'Close form' : 'Contact us'} 
                onClick={() => setOpenForm(!openForm)}
            />

            {
                openForm && <Form />
            }
           
        </div>
        <Footer />
    </div>
  )
}


const Form = () => {

    return (
        <form>
            <h4>Send us a message</h4>
            <span>Message sent success!</span>
            <input type='text' placeholder='Your name' />
            <input type='email' placeholder='Your email' />
            <textarea placeholder='Your message' />
            <input type='submit' value='Send' />

        </form>
    )
}

export default AboutPage;