import React from 'react'
import {useNavigate} from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className="error-page">
        <h1>Error 404</h1>
        <p>Page not found!</p>
        <button onClick={() => navigate('/')}>Go back to home</button>
    </div>
  )
}

export default Error