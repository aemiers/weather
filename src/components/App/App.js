import './App.scss'
import { fetchCityId, fetchWeatherById } from '../../data/apiCalls'
import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import DailyForecast from '../DailyForecast/DailyForecast'

import Subheader from '../Subheader/Subheader'
import fakeCityId from '../../data/fakeCityId'
import fakeWeatherData from '../../data/fakeWeatherData'
import { Route, Switch } from 'react-router';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // cityData: [fakeCityId],
      // weatherData: { fakeWeatherData },
      cityData: [],
      weatherData: {},
      savedCities: [fakeCityId, fakeCityId, fakeCityId],
      error: ''
    }
  }

  componentDidMount() {
    fetchCityId('Denver')
      .then((fetchedCityData) => {
        this.setState({ cityData: fetchedCityData })
      })
      .catch(error => this.setState({ error: 'There was a loading error. Please reload the page and try again.' }))

    fetchWeatherById('2391279')
      .then((fetchedWeatherData) => {
        this.setState({ weatherData: this.cleanWeatherData(fetchedWeatherData) })
      })
      .catch(error => this.setState({ error: 'There was a loading error. Please reload the page and try again.' }))
  }

  cleanWeatherData(weatherData) {
    const cleanWeatherData = Object.keys(weatherData)
    return {
      weatherForecast: weatherData.consolidated_weather,
      cityName: weatherData.title,
      latLong: weatherData.latt_long
    }
    return cleanWeatherData;
  }

  renderComponent = () => {
    if (this.state.weatherData) {
      return (
        <DailyForecast
          cityData={this.state.cityData}
          weatherData={this.state.weatherData} />
      )
    }
  }

  render() {
    return (
      <main className='app'>
        <Nav />
        <Subheader savedCities={this.state.savedCities} />
        {!!this.state.error &&
          <h2 className='error-feedback'>{this.state.error}</h2>
        }
        <section className='main-page'>
          <Switch>
            <Route
              exact path='/'
              render={this.renderComponent}
            />

            {/* <Route
              exact path='/5day'
              render={() => {
                return <WeeklyForecast />
              }
              }
            /> */}
          </Switch>
        </section>
      </main>
    )
  }
}

export default App;