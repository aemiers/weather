import './SearchBar.scss';
import React, { Component } from 'react';
import search from '../../assets/search.svg';
import cancel from '../../assets/cancel.svg';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWords: '',
    }
  }

  handleChange = event => {
    this.setState({ searchWords: event.target.value });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchBarSearch(event);
    }
  }

  searchBarSearch = (event) => {
    // event.preventDefault(event);
    if (!this.state.searchWords) {
      return
    } else {
      const finalSearchWords = this.state.searchWords;
      this.props.stateChange('currentCity', finalSearchWords);
    }
  }

  clearInputs = event => {
    event.preventDefault(event);
    this.handleChange(event);
    this.setState({ searchWords: '' });
  }

  render() {
    return (
      <form>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <img className='search-icon' src={search} alt="search icon" />
          <input
            type='text'
            placeholder='Search by City'
            name='search'
            value={this.state.searchWords}
            onKeyPress={event => this.handleKeyPress(event)}
            onChange={this.handleChange}
          // onKeyPress={this.handleKeyPress}

          />
          <button className='clear-button' onClick={event => this.clearInputs(event)}><img className='clear-icon' src={cancel} alt="clear button" /></button>
        </Link>
      </form >
    )
  }
}

export default SearchBar;