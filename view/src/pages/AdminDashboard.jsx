import React from 'react'
import SideNavigation from '../components/SideNavigation'

function AdminDashboard() {
  return (
    <>
      <SideNavigation />
      <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="dashboard_content">
          <div className='card'>
            <h3>Nannies Hub Kenya</h3>
          </div>
          <div className='card'>
            <span>Icon</span>
            <h4>Applications</h4>
            <h1>{25}</h1>
          </div>
          <div className='card'>
            <span>Icon</span>
            <h4>Nannies</h4>
            <h1>{25}</h1>
          </div>
          <div className='card'>
            <span>Icon</span>
            <h4>Requests</h4>
            <h1>{25}</h1>
          </div>
          <div className='card'>
            <span>Icon</span>
            <h4>Payments</h4>
            <h1>{25}</h1>
          </div>

        </div>

      </div>
    </>
  )
}

export default AdminDashboard