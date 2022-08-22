import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { TbChevronDown } from 'react-icons/tb';
import { RiAdminFill } from 'react-icons/ri';
import { MdChildFriendly, MdWork, MdAdminPanelSettings } from 'react-icons/md';


function AdminDashboard() {
  return (
    <div className="admin-dashboard">
        <nav>
            <div className="logo">
                <img src={require('../images/logo.png')} alt="logo" width="150px" />
            </div>

            <div className="nav-links">
                <div className="profile">
                    <RiAdminFill className='admin-icon' />
                    <span>Admin</span>
                    <TbChevronDown className='icon'/>
                </div> 
            </div>

        </nav>
        <main>
            <div className="title">
                <MdAdminPanelSettings className='icon'/>
                <h1>Admin Dashboard</h1>
            </div>
            <div className="cards">
                <div className="card"> 
                    <FaUsers className='icon'/>
                    <h2>Total Requests</h2>
                    <p>33</p>
                    <span>Last updated today</span>
                </div>
                <div className="card">
                    <MdWork className='icon' />
                    <h2>Clients messages</h2>
                    <p>33</p>
                    <span>Last updated today</span>
                </div>
                <div className="card">
                    <MdChildFriendly className='icon' />
                    <h2>Available Nannies</h2>
                    <p>33</p>
                    <span>Last updated today</span>
                </div>

            </div>
            <section>
                <div className='left'>
                    <h2>Registration Requests</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Location</th>
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
                                    <input type="button" value="View details" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                    <input type="button" value="View details" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                    <input type="button" value="View details" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                    <input className="approve" type="button" value="Approve" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>0712345678</td>
                                <td>Johndoe@gmail.com</td>
                                <td>Nairobi</td>
                                <td>Full Time</td>
                                <td>
                                    <input type="button" value="View details" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='right'>
                    <h2>Clients List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>johndoe@gmail.com</td>
                                <td>Lavington</td>
                                <td>
                                    <input type="button" value="Message" />
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>johndoe@gmail.com</td>
                                <td>Syokimau</td>
                                <td>
                                    <input type="button" value="Message" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>

    </div>
  )
}

export default AdminDashboard