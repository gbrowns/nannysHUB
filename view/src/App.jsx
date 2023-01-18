import { useState } from 'react'
import './App.scss'
import SideNavigation from './components/SideNavigation'
import AdminDashboard from './pages/AdminDashboard'
import ApplicationDash from './pages/ApplicationDash'
import NannyDash from './pages/NannyDash'
import PaymentsDash from './pages/PaymentsDash'
import RequestsDash from './pages/RequestsDash'
import ErrorPage from './pages/ErrorPage'

//import HomePage from './pages/HomePage'
import PaymentPage from './pages/PaymentPage';

import {Routes, Route, Navigate} from 'react-router-dom';
import AdminLoginPage from './pages/AdminLoginPage'
import { AdminProtectedRoutes } from './auth/AdminProtectedRoutes'

function App() {
  /**
   * TODO
   * perfoming routing of admin pages
   */

  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<PaymentPage  />} />
        <Route path="/auth/login" element={<AdminLoginPage />} />  

        <Route path='/admin' element={<AdminProtectedRoutes />} >
          <Route path="/admin" element={<Navigate replace to='dashboard' />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path="/admin/nanny-board" element={<NannyDash />} />
          <Route path="/admin/applications" element={<ApplicationDash />} />
          <Route path="/admin/requests" element={<RequestsDash />} />
          <Route path="/admin/payments" element={<PaymentsDash />} />
        </Route>

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
