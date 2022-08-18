import React from 'react'

function Banner({title, image}) {
  return (
    <div className='page-banner'>
        <img src={image} alt="banner-image" width="100px"/>
        <div className="overlay"></div>
        <h1>{title}</h1>
    </div>
  )
}

export default Banner