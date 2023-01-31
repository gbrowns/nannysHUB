import React from 'react'
import { BiHide, BiArchiveIn } from 'react-icons/bi'
import { AiFillDelete, AiOutlineMail } from 'react-icons/ai'
import { GrConnect } from 'react-icons/gr'
import SideNavigation from '../components/SideNavigation'

function ApplicationDash() {
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
                         <th>Status</th>
                         <th>Action</th>
                    </tr>

                    <tbody>
                         <tr>
                              <td>John Doe</td>
                              <td>+254712345677</td>
                              <td>john@gmail.com</td>
                              <td>South B</td>
                              <td>8,000</td>
                              <td>Contract, Fulltime</td>
                              <td><b>Pending</b></td>
                              <td>
                                   <GrConnect className='icon' />
                                   <AiOutlineMail className='icon' />
                                   <AiFillDelete className='icon' />
                              </td>

                         </tr>
                         <tr>
                              <td>John Doe</td>
                              <td>+254712345677</td>
                              <td>john@gmail.com</td>
                              <td>South B</td>
                              <td>8,000</td>
                              <td>Contract, Fulltime</td>
                              <td><b>Pending</b></td>
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

export default ApplicationDash