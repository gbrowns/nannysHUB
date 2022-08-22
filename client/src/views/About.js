import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="about-page">
        <Navbar />
        <Banner title="About Us" image={require('../images/nanny1.jpeg')}/>
        <div className="about-content">
            <div className="left">
                <h3>Who are we?</h3>
                <span>
                    We are a platform that is passionate about helping people find the perfect nanny for their needs.
                </span>
                <p>
                    
                    Nannies Hub is a channel, and an application developed and whose main business is to help you find domestic workers in the easiest way possible.  We source for potential domestic workers. We then shortlist and interview them.  Those who qualify are entered into our data-base.  You can then find and pick them, interview them again, and choose the most suitable for your situation.

                    At Nannies Hub we know how hard it is to find childcare designed to make your life easier and give you more peace of mind. Our site is designed to be an easy to use tool that will enable you to find the right child carer, when you require one.

                    Nannies HUb believes that the right fit is the most important thing. The platform helps you to find talented people to help you and your family in your day-to-day activities.

                </p>

                {/*<p>
                    To find the right fit we have to understand your familys unique personality and match it with the right candidates.

                    Whether you are looking for a nanny, babysitter or house- help, with our interactive and easy to use website, we can help you get reliable child-carers.

                    With our database of applicants, we can provide house-helps for full-time and part-time, live-in or live-out jobs, emergency situation nannies (e.g. When your house help fails to turn up on Sunday evening or even Monday morning and you are reporting to work), experienced mother helpers and babysitters.

                    You will also find useful information and advice on hiring a child carer within our site.

                    Our site is completely free to preview, so you can search out possible child carers before you contact us. If you find someone that you would like to get in touch with, you are welcome to contact us for more details.
                </p>*/}

            </div>
            <div className="right">
                <img src={require('../images/nanny5.jpeg')} alt="nanny" width="100px" />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About