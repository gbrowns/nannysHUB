import { useState } from 'react'
import './App.scss'
import SideNavigation from './components/SideNavigation'
import AdminDashboard from './pages/AdminDashboard'
import ApplicationDash from './pages/ApplicationDash'
import NannyDash from './pages/NannyDash'
import NotificationDash from './pages/NotificationDash'
import PaymentsDash from './pages/PaymentsDash'
import RequestsDash from './pages/RequestsDash'
import ErrorPage from './pages/ErrorPage'

import {Routes, Route} from 'react-router-dom';

function App() {
  /**
   * TODO
   * perfoming routing of admin pages
   */

  return (
    <div className="App">
      <SideNavigation />
      
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/nanny-board" element={<NannyDash />} />
        <Route path="/applications" element={<ApplicationDash />} />
        <Route path="/requests" element={<RequestsDash />} />
        <Route path="/payments" element={<PaymentsDash />} />
        <Route path="/notifications" element={<NotificationDash />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {
        //
        //<NotificationDash />
        //<PaymentsDash />
        //<RequestsDash />
        //
      }
       
    </div>
  )
}

export default App
