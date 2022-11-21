import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

//get nanny details {by id} - amount to pay, payment method, nanny name, nanny id
//get payment details
//display payment details

function Payment() {
    const [phone, setPhone] = useState(null);
    const [amount, setAmount] = useState(null);
    const [error, setError] = useState(null);
    const [nanny, setNanny] = useState({});

    const navigate = useNavigate();
    const {nannyID} = useParams();

    useEffect(() => {
        //axios get
        axios.get(`/api/nannies/${nannyID}`)
            .then(res => {
                setNanny(res.data);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [nanny]);

    //handle make payment
    const handlePayment = (e) => {
        e.preventDefault();
        //validate inputs
        if (!phone || !amount) {
            setError('Please fill in all fields');
            return;
        }
        const paymentDetails = {phone, amount};
        //post to mpesa api
        axios.post('/api/mpesa', paymentDetails)
            .then(res => {
                //console.log(res.data);
                //status !200
                if (res.status !== 200) {
                    setError('An error occured');            
                }
                //navigate to payment success page
                navigate('/payment-success');
            })
            .catch(err => {
                setError(err.message);
            });
    }

    const { _id: id, firstName, lastName, salary } = nanny;
    return (
        <div className='payment'>
            <h2>Complete pending transaction for:</h2>
            <div className='payment-details'>
                <p>Name: {`${firstName} ${lastName}`}</p>
                <p>Nanny ID: {id}</p>
                <p>Amount: <span>Ksh {salary}</span></p>
                <p>Payment Method: <span>Mpesa</span></p>
            </div>
            {
                error && <p className='error'>{error}</p>
            }
        
            <form onSubmit={handlePayment}>
                <input 
                    type='text' 
                    placeholder='Enter valid Mpesa number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                />
                <input
                    type='text' 
                    placeholder='Enter amount'
                    value={salary}
                    onChange={(e) => setAmount(e.target.value || salary)}
                />
                <input type='submit' value='Make Payment'/>
            </form>

            <button onClick={ () => navigate('/find-a-nanny')}>Cancel and navigate back</button>
            
        </div>
    )
}

export default Payment