import './SavedLocationContainer.scss';
import React from 'react';
import Pin from '../Pin/Pin'

const SavedLocationContainer = ({ savedCities, removeLocation }) => {
  const allSavedCities = savedCities.map(city => {
    return (
      <Pin
        name={city.title}
        id={city.title}
        removeLocation={removeLocation}
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