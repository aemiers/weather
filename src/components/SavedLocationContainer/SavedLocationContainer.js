import './SavedLocationContainer.scss';
import React from 'react';
import Pin from '../Pin/Pin'

const SavedLocationContainer = ({ savedCities }) => {
  const allSavedCities = savedCities.savedCities.map(city => {
    return (
      <Pin
        name={city.title}
      />
    )
  })

  return (
    <section className='pinned-cities-container'>
      {allSavedCities}
    </section>
  )
}

export default SavedLocationContainer