import React, {useState} from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import Nanny5 from '../assets/nanny5.jpeg';

function AboutPage() {

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
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        //check for inputs
        if (!fullname || !email || !phone || !message){
            setErrorMsg("Please provide all inputs");
            return;
        }

        const messageDetails = {
            fullname,email,
            phone,message
        }

        //submit order for nanny
        const res = await submitRequestOrder(orderDetails);

        //console.log(res);
        if (res.status !== 201){
            setErrorMsg("Oops, an error occured in the server!");
            return;
        }
        //clear inputs
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setErrorMsg("Request submitted successfully");

        //redirect to find-a-nanny page after 3 seconds
        setTimeout(() => {
            navigate("/find-a-nanny");
        }, 3000);
    }

    //handle input change
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        if(errorMsg) setErrorMsg("");

        switch(name){
            case "fullname":
                setFullName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Send us a message</h4>
            {
                errorMsg && <span className="errorMsg">{errorMsg}</span>
            }
            <input 
                type='text' 
                placeholder='Yourfull name'
                name="fullname"
                value={fullname}
                onChange={handleInputChange}
            />
            <input 
                type='email' 
                placeholder='Your email'
                name="email"
                value={email}
                onChange={handleInputChange}
            />
            <input 
                type='phone' 
                placeholder='Your email'
                name="phone"
                value={phone}
                onChange={handleInputChange}   
            />
            <textarea 
                placeholder='Your message'
                name="message"
                value={message}
                onChange={handleInputChange} 
            />
            <input type='submit' value='Send' />

        </form>
    )
}

export default AboutPage;