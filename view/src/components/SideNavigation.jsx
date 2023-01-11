import React from 'react';
import { Link } from 'react-router-dom'

//logo
//side navigation

function SideNavigation() {
     const year = new Date().getFullYear();
  return (
    <div className='sidebar'>
     <h1>Nannies</h1>

     <Link to='/admin/dashboard'>Dashboard</Link>
     <Link to='/admin/nanny-board'>Nannies</Link>
     <Link to='/admin/applications'>Applications</Link>
     <Link to='/admin/requests'>Requests</Link>
     <Link to='/admin/payments'>Payments</Link>

     <button>Logout</button>
     <span>&copy; {year} | Nannies Hub </span>
    </div>
  )
}

export default SideNavigation;