import './Pin.scss';
import React from 'react';
import pin from '../../assets/pin.svg'

const Pin = ({ name }) => {
  return (
    <section>
      <img src={pin} alt='red pin' className='red-pin' />
      <p>{name}</p>
    </section>
  )
}

export default Pin;

