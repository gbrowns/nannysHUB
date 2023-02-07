import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { getNannyById } from '../utils/Helper';

function NannyDetailsPage() {
   
    
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [coords, setCoords] = useState({});
    const [message, setMessage] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();
    const nannyId = localStorage.getItem("nannyId");
    //console.log(id)

    if (!nannyId || nannyId !== id) {
        //save id to local storage
        localStorage.setItem("nannyId", id);
    }

    const nanny = getNannyById(nannyId); //fetch nanny data from DB

    
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

        const orderDetails = {
            nannyId,fullName,email,
            phone,message
        }

        const options = {
            method: "POST",
            url: "https://n-ar93.onrender.com/api/orders",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(orderDetails),
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
    //handle input change
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        if(errorMsg) setErrorMsg("");

        switch(name){
            case "fullName":
                setFullName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;

        }
    }

    const {firstname, lastname, age, gender, address, location, empStatus, jobOptions, agreementOptions, salary, availability} = nanny;
    return (
        <div className='NannyDetails'>
            <Navbar />
            
            <div className="NannyDetails__content">
                <div className='left'>
                    <h3>Nanny's Name: {`${firstname} ${lastname}`}</h3>
                    <p>Age: <b>{age}</b></p>
                    <p>Address: <b>{`${address} | ${location}`}</b></p>
                    <p>Gender: <b>{gender}</b></p>
                    <p>Employment status: <b>{empStatus}</b></p>
                    <p>Availability: <b>{availability}</b></p>
                    <p>Expected Salary: <b>{salary}</b></p>
                    <div>
                        plot map here
                    </div>

                </div>
                <div className='right'>
                    <h3>Attach Your Info.</h3>
                    {
                        errorMsg &&  <span>{errorMsg}</span>
                    }
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Client's full name" 
                            value={fullName}
                            name="fullName"
                            onChange={handleInputChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Your email" 
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Your phone number" 
                            value={phone}
                            name="phone"
                            onChange={handleInputChange}
                        />
                        <textarea 
                            name="message" 
                            id="message" c
                            ols="30" rows="10" 
                            placeholder="Enter additional message"
                            value={message}
                            onChange={handleInputChange}>
                        
                        </textarea>
                            
                        <input type="submit" value={`Request for ${firstname}`} />
                    </form>
                    
                </div>
            </div>


        </div>
    )
}

export default NannyDetailsPage;