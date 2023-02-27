import React from 'react'
import SideNavigation from '../components/SideNavigation'
import { filterUnapprovedNannyData, getNannyData, filterApprovedNannyData, getPaymentData, getOrdersData } from '../utils/Helper'

function AdminDashboard() {

  const {unapprovedNanniesCount} = filterUnapprovedNannyData(getNannyData());
  const {approvedNanniesCount} = filterApprovedNannyData(getNannyData());
  const payments = getPaymentData()
  const request = getOrdersData()
  console.log(request);
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
            <h1>{unapprovedNanniesCount}</h1>
          </div>
          <div className='card'>
            <span>Icon</span>
            <h4>Nannies</h4>
            <h1>{approvedNanniesCount}</h1>
          </div>
          <div className='card'>
            <span>Icon</span>
            <h4>Requests</h4>
            <h1>{0}</h1>
          </div>
          <div className='card'>
            <span>Icon</span>
            <h4>Payments</h4>
            <h1>{0}</h1>
          </div>

        </div>

      </div>
    </>
  )
}

export default AdminDashboard