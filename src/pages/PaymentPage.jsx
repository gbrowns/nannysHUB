import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

import Mpesa from '../assets/mpesa.png';
import Paypal from '../assets/paypal.png';
import Visa from '../assets/visa.png';
import Nanny5 from '../assets/nanny6.jpeg';
import { checkout } from '../utils/Helper';

//get nanny details {by id} - amount to pay, payment method, nanny name, nanny id
//get payment details
//display payment details

function PaymentPage() {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(null);
    const [nanny, setNanny] = useState({});
    //const [client, setClient] = useState({});

    const navigate = useNavigate();
    const {nannyID} = useParams();

    //get amount and nanny details
    //get client details 




    useEffect(() => {
        //axios get nannie details
        axios.get(`http://localhost:8000/api/nannies/${nannyID}`)
        .then(res => {
            //console.log(res)
            setNanny(res.data.data);
        })
        .catch(err => {
            setError(err.message);
        });
    }, [nanny]);

    const { _id: id, firstname, lastname, salary } = nanny;

    //handle make payment
    const handlePayment = (e) => {
        e.preventDefault();
        //validate inputs
        if (!phone || !salary) {
            setError('Please fill in all fields');
            return;
        }
        const paymentData = {phone, salary};
        
        const res = checkout(paymentData)

        //console.log(res);
        if (res.status !== 201){
            error("Oops, an error occured in the server!");
            return;
        }

        //redirect to find-a-nanny page after 3 seconds
        setTimeout(() => {
           navigate('/payment-success')
        }, 3000);
    }

    return (
        <div className='PaymentPage'>

            <div className='PaymentPage__rightview'>
                <img src={Nanny5} alt='nanny'/>
                <div className='PaymentPage__rightview__overlay'></div>
                
                <div className='PaymentPage__rightview__content'>
                    <h1>NannyHub.</h1>
                    <p>  Find a nanny for your child, 
                    household and garden chores from  a trusted <span>Nannies Hub</span></p>
                   
                </div>

            </div>

            <form onSubmit={handlePayment}>
                <h2>Checkout</h2>
                <p>Complete payment for the selected nanny ID</p>

                <div className='payment-options'>
                    <img src={Mpesa} alt='mpesa' width="100px"/>
                    <img src={Paypal} alt='paypal' width="100px"/>
                    <img src={Visa} alt='visa' width="100px"/>

                </div>

                <span>{error}</span>

                <div className='form-group'>
                    <label htmlFor='phone'>Mpesa Phone Number</label>
                    <input 
                        type='text' 
                        placeholder='254 xxx xxx xxx'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                </div>


                <div className='details'>
                    <p>Nanny ID: <span>{nannyID}</span></p>
                    <p>Payment Method: <span>Mpesa</span></p>
                    <p>Total amount: <span>Ksh {3000}</span></p>
                </div>
                    
                <input type='submit' value={"Pay ksh 3,000"}/>
                <a href="/find-a-nanny">Cancel and navigate back</a>
            </form>
            
        </div>
    )
}

export default PaymentPage;