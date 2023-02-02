import React from 'react'

function SendEmailDialog() {


      const handleFormInputChange = (e) => {
            e.preventDefault();
      }

  return (
    <div className='emailDialog'>
      <span>Close</span>
      <form>
            <div className='form-group'>
                  <label>Email</label>
                  <input 
                        type="email"
                        onChange={handleFormInputChange}
                        value={"john@gmail.com"}
                  />
            </div>
            <div className='form-group'>
                  <label>Subject</label>
                  <input 
                        type="text"
                        onChange={handleFormInputChange}
                        value={"john@gmail.com"}
                  />
            </div>
            <div className='form-group'>
                  <label>Message</label>
                  
                  <textarea 
                        name="message" 
                        icols="30" 
                        rows="10"
                        onChange={handleFormInputChange}
                        value={"some text here"}
                  >
                  </textarea>
            </div>

            <input type="submit" value={"Send Email"}/>
      </form>

    </div>
  )
}

export default SendEmailDialog