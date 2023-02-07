import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useNavigate, useLocation} from 'react-router-dom';

import {getNannyData, getNannyById} from '../utils/Helper';

import {MdVerified} from 'react-icons/md';

function FindNannyPage() {

    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(null);

    const nannies = getNannyData();
    //console.log(nannies);

    //
    //handle click on nanny card
    const handleNannyCardClick = (nannyId) => {
        navigate(`/nanny/${nannyId}`);

    }
    
    //filter nannies by isVerified and isApproved
    //const verifiedNannies = nannies.filter(nanny => nanny.isVerified === false);

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
                {
                    nannies ? (<Nannies nannies = {nannies} />) : (<p>Loading...</p>)
                }
                
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

const Nannies = ({nannies}) => {

    console.log(nannies)

    return (
        <>
            {
                nannies.map((nanny) => {
                    const { _id:id, firstname, lastname, age, address, location, jobOptions, availability, agreementOptions, salary } = nanny;
            
            
                    return (
                        <div className='nanny-card' key={id} onClick={() => navigate(`details/${id}`)} >
                            <h1>{`${firstname} ${lastname}`}</h1>
                            <div className="chores">
                                {
                                    jobOptions.map((chore,i) => <span key={i}>{chore}</span>)
                                }
                            </div>
                            <div className="details">
                                <p>Age: <span>{age}</span></p>
                                <p>Type: <span>{agreementOptions.join(", ")}</span></p>
                                <p>Location: <span>{`${address} | ${location}`}</span></p>
                                <p>Expected Salary: <span>{salary}</span></p>
                            </div>
                            <div className="controls">
                                <input type="button" value={`${firstname}'s details`} />
                                <span>
                                    <MdVerified className="icon" />
                                    Verified
                                </span>
                                
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
    
}

export default FindNannyPage;