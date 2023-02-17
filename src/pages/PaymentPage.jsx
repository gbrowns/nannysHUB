import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';

import Mpesa from '../assets/mpesa.png';
import Paypal from '../assets/paypal.png';
import Visa from '../assets/visa.png';
import Nanny5 from '../assets/nanny6.jpeg';
import { checkout, getNannyById } from '../utils/Helper';


function PaymentPage() {
    const [phoneNo, setPhoneNo] = useState("");
    const [alert, setAlert] = useState("");
    const navigate = useNavigate();
    const {nannyID} = useParams();


    //get selected nanny's data
    const nanny = getNannyById(nannyID);

    const { _id: id, salary } = nanny;
    
    //handle make payment
    const handlePayment = (e) => {
        e.preventDefault();
     
        if (!phoneNo || !salary) {
            setAlert('Please fill in all fields');
            return;
        }

        const phone = Number(phoneNo);
        const paymentData = {phone, salary};
        
        const res = checkout(paymentData)

        //console.log(res);
        if (res.status !== 201){
            setAlert("Oops, an error occured in the server!");
            return;
        }

        setAlert("Payment succuss!!");
        //redirect to payment success page after 3 seconds
        setTimeout(() => {
           navigate('/payment-success');
        }, 3000);
    }

    const handleChange = (e) => {
       
       const {name, value} = e.target;

        switch(name){
            case "phone":
                setPhoneNo(value);
                break;
            default:
                break;
        }

        setAlert('');
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

                <span>{alert}</span>

                <div className='form-group'>
                    <label htmlFor='phone'>Mpesa Phone Number</label>
                    <input 
                        type='text' 
                        placeholder='254 xxx xxx xxx'
                        name='phone'
                        onChange={handleChange}
                        value={phoneNo}
                    />
                </div>


                <div className='details'>
                    <p>Nanny ID: <span>{id || "nanny_id"}</span></p>
                    <p>Payment Method: <span>MPESA</span></p>
                    <p>Total amount: <span>Ksh {salary || "0"}</span></p>
                </div>
                    
                <input type='submit' value={`Pay Ksh ${salary || 0}`}/>
                <a href="/find-a-nanny">Cancel and navigate back</a>
            </form>
            
        </div>
    )
}

export default PaymentPage;