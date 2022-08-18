import './scss/App.scss';
import Admin from './views/Admin';
import Home from './views/Home';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import FindNanny from './views/FindNanny';
import Application from './views/Application';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="admin" element={<Admin />}/>
        <Route path="login" element={<AdminLogin />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="find-a-nanny" element={<FindNanny />} />
        <Route path="apply-for-job" element={<Application />} />
      </Routes>
    </div>
  );
}

export default App;
