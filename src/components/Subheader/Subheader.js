import './Subheader.scss';
import React from 'react';
import SavedLocationContainer from '../SavedLocationContainer/SavedLocationContainer'
import SearchBar from '../SearchBar/SearchBar'

const Subheader = ({ savedCities, stateChange, unpinLocation }) => {

  return (
    <section className='subheader'>
      <SavedLocationContainer
        savedCities={savedCities}
        unpinLocation={unpinLocation}
        stateChange={stateChange}
      />
      <SearchBar stateChange={stateChange} />
    </section>
  )
}

export default Subheader

