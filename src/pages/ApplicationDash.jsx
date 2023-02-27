import React from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete, AiOutlineMail } from 'react-icons/ai'
import { GrConnect } from 'react-icons/gr'
import SideNavigation from '../components/SideNavigation'
import { filterUnapprovedNannyData, getNannyData } from '../utils/Helper'

function ApplicationDash() {

     const {unapprovedNannies} = filterUnapprovedNannyData(getNannyData());
  return (
     <>
          <SideNavigation />
          <div className='appliction common'>
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
                              unapprovedNannies.length ? unapprovedNannies.map(nanny => <TableRow key={nanny.id} nanny={nanny} />) : <tr><td colSpan='8'>Loading Applications...</td></tr>
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

const TableRow = ({nanny}) => {
     const {firstname, lastname, phone, email, address, salary, agreementOptions, verified, approved} = nanny;
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
                    <GrConnect className='icon' />
                    <AiOutlineMail className='icon' />
                    <AiFillDelete className='icon' />
               </td>

          </tr>
     )
}

export default ApplicationDash