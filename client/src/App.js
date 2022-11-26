import './scss/App.scss';
import Admin from './views/Admin';
import Home from './views/Home';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
//import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import FindNanny from './views/FindNanny';
import Application from './views/Application';
import NannyDetails from './views/NannyDetails';
import Error from './views/Error';
import Payment from './views/Payment';
import SuccessPayment from './views/SuccessPayment';
import {useLocation} from 'react-router-dom';

function App() {

  const {pathname} = useLocation();
  console.log(pathname);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="find-a-nanny" element={<FindNanny />}/>
        <Route path="find-a-nanny/details/:nannyId" element={<NannyDetails />} />
        <Route path="apply-for-job" element={<Application />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="mpesa/pay/:nannyID" element={<Payment />} />
        <Route path="payment-success" element={<SuccessPayment />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
