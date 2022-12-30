import { useState } from 'react'
import './App.scss'
import SideNavigation from './components/SideNavigation'
import AdminDashboard from './pages/AdminDashboard'
import NotificationDash from './pages/NotificationDash'
import PaymentsDash from './pages/PaymentsDash'
import RequestsDash from './pages/RequestsDash'

function App() {

  return (
    <div className="App">
      <SideNavigation />
      <RequestsDash />

      {
        //<AdminDashboard />
        //<NotificationDash />
        //<PaymentsDash />
      }
       
    </div>
  )
}

export default App
