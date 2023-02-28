import React from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete, AiOutlineMail, AiFillEdit } from 'react-icons/ai'
import { GrConnect } from 'react-icons/gr'
import SideNavigation from '../components/SideNavigation'
import { filterApprovedNannyData, getNannyData } from '../utils/Helper'

function NannyDash() {

     const {approvedNannies} = filterApprovedNannyData(getNannyData());

  return (
     <>
          <SideNavigation />
          <div className='nannies-dash common'>
               <h1>Nannies</h1>
               <table>

                    <tr>
                         <th>Full Name</th>
                         <th>Phone</th>
                         <th>Email</th>
                         <th>Location</th>
                         <th>Expected Sal.</th>
                         <th>Job Type</th>
                         <th>Booked</th>
                         <th>Action</th>
                    </tr>

                    <tbody>
                         {
                              approvedNannies.length ? approvedNannies.map(nanny => <TableRow key={nanny._id} nanny={nanny} />) : <tr><td colSpan='8'>Loading Nannies...</td></tr>
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
     const {firstname, lastname, phone, email, address, salary, agreementOptions, booked} = nanny;
     return (
          <tr>
               <td>{`${firstname} ${lastname}`}</td>
               <td>{phone}</td>
               <td>{email}</td>
               <td>{address}</td>
               <td>{salary}</td>
               <td>
                    {
                         agreementOptions.length ?  agreementOptions.join(",") : <span>Not Specified</span>
                    }
               </td>
               <td><b>
                    {
                         booked ? "Booked" : "Available"
                    }
               </b></td>
               <td>
                    <AiFillEdit className='icon' />
                    <AiOutlineMail className='icon' />
                    <AiFillDelete className='icon' />
               </td>

          </tr>
     )
}

export default NannyDash