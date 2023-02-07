import React from 'react'
import {Link} from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

import Logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(true)

  //handle the state of the navbar
  const handleToggle = () => setIsOpen(!isOpen)


  return (
    <nav>
      <div className="logo">
        {/*<img src={Logo} alt="logo" width="150px" />*/}
        <h1>NannyHub.</h1>
      </div>
      {
        isOpen && <Links />
      }
      <div className="menu">
        <BiMenuAltRight className="icon" onClick={handleToggle} style={{display: isOpen ? "block" : "none"}}/>
        <GrFormClose className="icon" style={{ display: isOpen ? "none" : "block" }} onClick={handleToggle}   />
      </div>

    </nav>
  )
}

const Links = () => { 
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/find-a-nanny">Find a nanny</Link>
      <Link to="/apply">Apply for job</Link>
    </div>
  )
}

export default Navbar