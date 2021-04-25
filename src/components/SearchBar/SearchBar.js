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

  searchBarSearch = (event) => {
    const formattedSearchWords = this.state.searchWords.toLowerCase();
    this.setState({ searchWords: formattedSearchWords })
    // if (!resultMovies.length) {
    //   this.props.stateChange('error', 'No movies found');
    //   this.props.stateChange('filteredMovies', []);
    // } else {
    //   this.props.stateChange('error', '');
    //   this.props.stateChange('filteredMovies', resultMovies);
    // }
  }

  clearInputs = event => {
    event.preventDefault(event);
    this.handleChange(event);
    this.setState({ searchWords: '' });
    // this.props.stateChange('filteredMovies', []);
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
            onChange={this.handleChange}
            onKeyUp={event => this.searchBarSearch(event)}
          />
          <button className='clear-button' onClick={event => this.clearInputs(event)}><img className='clear-icon' src={cancel} alt="clear button" /></button>
        </Link>
      </form >
    )
  }
}

export default SearchBar;