import './Subheader.scss';
import React from 'react';
import SavedLocationContainer from '../SavedLocationContainer/SavedLocationContainer';
import SearchBar from '../SearchBar/SearchBar';
import PropTypes from 'prop-types';

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

Subheader.propTypes = {
  savedCities: PropTypes.array,
}


