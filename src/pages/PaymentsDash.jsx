import React from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import SideNavigation from '../components/SideNavigation'

function PaymentsDash() {
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
                         <th>Balance</th>
                         <th>Item paid</th>
                         <th>Status</th>
                         <th>Action</th>
                    </tr>

                    <tbody>
                         <tr>
                              <td>PRVXXJWKD</td>
                              <td>12-07-2022</td>
                              <td>2,000</td>
                              <td>1,500</td>
                              <td>Nanny's name</td>
                              <td>Pending</td>
                              <td>
                                   <BiHide className='icon' />
                                   <BiArchiveIn className='icon' />
                                   <AiFillDelete className='icon' />
                              </td>
                         </tr>
                         <tr>
                              <td>PRVXXJWKD</td>
                              <td>12-07-2022</td>
                              <td>4,000</td>
                              <td>0</td>
                              <td>Nanny's name</td>
                              <td>Paid</td>
                              <td>
                                   <BiHide className='icon' />
                                   <BiArchiveIn className='icon' />
                                   <AiFillDelete className='icon' />
                              </td>
                         </tr>

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

export default PaymentsDash