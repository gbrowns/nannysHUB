import React from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import SideNavigation from '../components/SideNavigation'
import { useEffect, useState } from 'react'

import { BASE_URL } from '../utils/Helper'

function PaymentsDash() {

     const [payments, setPayments] = useState([]);
     //get token from local storage
     const token = localStorage.getItem('token');
     

     useEffect(() => {
          let mounted = true;

          const fetchData = async () => {
               try{
                    const response = await fetch(`${BASE_URL}/mpesa/payments`, {
                         method: "GET",
                         headers: {
                                   'Content-Type': 'application/json',
                                   'x-access-token': token
                         }
                    });

                    const result = await response.json();

                    if(mounted){
                         setPayments(result.data.results);
                    }
               }catch(err){
                    console.log("Error",err)
               }
          }

          if (!payments.length) {
               fetchData();  
          }

          return () => {
               mounted = false;
     
          }

     }, [payments]);

     console.log(payments);


  return (

     <>
          <SideNavigation />
          <div className="payments">

               <h1>Payments</h1>

               <table>
                    <thead>
                         <tr>
                              <th>Code</th>
                              <th>Date</th>
                              <th>Amount Recieved</th>
                              <th>Phone</th>
                              <th>Action</th>
                         </tr>
                    </thead>

                    <tbody>
                         {
                              payments.length ? payments.map(payment => <TableRow key={payment._id} payment={payment} />) : <tr><td colSpan='8'>Loading Payments...</td></tr>
                         }
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
               
               <td>
                    <BiHide className='icon' />
                    <BiArchiveIn className='icon' />
                    <AiFillDelete className='icon' />
               </td>
          </tr>
     )
}

export default PaymentsDash