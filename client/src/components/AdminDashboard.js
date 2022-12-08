import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { TbChevronDown } from 'react-icons/tb';
import { RiAdminFill } from 'react-icons/ri';
import { MdChildFriendly, MdWork, MdAdminPanelSettings } from 'react-icons/md';
import {useParams, useNavigate} from 'react-router-dom';


function AdminDashboard() {

    const {id} = useParams();
    const navigate = useNavigate();
    //handle admin logout
    const handleLogout = () => {
        localStorage.clear();
        navigate('/admin/login');
    }
  return (
    <div className="admin-dashboard">
        <nav>
            <div className="logo">
                <img src={require('../images/logo.png')} alt="logo" width="150px" />
            </div>

            <div className="nav-links">
                <div className="profile" onClick={handleLogout}>
                    <RiAdminFill className='admin-icon' />
                    <span>Logout</span>
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
                <div className="card" onClick={() => navigate('/nannies-requests')}> 
                    <MdChildFriendly className='icon' />
                    <h2>Nannies Requests</h2>
                    <p>33</p>
                    <span>Last updated today</span>
                </div>
                <div className="card" onClick={() => navigate('/clients-request')}>
                    <FaUsers className='icon'/>
                    <h2>Clients Requests</h2>
                    <p>33</p>
                    <span>Last updated today</span>
                </div>
                <div className="card" onClick={() => navigate('/payments')}>
                    <MdWork className='icon' />
                    <h2>Payments</h2>
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
                                <th>Email</th>
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
                
            </section>
        </main>

    </div>
  )
}

export default AdminDashboard