import logo from './logo.svg';
import './scss/App.scss';
import Admin from './views/Admin';
import Home from './views/Home';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="admin" element={<Admin />}/>
        <Route path="login" element={<AdminLogin />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
