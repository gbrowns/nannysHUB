import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const year = new Date().getFullYear();

  return (
    <footer>
        <div className='section-a'>
            <h3>Reach out to the Admin</h3>
            <input type="button" value="Get a Nanny" onClick={() => navigate('/find-a-nanny') }/>

        </div>
        <div className='section-b'>

            <div className="copy">
                <span>&copy; Copyright {year}</span>
                <span>NannyHubKe</span>
                <span><a href="https://github.com/Godwin254">Brownscodes</a></span>
            </div>

            <div className="icons">
                <FaFacebookF className="icon"/>
                <FaTiktok className="icon" />
                <FaTwitter className="icon" /> 
            </div>


            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/find-a-nanny">Find a nanny</Link>
                <Link to="/apply-for-job">Apply for job</Link>
            </div>
            
        </div>
        
    </footer>
  )
}

export default Footer