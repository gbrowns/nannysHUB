import React from 'react'
import errorImg from '../assets/error.png'
import {useNavigate} from 'react-router-dom'

function ErrorPage() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/auth/login');
  }
  return (
    <div className="Errorpage">
      <img src={errorImg} alt="error" />
      <h1>Oops! An error Occured</h1>
      <p>
        The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
      </p>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}

export default ErrorPage