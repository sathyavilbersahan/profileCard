import React from 'react'
import profilepic from './assets/img.jpg'

const Card = () => {
  return (
    <div className='card-style'>
      <img className='card-container'  src={profilepic} alt='profilecard'  width={250}/>
      <h2 className='card-title'>ELLYSE PERRY</h2>
      <p className='card-text'>"One is never over-dressed or under-dressed with a Little Black Dress."</p>
    </div>
  )
}

export default Card
