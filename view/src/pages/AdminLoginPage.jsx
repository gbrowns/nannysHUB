import React from 'react'
import bgLogin from '../../public/login-bg.png'

function AdminLoginPage() {
  return (
    <div className='Admin-Login'>
      <img src={bgLogin} alt="" />
      <div className='notify'>
            Alert message here
      </div>
      <form>
            <h1>Admin Login</h1>
            <p>
                  This is page is for Admin use only.
            </p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>

            <a href={'/forget-password'}>Forgot password</a>
      </form>

    </div>
  )
}

export default AdminLoginPage