import React from 'react'
import { FcBusinesswoman } from 'react-icons/fc';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
    const STEPS = {
        client: [
            {
                id: 1,
                title: 'Search',
                description: 'Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>'

            },
            {
                id: 2,
                title: 'Connect',
                description: 'Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>'

            },
            {
                id: 3,
                title: 'Interview',
                description: 'Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>'

            },
            

        ],
        nanny: [
            {
                id: 1,
                title: 'Apply',
                description: 'Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>'
            },
            {
                id: 2,
                title: 'Wait for approval',
                description: 'Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>'
            },
            {
                id: 3,
                title: 'Get interviewed',
                description: 'Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>'
            },
            {
                id: 4,
                title: 'Connect with client',
                description: 'Find a nanny for your child, household nad garden chores from a trusted <span>Nannies Hub</span>'
            }

        ]
    }

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
    <div className='home-page'>
        <Navbar />
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
                    {
                        CARDS.map(({title, icon, description}, index) => {
                            return (
                                <div className="card">
                                    <h3>{title}</h3>
                                    {icon}
                                    <p>
                                        {description}
                                    </p>
                                    <input type="button" value="View available" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='section3'>
                <h3>How it works </h3>
                <div className="unit">
                    <h3>For Clients</h3>
                    <div className="steps">
                        {
                            STEPS.client.map( client => {
                                const { id, title, description } = client;
                                return (
                                    <div className="step" key={id}>
                                        <div className="icon-box">
                                            <span>{id}</span>
                                        </div>
                                        <h3>{title}</h3>
                                        <p>
                                            {description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="unit">
                    <h3>For Nannies</h3>
                    <div className="steps">
                          {
                              STEPS.nanny.map(nanny => {
                                  const { id, title, description } = nanny;
                                  return (
                                      <div className="step" key={id}>
                                          <div className="icon-box">
                                              <span>{id}</span>
                                          </div>
                                          <h3>{title}</h3>
                                          <p>
                                              {description}
                                          </p>
                                      </div>
                                  )
                              })
                          }
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