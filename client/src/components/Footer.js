import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
  return (
    <footer>
        <div className='part1'>
            <h3>Reach out to the Admin</h3>
            <input type="button" value="Get a Nanny" onClick={() => navigate('/find-a-nanny') }/>

        </div>
        <div className='part2'>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/contact-us">Contact us</Link>
                <Link to="/find-a-nanny">Find a nanny</Link>
                <Link to="/apply-for-job">Apply for job</Link>
            </div>
            <div className="icons">
                <div className="icon">
                    <FaFacebookF className="i"/>
                </div>
                <div className="icon">
                    <FaTiktok className="i"/>
                </div>
                <div className="icon">
                    <FaTwitter className="i"/>
                </div>
                <div className="icon">
                    <FaTiktok className="i"/>
                </div>
                
            </div>
        </div>
        <div className='part3'>
            <span>&copy; Copyright 2022 | Nannies Hub | dev</span>
        </div>
    </footer>
  )
}

export default Footer