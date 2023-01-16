import React from 'react'
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {BiCopyAlt} from 'react-icons/bi';

function SuccessPaymentPage() {
  return (
    <div className="successPayment">
          <RiMoneyDollarCircleFill className='successPayment_icon' />
          <h2>Payment Successful</h2>
          <p>Thank you for using <a href='/'>Nannies HUb KE</a></p>
          <p>Mpesa Reference: <span>123456789 <BiCopyAlt className="icon" /></span></p>

    </div>
  )
}

export default SuccessPaymentPage;