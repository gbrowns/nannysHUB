import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';

function ApplyPage() {
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [coords, setCoords] = useState(null); //location coords
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [empStatus, setEmpStatus] = useState(null);
  const [salary, setSalary] = useState(null);
  const [jobOptions, setJobOptions] = useState([]);
  const [availability, setAvailability] = useState(null);
  const [agreementOptions, setAgreementOptions] = useState([]);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [toggle, setToggle] = useState(false);

  //get location coordinated from browser
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      //console.log(latitude, longitude);
      setCoords({ latitude, longitude });
      //axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=
      //${process.env.REACT_APP_WEATHER_API_KEY}`)
    });
  }, [coords]);

  const handleOnChangeEvent1 = (e) => {
    const {value, checked} = e.target;

    if (checked) {
      //user selected a job
      setJobOptions([...jobOptions, value]);
    }else {
      //user unchecks the box
      setJobOptions(jobOptions.filter((option) => option !== value));
    }
  }

  const handleOnChangeEvent2 = (e) => {
    const {value, checked} = e.target;

    if (checked) {
      setAgreementOptions([...agreementOptions, value]);
    }else {
      //user unchecks the box
      setAgreementOptions(agreementOptions.filter((option) => option !== value));
    }
  }

  //post data to DB
  const handleSubmit = (e) => { 
    e.preventDefault();
    

    //validate inputs
    if ( !firstname || !lastname || !email || !phone || !address || !coords || !gender || !age || !empStatus || !salary || !jobOptions || !availability || !agreementOptions || !message) {
      setError('Please fill in all fields');
    }
    //nanny object
    const nannyData = {
      firstname, lastname, email,
      phone, address, coords, gender,
      age, empStatus, salary, jobOptions,
      availability, agreementOptions, message
    }

    //console.log(nannyData);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(nannyData),
      url: 'http://localhost:8000/api/nannies/apply'
    }

    //post request
    axios(options)
    .then((res) => {
      //if response is successful, show success message

      if (res.status === 201) {
        setError("Application submitted successfully");
        console.log(res.data)
      } else {
        setError("Application failed to submit");
      }
    })
    .catch((err) => {
      //setError(err.message)
      console.log(err)
    });
  }

  //handle toggle of the sections
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  }

  return (
    <div className="ApplyPage">
        <Navbar />
        <div className="ApplyPage__content">
            <h1>Apply to become a Nanny</h1>
            <p>
              To Apply for a nanny Job, please fill out the form below.
            </p>
            {
              error && <span>{error}</span>
            }
            <form autoComplete="off" onSubmit={handleSubmit}>
              <h3 onClick={handleToggle}>Personal info</h3>
              {
                !toggle && <PersonalData />
              }
              <h3 onClick={handleToggle}>Work info</h3>
              {
                toggle && <WorkData />
              }
                
              <input type="submit" value="Submit "  />

            </form>
        </div>
        <Footer />
    </div>
  )
}



const PersonalData = ({firstname, lastname, phone, email, gender, age}) => {

  const handleInputChange = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          placeholder="First name"
          name='firstname'
          onChange={handleInputChange}
          value={firstname}
       />
        <input
          type="text"
          placeholder="Last Name" 
          name='lastname'
          onChange={handleInputChange}
          value={lastname}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Your email address" 
          name='email'
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="text"
          placeholder="Phone Number" 
          name='phone'
          onChange={handleInputChange}
          value={phone}
        />
      </div>

      <div className="form-group">
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Age" 
          name='age'
          onChange={handleInputChange}
          value={age}
        />
      </div>
       
    </>
  )
}


const WorkData = ({address,empStatus,salary, availability, message}) => {

  const handleOnChangeEvent2 = (e) => {
    e.preventDefault();
  }

  const handleOnChangeEvent1 = (e) => {
    e.preventDefault();
  } 

  const handleInputChange = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          placeholder="Estate or street" 
          className="form-control"
          onChange={handleInputChange}
          value={address}
        />
        
        <select value={availability} onChange={handleInputChange} >
          <option value="">When are you available for a job</option>
          <option value="imediately">Imediately</option>
          <option value="Every weekend">Every weekends</option>
          <option value="Every 2 weeks">Every 2 weeks</option>
          <option value="fully available">fully available</option>
        </select>
      </div>

      <div className="form-group">
        <select value={empStatus} onChange={handleInputChange}>
          <option value="">Your employment status</option>
          <option value="unemployed">Unemployed</option>
          <option value="employed">Employed</option>
          <option value="self- employed">Self employed</option>
          <option value="contract">Contract</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Salary willing to taken  (Ksh.)" 
          className="form-control"
          onChange={handleInputChange}
          value={salary}
        />
      </div>

      <div className="form-group">
        <div className="inner-group">
          <span>Type of job (you can select more than one)</span>
          <div>
            <label>Night nanny</label>
            <input 
              type="checkbox" 
              value="Maiden" 
              name="job option"
              onChange={handleOnChangeEvent1}
            />
            <label>Part time</label>
            <input
              type="checkbox" 
              value="Messenger" 
              name="job option"
              onChange={handleOnChangeEvent1}
            />
            <label>Domestic</label>
            <input
              type="checkbox" 
              value="domestic"
              name="job option"
              onChange={handleOnChangeEvent1}
            />
            <label>Childcare</label>
            <input 
              type="checkbox" 
              value="child care" 
              name="job option"
              onChange={handleOnChangeEvent1}
            />
            <label>Gardener</label>
            <input
              type="checkbox"
              value="gardener" 
              name="job option"
              onChange={handleOnChangeEvent1}
            />
            <label>Homecleaner</label>
            <input 
              type="checkbox" 
              value="home cleaner" 
              name="job option"
              onChange={handleOnChangeEvent1}
            />

          </div>
        </div>

        <div className="inner-group">
          <span>Type of Agreement (you can select more than one)</span>
          <div>
            <label>Live in</label>
            <input 
              type="checkbox" 
              value="night nanny"
              name="agreement option"
              onChange={handleOnChangeEvent2}
            />
            <label>Live out</label>
            <input 
              type="checkbox" 
              value="part time" 
              name="agreement option"
              onChange={handleOnChangeEvent2}
            />
            <label>Contract</label>
            <input 
              type="checkbox" 
              value="domestic" 
              name="agreement option"
              onChange={handleOnChangeEvent2}
            />

          </div>
        </div>
        
      </div>

      <div className="form-group">
        
      </div>

      <div className="form-group">
        <textarea
          onChange={handleInputChange}
          value={message}
          placeholder="Tell us about yourself"
        />
      </div>
    </>
  )
}

export default ApplyPage;