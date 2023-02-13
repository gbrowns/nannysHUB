import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';

import { submitFormApplication } from '../utils/Helper';

function ApplyPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({}); //location coords
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [empStatus, setEmpStatus] = useState("");
  const [salary, setSalary] = useState("");
  const [jobOptions, setJobOptions] = useState([]);
  const [availability, setAvailability] = useState("");
  const [agreementOptions, setAgreementOptions] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [toggle, setToggle] = useState(false);

  //get location coordinated from browser
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {

      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });
    });
  }, [coords]);


  const handleOnChangeEvent = (e) => {
    const { name, value, checked } = e.target;

    switch (name) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "age":
        setAge(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "salary":
        setSalary(value);
        break;
      case "message":
        setMessage(value);
        break;
      case "empStatus":
        setEmpStatus(value);
        break;
      case "availability":
        setAvailability(value);
        break;
      default:
        break;

    }

    // array job Options
    if (name === "jobOptions"){
      if (checked) {
        //user selected a job
        setJobOptions([...jobOptions, value]);
      } else {
        //user unchecks the box
        setJobOptions(jobOptions.filter((option) => option !== value));
      }
    }

    // array of agreementOptions
    if (name === "agreementOptions"){
      if (checked) {
        setAgreementOptions([...agreementOptions, value]);
      } else {
        //user unchecks the box
        setAgreementOptions(agreementOptions.filter((option) => option !== value));
      }
    }

    //always clear error message
    setError("");

  }

  //post application data to DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    //validate inputs
    if (!firstname || !lastname || !email || !phone || !address || !coords || !gender || !age || !empStatus || !salary || !jobOptions || !availability || !agreementOptions || !message) {
      setError('Please fill in all fields');
    }
    //nanny object
    const nannyData = {
      firstname, lastname, email,
      phone, address, coords, gender,
      age, empStatus, salary, jobOptions,
      availability, agreementOptions, message
    }

    console.log(nannyData);

    //submit order for nanny
    const res = await submitFormApplication(nannyData);

    //console.log(res);
    if (res.status !== 201){
      setError("Oops, an error occured in the server!");
      return;
    }

    setError("Application submited!!")
    //clear inputs
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCoords({});
    setGender("");
    setAge("");
    setEmpStatus("");
    setSalary("");
    setJobOptions([]);
    setAvailability("");
    setAgreementOptions([]);
    setMessage("");
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
          <PersonalData
            firstname={firstname}
            lastname={lastname}
            phone={phone}
            email={email}
            gender={gender}
            age={age}
            handleInputChange={handleOnChangeEvent}
          />

          <h3 onClick={handleToggle}>Work info</h3>
          <WorkData
            empStatus={empStatus}
            salary={salary}
            jobOptions={jobOptions}
            availability={availability}
            agreementOptions={agreementOptions}
            message={message}
            handleInputChange={handleOnChangeEvent}
    
          />

          <input type="submit" value="Submit " />

        </form>
      </div>
      <Footer />
    </div>
  )
}



const PersonalData = ({ firstname, lastname, phone, email, gender, age, handleInputChange }) => {


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
        <select name="gender" value={gender} onChange={handleInputChange}>
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


const WorkData = ({ address, empStatus, salary, availability, message, handleInputChange }) => {

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          placeholder="Estate or street"
          className="form-control"
          onChange={handleInputChange}
          name='address'
          value={address}
        />

        <select name="availability" value={availability} onChange={handleInputChange} >
          <option value="">When are you available for a job</option>
          <option value="Imediately">Imediately</option>
          <option value="Every Weekend">Every weekends</option>
          <option value="Every 2 Weeks">Every 2 weeks</option>
          <option value="Fully available">fully available</option>
        </select>
      </div>

      <div className="form-group">
        <select name="empStatus" value={empStatus} onChange={handleInputChange}>
          <option value="">Your employment status</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Employed">Employed</option>
          <option value="Self Employed">Self employed</option>
          <option value="Contract">Contract</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Salary willing to taken  (Ksh.)"
          className="form-control"
          onChange={handleInputChange}
          name='salary'
          value={salary}
        />
      </div>

      <div className="form-group">
        <div className="inner-group">
          <span>Type of job (you can select more than one)</span>
          <div>
            <label>Maiden</label>
            <input
              type="checkbox"
              value="Maiden"
              name="jobOptions"
              onChange={handleInputChange}
            />
            <label>Messenger</label>
            <input
              type="checkbox"
              value="Messenger"
              name="jobOptions"
              onChange={handleInputChange}
            />
            <label>Domestic</label>
            <input
              type="checkbox"
              value="Domestic worker"
              name="jobOptions"
              onChange={handleInputChange}
            />
            <label>Childcare</label>
            <input
              type="checkbox"
              value="Child care"
              name="jobOptions"
              onChange={handleInputChange}
            />
            <label>Gardener</label>
            <input
              type="checkbox"
              value="Gardener"
              name="jobOptions"
              onChange={handleInputChange}
            />
            <label>House cleaner</label>
            <input
              type="checkbox"
              value="House cleaner"
              name="jobOptions"
              onChange={handleInputChange}
            />

          </div>
        </div>

        <div className="inner-group">
          <span>Type of Agreement (you can select more than one)</span>
          <div>
            <label>Live in</label>
            <input
              type="checkbox"
              value="Live in"
              name="agreementOptions"
              onChange={handleInputChange}
            />
            <label>Live out</label>
            <input
              type="checkbox"
              value="Live out"
              name="agreementOptions"
              onChange={handleInputChange}
            />
            <label>Contract</label>
            <input
              type="checkbox"
              value="Contract"
              name="agreementOptions"
              onChange={handleInputChange}
            />

          </div>
        </div>

      </div>

      <div className="form-group">
        <textarea
          onChange={handleInputChange}
          value={message}
          name="message"
          placeholder="Tell us about yourself"
        />
      </div>
    </>
  )
}

export default ApplyPage;