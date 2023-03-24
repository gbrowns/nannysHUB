import React, {useState} from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete, AiOutlineMail } from 'react-icons/ai'
import { GrConnect } from 'react-icons/gr'
import { FcApprove } from 'react-icons/fc'

import SideNavigation from '../components/SideNavigation'
import { filterUnapprovedNannyData, getNannyData , BASE_URL} from '../utils/Helper'

function ApplicationDash() {

     const [alertText, setAlertText] = useState("");

     const {unapprovedNannies} = filterUnapprovedNannyData(getNannyData());

     //approve nanny
     const handleApprove = async (id) => {
          console.log(id);
          console.log("clicked");

          const token = localStorage.getItem('token');

          const res = await fetch(`${BASE_URL}/nannies/${id}`, {
               method: "PATCH",
               headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token    
               },
               body: JSON.stringify({approved: true})
          })

          if (res.status !== 200) {
               //set alert text
               setAlertText("An error occured while approving nanny");
          }

          //set alert text
          setAlertText("Nanny approved successfully");

          //refresh page after 2 seconds
          setTimeout(() => {
               window.location.reload();
          }, 2000);
          
     }
  return (
     <>
          <SideNavigation />
          <div className='appliction common'>
               {
                    alertText ? <div className="alert-container"><span>{alertText}</span></div> : null
               }
               <h1>Applications</h1>

               <table>

                    <tr>
                         <th>Full Name</th>
                         <th>Phone</th>
                         <th>Email</th>
                         <th>Location</th>
                         <th>Expected Sal.</th>
                         <th>Job Type</th>
                         <th>Verified</th>
                         <th>Approved</th>
                         <th>Action</th>
                    </tr>

                    <tbody>
                         {
                              unapprovedNannies.length ? 
                                   unapprovedNannies.map(nanny => <TableRow  key={nanny.id} nanny={nanny} onApprove={handleApprove}/>) || <tr><td colSpan='9'>No Applications...</td></tr> : 
                                   <tr><td colSpan='9'>Loading Nanny Applications...</td></tr>
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

const TableRow = ({nanny, onApprove}) => {
     const {id:_id,firstname, lastname, phone, email, address, salary, agreementOptions, verified, approved} = nanny;

     const handleApproveClick = (uid) => {
          onApprove(uid);
     }
     return (
          <tr>
               <td>{`${firstname} ${lastname}`}</td>
               <td>{phone}</td>
               <td>{email}</td>
               <td>{address}</td>
               <td>{salary}</td>
               <td>{agreementOptions}</td>
               <td>{verified ? 'Yes' : 'pending'}</td>
               <td>{approved ? 'Approved' : 'Pending'}</td>
               <td>
                    <FcApprove data-text="Approve" className='icon tooltip' onClick={() => handleApproveClick(nanny._id)}/>
                    <GrConnect data-text="Connect with client" className='icon tooltip' />
                    <AiFillDelete data-text="Delete" className='icon tooltip' />
               </td>

          </tr>
     )
}

export default ApplicationDash