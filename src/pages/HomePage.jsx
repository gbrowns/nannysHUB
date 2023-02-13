import React from 'react'
import { FcBusinesswoman } from 'react-icons/fc';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import HomeImg from '../assets/nanny2.jpeg'
import Nanny1 from '../assets/nanny1.jpeg'
import Nanny2 from '../assets/nanny2.jpeg'
import Nanny3 from '../assets/nanny3.jpeg'
import Nanny4 from '../assets/nanny4.jpeg'

import {useNavigate} from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    const CARDS = [
        {
            title: "Live-in Nannies",
            icon: < FcBusinesswoman className='icon' />,
            description: "Live-in house-helps stay with you at your residence all the time, occasionally taking a day or two, off work to rest. We have a list of select live in house-helps."
        },
        {
            title: "Emmergency Nannies",
            icon: < FcBusinesswoman className='icon' />,
            description: "Emergency Nannies come in handy in the event that your regular house-help does not turn up, for whatever reason. They help you for a day or two. Contact us for emergency house-helps."
        },
        {
            title: "Live-out Nannies",
            icon: < FcBusinesswoman className='icon' />,
            description: "Some call them 'day-bugs', we have a list of experienced live-out house-helps who will work for you, coming in the morning and leaving in the evening."
        },
    ]
   

    return (
        <div className='HomePage'>
            <Navbar />
            <header>
                <img src={HomeImg} alt="banner" width="100px" />
                <div className="overlay"></div>
                <div className='banner'>
                    <h1>Automating your quest for nannies</h1>
                    <p>
                        Find a nanny for your child, 
                        household and garden chores from  a trusted <span>Nannies Hub</span>
                    </p>

                    <div className="btn-controls">
                        <input type="button" value="Appy for Job" onClick={() => navigate('/apply')} />
                        <input type="button" value="Hire Nanny" onClick={() => navigate('/find-a-nanny')} />
                    </div>
                </div>
                
            </header>
            <main>
                <section className='section1'>
                    <div className="section1__left">
                        <h2>Nannies Hub got you.</h2>
                        <p>
                            Because at <span>Nannies Hub</span>, we work on the solutions to your domestic help problems in Nairobi, Kenya.  Contact us for help today.
                            With our access of potential employees, we do provide house-helps for full-time and part-time, live-in or live-out jobs, emergency situation nannies for example, when your house help fails to turn up on Sunday evening or even Monday morning and you are reporting to work. 
                            We link you up with experienced helpers and babysitters.

                        </p>  
                    </div>

                    <div className="section1__right">
                        <img src={Nanny1} alt="nanny" width="100px" />
                        <img src={Nanny2} alt="nanny" width="100px" />
                        <img src={Nanny3} alt="nanny" width="100px" />
                        <img src={Nanny4} alt="nanny" width="100px" />
                    </div>
                </section>
                <section className='section2'>
                    <h2>What Nannies Hub Does?</h2>
                    <p>
                        Our main business is to help you find domestic workers in the easiest way possible.
                    </p>
                    <div className="cards">
                        {
                            CARDS.map(({title, icon, description}, index) => {
                                return (
                                    <div className="card" key={index}>
                                        {icon}
                                        <h3>{title}</h3>
                                        <p>
                                            {description}
                                        </p>
                                        <input type="button" value="View available" onClick={() => navigate('/find-a-nanny')}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className='section3'>
                    <h3>Looking forward to become one of the Nannies?</h3>
                    <p>
                        Are you an experienced house help or nanny in Nairobi? Are you looking for a job? Do you have authentic previous job references and a completely clean criminal record? Are you in good health and willing to take any medical tests requested?
                        If yes, please get in touch and we will help you get your next job. Be ready to be subjected to a rigorous interview and  background check.
                    </p>
                    <input type="button" value="Apply for a Job" onClick={() => navigate('/apply')}/>

                    <div className='require'>
                        <h4>Qualifications</h4>
                        <ul>
                            <li>Must be 18 years of age and above</li>
                            <li>Must have a national ID</li>
                            <li>Must have atleast two proper skills</li>
                            <li>Must be verified in order to begin work</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage