import './Pin.scss';
import React from 'react';
import pin from '../../assets/pin.svg'

const Pin = ({ name, id, removeLocation }) => {
  return (
    <section className='pin-container'>
      <button className='pin-button' onClick={() => removeLocation(id)}>
        <img src={pin} alt='red pin' className='red-pin' />
      </button>
      <p>{name}</p>
    </section>
  )
}

export default Pin;

