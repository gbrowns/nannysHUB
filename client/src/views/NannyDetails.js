import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NannyDetails() {
    const {id} = useParams();
    const [nanny, setNanny] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/nannies/${id}`)
        .then(res => res.json())
        .then(data => setNanny(data))
    });

  return (
    <div>
        <Navbar />
        <div className="nanny-details-page">
            <div className='left'>

                <div className='nanny-details'>
                    <h1>Nanny ID: {id}</h1>
                    <p>Name: {id}</p>
                    <p>Age: {34}</p>
                    <p>Location: {"Nairobi"}</p>
                    <p>Experience: {"2 years"}</p>
                    <p>Gender: {"Female"}</p>
                    <p>Employment status: {"Unemployed"}</p>
                    <p>Chores: {"Child care, Gardener, Chef, Domestic"}</p>
                    <p>Agreement Type: {"Live in, Contracts"}</p>
                    <p>Availability: {"Immediately"}</p>
                    <p>Salary: {"5000"}</p>
                </div>

            </div>
            <div className='right'>
                <h3>Add additional message</h3>
                <form onSubmit={() => navigate('/make-payment')}>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter additional message"></textarea>
                    <input type="submit" value={`Request for ${id}`} />
                </form>
                
            </div>
        </div>

        <Footer />

    </div>
  )
}

export default NannyDetails