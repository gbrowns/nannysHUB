import React from 'react'

function NannyRequests() {
  return (
     <div className="nanny-requests">
          <h1>Nannies Requests</h1>
          <div className="requests">
               <div className="left">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>address</th>
                                <th>Age</th>
                                <th>Contract</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                   <input type="button" value="approve" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                    <input type="button" value="Approve" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                    <input type="button" value="Approve" />
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>

               </div>
               <div className="right">
                    <h2>Approved Nannies</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Expected Salary</th>
                                <th>Occupied</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                   <input type="button" value="approved" />
                                   <input type="button" value="delete" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                    <input type="button" value="Approved" />
                                    <input type="button" value="delete" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                    <input type="button" value="Approved" />
                                    <input type="button" value="delete" />
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>

               </div>
          </div>
     </div>
  )
}

export default NannyRequests