import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { getNannyById, submitRequests } from '../utils/Helper';

function NannyDetailsPage() {
   
    
    const [fullname, setFullName] = useState("");
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
        localStorage.setItem("nannyId", id); //JSON.stringify(id)
    }

    //console.log(nannyId);

    const nanny = getNannyById(nannyId); //fetch nanny data from DB //JSON.parse(nannyId)


    const handleSubmit = async (e) => {
        e.preventDefault();

        //check for inputs
        if (!fullname || !email || !phone || !message){
            setErrorMsg("Please provide all inputs");
            return;
        }

        if(!nannyId){
            setErrorMsg("You must select a nanny");
            return;
        }

        const orderDetails = {
            nannyId,fullname,email,
            phone,message
        }

        //submit order for nanny
        const res = await submitRequests(orderDetails);

        //console.log(res);
        if (res.status !== 201){
            setErrorMsg("Oops, an error occured in the server!");
            return;
        }
        //clear inputs
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setErrorMsg("Request submitted successfully");

        //redirect to find-a-nanny page after 3 seconds
        setTimeout(() => {
            navigate("/find-a-nanny");
        }, 3000);
    }
    //handle input change
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        if(errorMsg) setErrorMsg("");

        switch(name){
            case "fullname":
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
                    <h3>Request Form</h3>
                    {
                        errorMsg &&  <span>{errorMsg}</span>
                    }
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Client's full name" 
                            value={fullname}
                            name="fullname"
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