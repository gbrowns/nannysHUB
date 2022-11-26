import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

//get nanny details {by id} - amount to pay, payment method, nanny name, nanny id
//get payment details
//display payment details

function Payment() {
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
        const paymentDetails = {phone, salary};
        
        const options = {
            method: 'POST',
            url: `http://localhost:8000/api/mpesa/pay`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(paymentDetails)
        }
        //post to mpesa api
        axios(options)
            .then(res => {
                //console.log(res.data);
                //status !200
                if (res.status !== 201) {
                    setError('An error occured');
                    console.log(res);
                    return;           
                }
                //navigate to payment success page
                navigate('/payment-success');
            })
            .catch(err => {
                setError(err.message);
            });
    }

    return (
        <div className='payment'>
            <h2>Complete pending transaction for:</h2>
            <div className='payment-details'>
                <p>Name: {`${firstname} ${lastname}`}</p>
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
                
                <input type='submit' value='Make Payment'/>
            </form>

            <button onClick={ () => navigate('/find-a-nanny')}>Cancel and navigate back</button>
            
        </div>
    )
}

export default Payment