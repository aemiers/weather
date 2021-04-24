import './Pin.scss';
import React from 'react';
import pin from '../../assets/pin.svg'

const Pin = () => {
  return (
    <img src={pin} alt='red pin' className='red-pin' />
    // name={city.title}
  )
}

export default Pin;