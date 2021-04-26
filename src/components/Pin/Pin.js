import './Pin.scss';
import React from 'react';
import pin from '../../assets/pin.svg'

const Pin = ({ name, id, unpinLocation }) => {
  return (
    <section className='pin-container'>
      <button className='pin-button' onClick={() => unpinLocation(id)}>
        <img src={pin} alt='red pin' className='red-pin' />
      </button>
      <p>{name}</p>
    </section>
  )
}

export default Pin;

