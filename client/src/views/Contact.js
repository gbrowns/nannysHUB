import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import Navbar from '../components/Navbar'


function Contact() {
    const CARDS = [
        {
            icon: <BsFillTelephoneFill className="i" />,
            title: "Phone Number",
            content: "+254 712345678"
        },
        {
            icon: <AiOutlineMail className="i" />,
            title: "Email Address",
            content: "nannyshub@gmail.com"
        },
        {
            icon: <MdLocationOn className="i" />,
            title: "Location",
            content: "Nairobi, Kenya"
        }

    ]
  return (
    <div className='contact-page'>
        <Navbar />
        <Banner title="Contact Us" image={require('../images/nanny1.jpeg')}/>
        <div className="contact-content">
            <div className="contact-area">
                <div className="contact-form">
                    {
                        CARDS.map((card, index) => {
                            const { icon, title, content } = card;
                            return (
                                <div className="card" key={index}>
                                    <div className="icon">
                                        {icon}
                                    </div>
                                    <div className="card-body">
                                        <h5>{title}</h5>
                                        <span>{content}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <form autoComplete='off'>
                    <h3>Send Message</h3>
                    <p>
                        Please fill out the form below to send us a message.
                    </p>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Your Phone" />
                        <input type="text" placeholder="Your Location" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" />
                    </div>
                    <input type="submit" value="Send Message" />
                </form>

            </div>
            <div className="map">
                <h3>Find Us on Google Map</h3>
                <p>
                    You can also locate area where our nannies are located for convenient requests.
                </p>
                 <img src={require('../images/map.png')} alt="map" width="100px" />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact