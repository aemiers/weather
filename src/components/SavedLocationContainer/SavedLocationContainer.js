import './SavedLocationContainer.scss';
import React from 'react';
import Pin from '../Pin/Pin';
import PropTypes from 'prop-types';


const SavedLocationContainer = ({ savedCities, unpinLocation, stateChange }) => {
  const allSavedCities = savedCities.map(city => {
    return (
      <Pin
        name={city.title}
        id={city.title}
        unpinLocation={unpinLocation}
        stateChange={stateChange}
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

SavedLocationContainer.propTypes = {
  savedCities: PropTypes.array,
}