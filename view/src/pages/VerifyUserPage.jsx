import React from 'react'
import { MdVerifiedUser } from 'react-icons/md'

function VerifyUserPage() {
  return (
    <div className='VerifyUserPage'>
      <MdVerifiedUser className='VerifyUserPage__icon' />
      <h1 className='VerifyUserPage__title'>Your account has been verified successfully!</h1>
      <p className='VerifyUserPage__text'> You are now a verified Nanny on this site and you wil be able to recieve job requests </p>
    </div>
  )
}

export default VerifyUserPage