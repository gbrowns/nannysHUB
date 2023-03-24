import React from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete, AiOutlineMail  } from 'react-icons/ai'
import { GrConnect } from 'react-icons/gr'
import SideNavigation from '../components/SideNavigation'

import { useEffect, useState } from 'react'

import { BASE_URL } from '../utils/Helper'

function RequestsDash() {

     const [requests, setRequests] = useState([]);
     //get token from local storage
     const token = localStorage.getItem('token');

     useEffect(() => {
          let mounted = true;

          const fetchData = async () => {
               try{
                    const response = await fetch(`${BASE_URL}/orders`, {
                         method: "GET",
                         headers: {
                                   'Content-Type': 'application/json',
                                   'x-access-token': token
                         }
                    });

                    const result = await response.json();

                    if(mounted){
                         setRequests(result.data.results);
                    }
               }catch(err){
                    console.log("Error",err)
               }
          }

          if (!requests.length) {
               fetchData();  
          }

          return () => {
               mounted = false;
     
          }

     }, [requests]);

     //console.log(requests);

  return (
     <>
          <SideNavigation />
          <div className='requests common'>
               <h1>Request For Nannies</h1>

               <table>
                    <thead>
                         <tr>
                              <th>Client Name</th>
                              <th>Phone</th>
                              <th>Email</th>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Message</th>
                              <th>Action</th>
                         </tr>
                    </thead>

                    <tbody>
                         {
                              requests.length ? 
                                   requests.length === 0 ? 
                                        <tr><td colSpan='9'>No Requests</td></tr> :
                                        requests.map(request => <TableRow key={request._id} request={request} />) : 
                              <tr><td colSpan='8'>Loading Requests...</td></tr>
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

const TableRow = ({request}) => {
     const {fullname, email, phone, message, createAt, paid, paymentCode} = request;

     return (
          <tr>
               <td>{fullname}</td>
               <td>{phone}</td>
               <td>{email}</td>
               <td>
                    {
                         paid ? paymentCode : "Not Paid"    
                    }
               </td>
               <td>{createAt}</td>
               <td>
                    {
                         message ? "View" : "No Message"
                    }
               </td>
               
               <td>
                    <BiHide className='icon' />
                    <BiArchiveIn className='icon' />
                    <AiFillDelete className='icon' />
               </td>
          </tr>
     )
}

export default RequestsDash