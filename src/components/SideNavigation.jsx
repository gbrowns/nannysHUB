import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {IoLogOutOutline} from 'react-icons/io5';

//logo
//side navigation
function SideNavigation() {
  const year = new Date().getFullYear();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth/login');
  }

  return (
    <div className='sidebar'>
     <h1>Nannies</h1>

     <Link to='/admin/dashboard'>Dashboard</Link>
     <Link to='/admin/nanny-board'>Nannies</Link>
     <Link to='/admin/applications'>Applications</Link>
     <Link to='/admin/requests'>Requests</Link>
     <Link to='/admin/payments'>Payments</Link>

      <button onClick={handleLogout}>
        <IoLogOutOutline className='icon'/>
        Logout
      </button>
     <span>&copy; {year} | Nannies Hub </span>
    </div>
  )
}

export default SideNavigation;