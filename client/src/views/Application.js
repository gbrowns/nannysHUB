import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Application() {
  return (
    <div>
        <Navbar />
        <Banner title="Apply for Job" image={require('../images/nanny1.jpeg')} />
        <Footer />
    </div>
  )
}

export default Application