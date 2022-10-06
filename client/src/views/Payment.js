import React from 'react'
import {useNavigate} from 'react-router-dom';

//get nanny details {by id} - amount to pay, payment method, nanny name, nanny id
//get payment details
//display payment details

function Payment() {

    const navigate = useNavigate();

    //handle make payment
    const handlePayment = (e) => {
        e.preventDefault();
        //post to mpesa api
        //navigate to payment success page
        navigate('/payment-success');
    }
  return (
    <div className='payment'>
        <h2>Complete pending transaction for:</h2>
        <div className='payment-details'>
            <p>Nanny ID: 123456</p>
            <p>Name: Nanny name</p>
            <p>Amount: <span>Ksh 5000</span></p>
            <p>Payment Method: <span>Mpesa</span></p>
        </div>
       
        <form>
            <input type='text' placeholder='Enter valid Mpesa number' />
            <input type='submit' value='Make Payment' onClick={handlePayment}/>
        </form>

        <button onClick={ () => navigate('/find-a-nanny')}>Cancel and navigate back</button>
        
    </div>
  )
}

export default Payment