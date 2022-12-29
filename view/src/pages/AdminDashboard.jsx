import React from 'react'

function AdminDashboard() {
  return (
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
          <h4>Requests</h4>
          <h1>{25}</h1>
        </div>
        <div className='card'>
          <span>Icon</span>
          <h4>Nannies</h4>
          <h1>{25}</h1>
        </div>
        <div className='card'>
          <span>Icon</span>
          <h4>Nannies</h4>
          <h1>{25}</h1>
        </div>

      </div>

    </div>
  )
}

export default AdminDashboard