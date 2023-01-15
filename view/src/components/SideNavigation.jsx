import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

//logo
//side navigation
function SideNavigation() {
<<<<<<< HEAD
    const year = new Date().getFullYear();
=======
  const year = new Date().getFullYear();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth/login');
  }

>>>>>>> d6271fd50118b93dcf257383e90c6c93788a7531
  return (
    <div className='sidebar'>
     <h1>Nannies</h1>

     <Link to='/admin/dashboard'>Dashboard</Link>
     <Link to='/admin/nanny-board'>Nannies</Link>
     <Link to='/admin/applications'>Applications</Link>
     <Link to='/admin/requests'>Requests</Link>
     <Link to='/admin/payments'>Payments</Link>

     <button onClick={handleLogout}>Logout</button>
     <span>&copy; {year} | Nannies Hub </span>
    </div>
  )
}

export default SideNavigation;