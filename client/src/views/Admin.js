import React from 'react';

import {useNavigate} from 'react-router-dom';

//admin view
function Admin() {
    const navigate = useNavigate();
    //const {login} = useParams();

    const handleClick = (e) => {
      e.preventDefault();
      navigate('/admin/login');
    }

  return (
    <div className="admin-view">
      <h2>Admin Page</h2>
      <button onClick={handleClick}>Navigate to Dashboard</button>
    </div>
  )
}

export default Admin