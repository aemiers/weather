import './Subheader.scss';
import React from 'react';
import SavedLocationContainer from '../SavedLocationContainer/SavedLocationContainer'
import SearchBar from '../SearchBar/SearchBar'


const Subheader = () => {
  return (
    <section>
      <SavedLocationContainer
      />
      <SearchBar
      />
    </section>
  )
}

export default Subheader

