import React from 'react'
import { FcBusinesswoman } from 'react-icons/fc';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='home-page'>
        <div className='banner'>
              <img src={require('../images/nanny2.jpeg')} alt="banner" width="100px" />
            <div className="overlay"></div>
            <h1>Automating your quest for nannies</h1>
            <p>
                Find a nanny for your child, 
                household nad garden chores from  a trusted <span>Nannies Hub</span>
            </p>
            <input type="button" value="Find a nanny" />
        </div>
        <main>
            <section className='section1'>
                <div className="left">
                    <div className="image-tiles">
                        <img src={require('../images/nanny1.jpeg')} alt="nanny" width="100px" />
                        <img src={require('../images/nanny3.jpeg')} alt="nanny" width="100px" />
                        <img src={require('../images/nanny5.jpeg')} alt="nanny" width="100px" />
                        <img src={require('../images/nanny4.jpeg')} alt="nanny" width="100px" />
                    </div>

                </div>
                <div className="right">
                    <h2>Nannies Hub got you</h2>
                    <p>
                        Because at <span>Nannies Hub</span>, we work on the solutions to your domestic help problems in Nairobi, Kenya.  Contact us for help today.
                        With our access of potential employees, we do provide house-helps for full-time and part-time, live-in or live-out jobs, emergency situation nannies for example, when your house help fails to turn up on Sunday evening or even Monday morning and you are reporting to work. 
                        We link you up with experienced helpers and babysitters.

                    </p>
                    
                </div>
            </section>
            <section className='section2'>
                <h2>What Nannies Hub Does?</h2>
                <p>
                    Our main business is to help you find domestic workers in the easiest way possible.
                </p>
                <div className="cards">
                    <div className="card"> 
                        <h3>Live-in Nannies</h3>
                        < FcBusinesswoman  className='icon'/>
                        <p>
                            Live-in house-helps stay with you at your residence all the time, occasionally taking a day or two, off work to rest. We have a list of select live in house-helps.
                        </p>
                        <input type="button" value="View available" />
                    </div>
                    <div className="card"> 
                        <h3>Emergency Nannies</h3>
                        < FcBusinesswoman  className='icon'/>
                        <p>
                            Emergency Nannies come in handy in the event that your regular house-help does not turn up, for whatever reason. They help you for a day or two. Contact us for emergency house-helps.
                        </p>
                        <input type="button" value="View available" />
                    </div>
                    <div className="card"> 
                        <h3>Live-out Nannies</h3>
                        < FcBusinesswoman  className='icon'/>
                        <p>
                            Some call them ‘day-bugs’, we have a list of experienced live-out house-helps who will work for you, coming in the morning and leaving in the evening.
                        </p>
                        <input type="button" value="View available" />
                    </div>
                </div>
            </section>
            <section className='section3'>
                <h3>How it works </h3>
                <div className="unit">
                    <h3>For Clients</h3>
                    <div className="steps">
                        <div className="step">
                            <div className="icon-box">
                               <span>1</span>
                            </div>
                            <h3>Search</h3>
                            <p>
                                Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>
                            </p>
                        </div>
                        <div className="step">
                            <div className="icon-box">
                               <span>2</span>
                            </div>
                            <h3>Connect</h3>
                            <p>
                                Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>
                            </p>
                        </div>
                        <div className="step">
                            <div className="icon-box">
                               <span>3</span>
                            </div>
                            <h3>Interview</h3>
                            <p>
                                Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="unit">
                    <h3>For Nannies</h3>
                    <div className="steps">
                        <div className="step">
                            <div className="icon-box">
                                <span>1</span>
                            </div>
                            <h3>apply</h3>
                            <p>
                                Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>
                            </p>
                        </div>
                        <div className="step">
                            <div className="icon-box">
                                <span>2</span>
                            </div>
                            <h3>Wait for approval</h3>
                            <p>
                                Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>
                            </p>
                        </div>
                        <div className="step">
                            <div className="icon-box">
                               <span>3</span>
                            </div>
                            <h3>Get interviewed</h3>
                            <p>
                                Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>
                            </p>
                        </div>
                        <div className="step">
                            <div className="icon-box">
                               <span>4</span>
                            </div>
                            <h3>Connected with Client</h3>
                            <p>
                                Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section4'>
                <h3>Looking forward to become one of the Nannies</h3>
                <p>
                    Are you an experienced house help or nanny in Nairobi? Are you looking for a job? Do you have authentic previous job references and a completely clean criminal record? Are you in good health and willing to take any medical tests requested?
                    If yes, please get in touch and we will help you get your next job. Be ready to be subjected to a rigorous interview and  background check.
                </p>
                <input type="button" value="Apply for a Job" />
            </section>

        </main>
        <Footer />
        

    </div>
  )
}

export default Home