import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
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

    </div>
  )
}

export default Home