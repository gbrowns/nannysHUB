import React, {useState} from 'react'
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {BiCopyAlt} from 'react-icons/bi';
import {useParams} from 'react-router-dom';

import { BASE_URL } from '../utils/Helper';

function SuccessPaymentPage() {
  const [code , setCode] = useState('');
  const [successPayment, setSuccessPayment] = useState(false);
  const [alertText, setAlertText] = useState("");
  const {nannyID} = useParams();

  const handleSubmitPaymentCode = async (e) => {
    e.preventDefault();
    setSuccessPayment(true);

    if (!code) {
      setAlertText("Enter receipt code from your mpesa message")
      return;
    }

    //post to backend
    const res = await fetch(`${BASE_URL}/mpesa/confirm`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({nannyID, code})
    })

    if (res.status === 404) {
      setAlertText("Payment not found");
      return;
    } 

    if (res.status !== 200) {
      setAlertText("Error confirming payment");
      return;
    }

    setTimeout(() => {
      setSuccessPayment(true);
    }, 2000);
  }

  return (
    <>
      {successPayment ? DisplaySuccessPayment(code) : PaymentForm(code, setCode, handleSubmitPaymentCode, alertText)}
    </>
  )
}

const DisplaySuccessPayment = (code) => {

  return (
    <div className="successPayment">
      <RiMoneyDollarCircleFill className='successPayment_icon' />
      <h2>Payment Successful</h2>
      <p>Thank you for using <a href='/'>Nannies HUb KE</a></p>
      <p>Mpesa Reference: <span>{code} <BiCopyAlt className="icon" /></span></p>
    </div>
  )
}

const PaymentForm = (code, setCode, handleSubmitPaymentCode, alertText) => {
  return (
    <div className="successPaymentPage">
        {
          alertText ? <div className="alert-container"><span>{alertText}</span></div> : null
        }
        <h1>NannyHub Mpesa Payment</h1>
        <span>
          Enter the Mpesa code sent to your phone number to complete the payment
        </span>
        <form onSubmit={handleSubmitPaymentCode}>
          <input type="text" placeholder="Mpesa Code" value={code} onChange={(e) => setCode(e.target.value)} />
          <input type="submit"  value="Submit"/>
        </form>
    </div>
  )
}

export default SuccessPaymentPage;