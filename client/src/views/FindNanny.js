import React, {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

function FindNanny() {

    const navigate = useNavigate();
    const [nannies, setNannies] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    

    //fetch nannies data from application
    const fetchNanniesData = async () => {
        const res = await axios.get('http://localhost:8000/api/nannies').catch(err => setErrorMsg(err.message) );
        setNannies(res.data);
    }

    useEffect(() => {
        fetchNanniesData();
    }, [nannies]);

    //handle click on nanny card
    const handleNannyCardClick = (nannyId) => {
        navigate(`/nanny/${nannyId}`);

    }

    
    //const nanny = nannies.map(nanny => nanny)
    const location = useLocation();
    const {state} = location;
    const {chores, type} = state;

    const filteredNannies = nannies.filter(nanny => {
        return nanny.chores.includes(chores) && nanny.type.includes(type);
    });


  return (
    <div className='find-nanny-container'>
        <Navbar />
        <Banner title="Find a Nanny" image={require('../images/nanny1.jpeg')} />
        <div className="find-nanny-content">
            <div className="controls">
                <div className='category-control'>
                    <h3>Category</h3>
                    <select>
                        <option value="">Select Category</option>
                        <option value="">Live-in Nannies</option>
                        <option value="">Live-out Nannies</option>
                        <option value="">Emmergency Nannies</option>
                    </select>

                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search for nanny" />
                </div>
            </div>
            <div className="nanny-list">
                {
                    NANNIES.map((nanny, index) => {
                        const { _id:id, firstName, lastName, address, location, jobOptions, availability, agreementOptions, salary } = nanny;
                        return (
                            <div className="nanny-card" key={index} onClick={() => navigate(`details/${id}`) }>
                                {/*<img src={image} alt="nanny" width="100px" />*/}
                                <div className="nanny-card-body">
                                    <h5>{`${firstName} ${lastName}`}</h5>
                                    <div className="chores">
                                        {
                                            jobOptions.map((chore,i) => <span key={i}>{chore}</span>)
                                        }
                                    </div>
                                    <div className="nanny-card-footer">
                                        <p>Age: <span>{age}</span></p>
                                        <p>Type: <span>{agreementOptions.join(", ")}</span></p>
                                        <p>Location: <span>{`${address} | ${location}`}</span></p>
                                        <p>Expected Salary: <span>{salary}</span></p>
                                    </div>
                                    <input type="button" value={`Ask for ${firstName}`} />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className="request-nanny-form">
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default FindNanny