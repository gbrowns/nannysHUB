import React from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import SideNavigation from '../components/SideNavigation'
import { getPaymentData } from '../utils/Helper'

function PaymentsDash() {

     const payments = getPaymentData();

     console.log(payments)
  return (

     <>
          <SideNavigation />
          <div className="payments">

               <h1>Payments</h1>

               <table>

                    <tr>
                         <th>Code</th>
                         <th>Date</th>
                         <th>Amount Recieved</th>
                         <th>Phone</th>
                         <th>Action</th>
                    </tr>

                    <tbody>
                         
                    </tbody>

               </table>

               <div className='paginate'>
                    <button>
                         {1}
                    </button>
                    <button>
                         Next
                    </button>
               </div>


          </div>
     </>
    
  )
}

const TableRow = ({payment}) => {
     const { date, amount, phone, receiptNumber, status} = payment;
     return (
          <tr>
               <td>{receiptNumber}</td>
               <td>{date}</td>
               <td>{amount}</td>
               <td>{phone}</td>
               <td>{status}</td>
               <td>
                    <BiHide className='icon' />
                    <BiArchiveIn className='icon' />
                    <AiFillDelete className='icon' />
               </td>
          </tr>
     )
}

export default PaymentsDash