import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

import {MdVerified} from 'react-icons/md';

function FindNannyPage() {

    const navigate = useNavigate();
    const [nannies, setNannies] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    const options = {
        method: 'GET',
        url: 'http://localhost:8000/api/nannies',
        headers: {
            'Content-Type': 'application/json'
        }   
    }

    useEffect(() => {
        const fetchNanniesData = async () => {
            const res = await axios(options).catch(err => setErrorMsg(err.message));
            setNannies([...res.data.data.results]);
        }
        fetchNanniesData();
    }, [nannies]);

    //
    //handle click on nanny card
    const handleNannyCardClick = (nannyId) => {
        navigate(`/nanny/${nannyId}`);

    }
    
    //filter nannies by isVerified and isApproved
    const verifiedNannies = nannies.filter(nanny => nanny.isVerified === false);

    //console.log(approvedNannies);
  return (
    <div className='FindNannyPage'>
        <Navbar />
        <div className="FindNannyPage__content">
            <h3> Find a Nanny</h3>

            <div className="controls">
                <select>
                    <option value="">Filter</option>
                    <option value="live-in">Live-in Nannies</option>
                    <option value="live-out">Live-out Nannies</option>
                    <option value="emmergency">Emmergency Nannies</option>
                </select>
                
                <input type="search" placeholder="Search for nanny" />
            </div>

            <div className="nanny-list">
                <div className='nanny-card'>
                    <h1>John Doe</h1>
                    <div className="chores">
                        <span>Chores here</span>
                        <span>Chores</span>
                        <span>Chores</span>
                        <span>Chores</span>
                    </div>
                    <div className="details">
                        <p>Age: <span>24</span></p>
                        <p>Type: <span>Full-Time</span></p>
                        <p>Location: <span>Nairobi West</span></p>
                        <p>Expected Salary: <span>500</span></p>
                    </div>
                    <div className="controls">
                        <input type="button" value={`View details`} />
                        <span>
                            <MdVerified className="icon" />
                            Verified
                        </span>
                        
                    </div>
                </div>
                <div className='nanny-card'>
                    <h1>John Doe</h1>
                    <div className="chores">
                        <span>Chores here</span>
                        <span>Chores</span>
                        <span>Chores</span>
                        <span>Chores</span>
                    </div>
                    <div className="details">
                        <p>Age: <span>24</span></p>
                        <p>Type: <span>Full-Time</span></p>
                        <p>Location: <span>Nairobi West</span></p>
                        <p>Expected Salary: <span>500</span></p>
                    </div>
                    <div className="controls">
                        <input type="button" value={`View details`} />
                        <span>
                            <MdVerified className="icon" />
                            Verified
                        </span>
                        
                    </div>
                </div>
                <div className='nanny-card'>
                    <h1>John Doe</h1>
                    <div className="chores">
                        <span>Chores here</span>
                        <span>Chores</span>
                        <span>Chores</span>
                        <span>Chores</span>
                    </div>
                    <div className="details">
                        <p>Age: <span>24</span></p>
                        <p>Type: <span>Full-Time</span></p>
                        <p>Location: <span>Nairobi West</span></p>
                        <p>Expected Salary: <span>500</span></p>
                    </div>
                    <div className="controls">
                        <input type="button" value={`View details`} />
                        <span>
                            <MdVerified className="icon" />
                            Verified
                        </span>
                        
                    </div>
                </div>
                <div className='nanny-card'>
                    <h1>John Doe</h1>
                    <div className="chores">
                        <span>Chores here</span>
                        <span>Chores</span>
                        <span>Chores</span>
                        <span>Chores</span>
                    </div>
                    <div className="details">
                        <p>Age: <span>24</span></p>
                        <p>Type: <span>Full-Time</span></p>
                        <p>Location: <span>Nairobi West</span></p>
                        <p>Expected Salary: <span>500</span></p>
                    </div>
                    <div className="controls">
                        <input type="button" value={`View details`} />
                        <span>
                            <MdVerified className="icon" />
                            Verified
                        </span>
                        
                    </div>
                </div>
                <div className='nanny-card'>
                    <h1>John Doe</h1>
                    <div className="chores">
                        <span>Chores here</span>
                        <span>Chores</span>
                        <span>Chores</span>
                        <span>Chores</span>
                    </div>
                    <div className="details">
                        <p>Age: <span>24</span></p>
                        <p>Type: <span>Full-Time</span></p>
                        <p>Location: <span>Nairobi West</span></p>
                        <p>Expected Salary: <span>500</span></p>
                    </div>
                    <div className="controls">
                        <input type="button" value={`View details`} />
                        <span>
                            <MdVerified className="icon" />
                            Verified
                        </span>
                        
                    </div>
                </div>
                <div className='nanny-card'>
                    <h1>John Doe</h1>
                    <div className="chores">
                        <span>Chores here</span>
                        <span>Chores</span>
                        <span>Chores</span>
                        <span>Chores</span>
                    </div>
                    <div className="details">
                        <p>Age: <span>24</span></p>
                        <p>Type: <span>Full-Time</span></p>
                        <p>Location: <span>Nairobi West</span></p>
                        <p>Expected Salary: <span>500</span></p>
                    </div>
                    <div className="controls">
                        <input type="button" value={`View details`} />
                        <span>
                            <MdVerified className="icon" />
                            Verified
                        </span>
                        
                    </div>
                </div>
                <div className='nanny-card'>
                    <h1>John Doe</h1>
                    <div className="chores">
                        <span>Chores here</span>
                        <span>Chores</span>
                        <span>Chores</span>
                        <span>Chores</span>
                    </div>
                    <div className="details">
                        <p>Age: <span>24</span></p>
                        <p>Type: <span>Full-Time</span></p>
                        <p>Location: <span>Nairobi West</span></p>
                        <p>Expected Salary: <span>500</span></p>
                    </div>
                    <div className="controls">
                        <input type="button" value={`View details`} />
                        <span>
                            <MdVerified className="icon" />
                            Verified
                        </span>
                        
                    </div>
                </div>
                <div className='nanny-card'>
                    <h1>John Doe</h1>
                    <div className="chores">
                        <span>Chores here</span>
                        <span>Chores</span>
                        <span>Chores</span>
                        <span>Chores</span>
                    </div>
                    <div className="details">
                        <p>Age: <span>24</span></p>
                        <p>Type: <span>Full-Time</span></p>
                        <p>Location: <span>Nairobi West</span></p>
                        <p>Expected Salary: <span>500</span></p>
                    </div>
                    <div className="controls">
                        <input type="button" value={`View details`} />
                        <span>
                            <MdVerified className="icon" />
                            Verified
                        </span>
                        
                    </div>
                </div>
                
            </div>   

            <div className="paginate">
                <button className="btn btn-primary" onClick={() => navigate('/nanny/1')}>1</button>
                <button className="btn btn-primary" onClick={() => navigate('/nanny/2')}>2</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

const Nannies = (nannies) => {
    return (
        <div className="nanny-list">
            {
                nannies.map((nanny) => {
                    const { _id:id, firstname, lastname, age, address, location, jobOptions, availability, agreementOptions, salary } = nanny;
                    return (
                        <div className="nanny-card" key={id} onClick={() => navigate(`details/${id}`) }>
                            {/*<img src={image} alt="nanny" width="100px" />*/}
                            <div className="nanny-card-body">
                                <h5>{`${firstname} ${lastname}`}</h5>
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
                                <input type="button" value={`Ask for ${firstname}`} />
                            </div>
                        </div>
                    )
                })
            }
               
        </div>
    )
    
}

export default FindNannyPage;