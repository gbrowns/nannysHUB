import React from 'react';
import { Link } from 'react-router-dom'

//logo
//side navigation

function SideNavigation() {
     const year = new Date().getFullYear();
  return (
    <div className='sidebar'>
     <h1>Nannies</h1>

     <Link to='/'>Dashboard</Link>
     <Link to='/nanny-board'>Nannies</Link>
     <Link to='/applications'>Applications</Link>
     <Link to='/requests'>Requests</Link>
     <Link to='/payments'>Payments</Link>
     <Link to='/notifications'>Notifiactions</Link>

     <button>Logout</button>
     <span>&copy; {year} | Nannies Hub </span>
    </div>
  )
}

export default SideNavigation;