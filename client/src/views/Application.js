import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Application() {
  return (
    <div className="apply-page">
        <Navbar />
        <Banner title="Apply for Job" image={require('../images/nanny1.jpeg')} />
        <div className="apply-container">
            <h1>Apply for a nanny Job</h1>
            <p>
              To Apply for a nanny Job, please fill out the form below.
            </p>
            <form autoComplete="off">
                <div className="form-group">
                  <input type="text" placeholder="First Name" className="form-control" />
                  <input type="text" placeholder="Last Name" className="form-control" />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-control" />
                  <input type="text" placeholder="Phone Number" className="form-control" />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="City" className="form-control" />
                  <input type="text" placeholder="Estate" className="form-control" />
                </div>

                <div className="form-group">
                  <div className="inner-group">
                    <span>Your gender</span>
                    <div>
                      <label>Female</label>
                      <input type="radio" value="Female" name="female"/>
                      <label>Female</label>
                      <input type="radio" value="Male" name="male" />
                      <label>Female</label>
                      <input type="radio" value="other" name="other"/>
                    </div>
                  </div>
                  <input type="text" placeholder="Your age" className="form-control" />
                </div>

                <div className="form-group">
                   <select >
                      <option value="">Your employment status</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="employed">Employed</option>
                      <option value="self- employed">Self employed</option>
                      <option value="contract">Contract</option>
                      <option value="other">Other</option>
                  </select>
                  <input type="text" placeholder="Salary willing to take in Ksh" className="form-control" />
                </div>

                <div className="form-group">
                  <div className="inner-group">
                    <span>Type of job (you can select more than one)</span>
                   <div>
                      <label>Night nanny</label>
                      <input type="checkbox" value="night nanny" name="night-nanny"/>
                      <label>Part time</label>
                      <input type="checkbox" value="part time" name="part-time"/>
                      <label>Domestic</label>
                      <input type="checkbox" value="domestic" name="domestic"/>
                      <label>Childcare</label>
                      <input type="checkbox" value="childcare" name="childcare"/>
                      <label>Gardener</label>
                      <input type="checkbox" value="gardener" name="gardener"/>
                      <label>Homecleaner</label>
                      <input type="checkbox" value="homecleaner" name="homecleaner"/>

                    </div>
                  </div>
                  <select >
                    <option value="">When are you available for a job</option>
                    <option value="nanny">Nanny</option>
                    <option value="nanny">Nanny</option>
                    <option value="nanny">Nanny</option>
                    <option value="nanny">Nanny</option>
                  </select>
                </div>

                <div className="form-group">
                  <span>Type of Agreement (you can select more than one)</span>
                  <div>
                    <label>Live in</label>
                    <input type="checkbox" value="night nanny" name="night-nanny"/>
                    <label>Live out</label>
                    <input type="checkbox" value="part time" name="part-time"/>
                    <label>Contract</label>
                    <input type="checkbox" value="domestic" name="domestic"/>

                  </div>
                </div>

                <div className="form-group">
                  <textarea placeholder="Tell us about yourself" />
                </div>
                <input type="submit" value="Submit Details"  />

            </form>
        </div>
        <Footer />
    </div>
  )
}

export default Application