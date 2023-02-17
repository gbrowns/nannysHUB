import React, {useState} from 'react'
import { MdVerifiedUser } from 'react-icons/md'
import {useNavigate, useParams} from 'react-router-dom';
import { updateNanny } from '../utils/Helper';

function VerifyUserPage() {

  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const {nannyID} = useParams();

  if (!nannyID) console.log("provide nanny ID!");
  
  const VerifyUser = async () => {
    const res = await updateNanny(nannyID, {approved: true}) //verify nanny

    //console.log(res);
    if (res.status !== 200){
      console.log("Oops, an error occured in the server!");
      return;
    }

    setTimeout(() => {
      setVerified(true);
    }, 2000);
  }

  VerifyUser();
  //console.log(verified);




  return (
    <div className='VerifyUserPage'>
      {
        //console.log(verified)
        verified ? <VerifyStatus /> : <h1 className='VerifyUserPage__title'>Verifying your account...</h1>
      }
      
    </div>
  )
}

const VerifyStatus = () => {

  return (
    <>
      <MdVerifiedUser className='VerifyUserPage__icon' />
      <h1 className='VerifyUserPage__title'>Your account has been verified successfully!</h1>
      <p className='VerifyUserPage__text'> You are now a verified Nanny on this site and you wil be able to recieve job requests </p>
    </>
  )
}

export default VerifyUserPage