import './App.scss'
import { fetchCityId, fetchWeatherById } from '../../data/apiCalls'
import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import DailyForecast from '../DailyForecast/DailyForecast';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import Subheader from '../Subheader/Subheader'
import london from '../../data/fakeCityId'
import { Route, Switch } from 'react-router';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentCity: 'Washington',
      cityData: {},
      weatherData: {},
      savedCities: [london],
      error: ''
    }
  }

  componentDidMount() {
    this.getData();
  }

  // componentDidUpdate(prevState) {
  //   if (this.state.currentCity !== prevState.currentCity) {
  //     this.getData();
  //   }
  // }

  getData() {
    fetchCityId(this.state.currentCity)
      .then((fetchedCityData) => {
        this.setState({ cityData: fetchedCityData })
        this.getWeatherById(fetchedCityData[0].woeid)
      })
      .catch(error => this.setState({ error: 'There was a loading error. Please reload the page and try again.' }))
  }

  getWeatherById(id) {
    fetchWeatherById(id)
      .then((fetchedWeatherData) => {
        this.setState({ weatherData: this.organizeWeatherData(fetchedWeatherData) })
      })
  }

  organizeWeatherData(weatherData) {
    Object.keys(weatherData)
    return {
      weatherForecast: weatherData.consolidated_weather,
      cityName: weatherData.title,
      latLong: weatherData.latt_long,
    }
  }

  stateChange = (dataLocation, newStateData) => {
    this.setState({ [dataLocation]: newStateData })
  }

  deleteFromPinned = (id) => {
    let pinnedCities = this.state.savedCities
    pinnedCities.city(id)
  }

  pinLocation = () => {
    let currentlySavedLocations = this.state.savedCities;
    if (!this.state.savedCities.includes(this.state.cityData[0])) {
      currentlySavedLocations.push(this.state.cityData[0]);
      console.log(currentlySavedLocations)
      this.setState({ savedCities: currentlySavedLocations })
    }
  }

  unpinLocation = (id) => {
    let currentlySavedLocations = this.state.savedCities;
    let foundCity = currentlySavedLocations.find(city => {
      return city.title === id
    })
    console.log(foundCity)
    // if (response.ok) {
    //   const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    //   this.setState({ ideas: filteredIdeas, error: '' });
    // } else {
    //   this.setState({ error: `There was a problem deleting that idea!` })
    // }
  }


  render() {
    return (
      <main className='app'>
        <Nav />
        <Subheader
          savedCities={this.state.savedCities}
          stateChange={this.stateChange}
          removeLocation={this.unpinLocation}
        />
        <section className='main-page'>
          {!!this.state.error &&
            <h2 className='error-feedback'>{this.state.error}</h2>
          }

          {!this.state.error && !this.state.weatherData.weatherForecast &&
            <h2 className='loading'>Loading</h2>
          }

          <Switch>
            <Route
              exact path='/'
              render={() => {
                return < DailyForecast
                  weatherData={this.state.weatherData}
                  pinLocation={this.pinLocation}
                />
              }
              }
            />

            <Route
              exact path='/5day'
              render={() => {
                return < WeeklyForecast
                  weatherData={this.state.weatherData}
                  pinLocation={this.pinLocation}
                />
              }
              }
            />
          </Switch>
        </section>
      </main>
    )
  }
}

export default App;