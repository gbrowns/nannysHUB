import React, { useState } from 'react'
import bgLogin from '../assets/login-bg.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import { loginUser } from '../utils/Helper';


function AdminLoginPage() {

      const [token, setToken] = useToken()
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const navigate = useNavigate();

      const handleAdminLogin = async (e) => {
            e.preventDefault();

            if (!(email && password)) {
                  setError('Please enter all fields');
                  return;
            }

            const data = { email, password };

            const { accessToken, status } = await loginUser(data)

            if (status !== 200) {
                  setError('Oops, some error occured!!')
                  return;
            }

            //navgate to admin dashboard 
            if (accessToken) {
                  setToken(accessToken)
                  navigate('/admin/dashboard');
            }

      }

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            if (name === 'email') {
                  setEmail(value);
                  setError("");
            }
            if (name === 'password') {
                  setPassword(value);
                  setError("");
            }
      }

      return (
            <div className='Admin-Login'>
                  <img src={bgLogin} alt="" />

                  {
                        error && <div className='notify'>{error}</div>
                  }
                  <form onSubmit={handleAdminLogin}>
                        <h1>Admin Login</h1>
                        <p>
                              This is page is for Admin use only.
                        </p>
                        <input
                              type="email"
                              placeholder="Email"
                              name='email'
                              value={email}
                              onChange={handleInputChange}
                        />
                        <input
                              type="password"
                              placeholder="Password"
                              name='password'
                              value={password}
                              onChange={handleInputChange}

                        />
                        <button>Sign In</button>

                        <a href={'/forget-password'}>Forgot password</a>
                  </form>

            </div>
      )
}

export default AdminLoginPage