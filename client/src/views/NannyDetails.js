import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function NannyDetails() {
    const {nannyId} = useParams();
    const [nanny, setNanny] = useState({});
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [coords, setCoords] = useState({});
    const [message, setMessage] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `http://localhost:8000/api/nannies/${nannyId}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        /*
        try{
            axios(options)
            .then(res => {
                if (res.status !== 200) {
                    setErrorMsg("An error occured");
                }
                setNanny(res.data.data);
            });
        }catch(err){
            setErrorMsg(err.message);
        }*/
    
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            //console.log(latitude, longitude);
            setCoords({ latitude, longitude });
        });
        
    }, [nannyId, coords]);


    const handleSubmit = (e) => {
        e.preventDefault();
        //check for inputs
        if (!fullName || !email || !phone || !message){
            setErrorMsg("Please provide all inputs");
            return;
        }

        if(!nannyId){
            setErrorMsg("You must select a nanny");
            return;
        }

        const requestDetails = {
            nannyId,fullName,email,
            phone,coords,message
        }

        const options = {
            method: "POST",
            url: "http://localhost:8000/api/requests",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(requestDetails),
        }

        //POST request to DB
        axios(options)
            .then(res => {

                //console.log(res); //
                if(res.status === 201){
                    setErrorMsg("Request Submitted Successfully");

                    //clear inputs
                    setFullName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                }else{
                    setErrorMsg("Request failed to submit");
                }
            })
            .catch(err => {
                setErrorMsg(err.message)
                //console.log(err.message);
            })



    }

    const {firstname, lastname, age, gender, address, location, empStatus, jobOptions, agreementOptions, salary, availability} = nanny;
  return (
    <div>
        <Navbar />
        
        <div className="nanny-details-page">
            <div className='left'>

                <div className='nanny-details'>
                    <h1>Nanny's Name: {`${firstname} ${lastname}`}</h1>
                    <p>Age: <b>{age}</b></p>
                    <p>Address: <b>{`${address} | ${location}`}</b></p>
                    <p>Gender: <b>{gender}</b></p>
                    <p>Employment status: <b>{empStatus}</b></p>
                    <p>Chores: 
                        {
                           //jobOptions.map((chore,i) => <span key={i}>{chore}</span>)
                        }
                    </p>
                    <p>Agreement Type: <b>{/* agreementOptions.join(', ')*/}</b></p>
                    <p>Availability: <b>{availability}</b></p>
                    <p>Expected Salary: <b>{salary}</b></p>
                </div>

            </div>
            <div className='right'>
                <h3>Secure selected Nanny</h3>
                {
                    errorMsg &&  <span>{errorMsg}</span>
                }
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Client's full name" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Your phone number" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <textarea 
                        name="message" 
                        id="message" c
                        ols="30" rows="10" 
                        placeholder="Enter additional message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}>
                    
                    </textarea>
                        
                    <input type="submit" value={`Request for ${firstname}`} />
                </form>
                
            </div>
        </div>


    </div>
  )
}

export default NannyDetails