import './Subheader.scss';
import React from 'react';
import SavedLocationContainer from '../SavedLocationContainer/SavedLocationContainer'
import SearchBar from '../SearchBar/SearchBar'

const Subheader = (savedCities) => {
  return (
    <section className='subheader'>
      <SavedLocationContainer savedCities={savedCities} />
      <SearchBar
      />
    </section>
  )
}

export default Subheader

