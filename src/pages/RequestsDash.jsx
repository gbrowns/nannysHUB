import React from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete, AiOutlineMail  } from 'react-icons/ai'
import { GrConnect } from 'react-icons/gr'
import SideNavigation from '../components/SideNavigation'

function RequestsDash() {
  return (
     <>
          <SideNavigation />
          <div className='requests common'>
               <h1>Request For Nannies</h1>

               <table>

                    <tr>
                         <th>Client Name</th>
                         <th>Phone</th>
                         <th>Location</th>
                         <th>Requesting</th>
                         <th>Date</th>
                         <th>Message</th>
                         <th>Action</th>
                    </tr>

                    <tbody>
                         <tr>
                              <td>John Doe</td>
                              <td>+254712345677</td>
                              <td>Karen</td>
                              <td>Hadija</td>
                              <td>12-12-2022</td>
                              <td><b>View</b></td>
                              <td>
                                   <GrConnect className='icon' />
                                   <AiOutlineMail className='icon' />
                                   <AiFillDelete className='icon' />
                              </td>
                         </tr>
                         <tr>
                              <td>Tina Wayne</td>
                              <td>+254712345677</td>
                              <td>Juja</td>
                              <td>Kingstone</td>
                              <td>12-12-2022</td>
                              <td><b>View</b></td>
                              <td>
                                   <GrConnect className='icon' />
                                   <AiOutlineMail className='icon' />
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

export default RequestsDash