import { useState } from 'react'
import './App.scss'
import SideNavigation from './components/SideNavigation'
import AdminDashboard from './pages/AdminDashboard'

function App() {

  return (
    <div className="App">
      <SideNavigation />
      <AdminDashboard />
       
    </div>
  )
}

export default App
