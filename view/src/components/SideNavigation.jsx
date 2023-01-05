import React from 'react';

//logo
//side navigation

function SideNavigation() {
     const year = new Date().getFullYear();
  return (
    <div className='sidebar'>
     <h1>Nannies</h1>

     
     <a href="#">Dashboard</a>
     <a href="#">Nannies</a>
     <a href="#">Applications</a>
     <a href="#">Requests</a>     
     <a href="#">Payments</a>     
     <a href="#">Notifications</a>


     <button>Logout</button>
     <span>&copy; {year} | Nannies Hub </span>
    </div>
  )
}

export default SideNavigation;