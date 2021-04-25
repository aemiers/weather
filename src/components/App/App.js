import './App.scss'
import { fetchCityId, fetchWeatherById } from '../../data/apiCalls'
import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import DailyForecast from '../DailyForecast/DailyForecast';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import Subheader from '../Subheader/Subheader'
import fakeCityId from '../../data/fakeCityId'
import { Route, Switch } from 'react-router';

class App extends Component {
  constructor() {
    super()
    this.state = {
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
        this.setState({ weatherData: this.organizeWeatherData(fetchedWeatherData) })
      })
      .catch(error => this.setState({ error: 'There was a loading error. Please reload the page and try again.' }))
  }

  organizeWeatherData(weatherData) {
    Object.keys(weatherData)
    return {
      weatherForecast: weatherData.consolidated_weather,
      cityName: weatherData.title,
      latLong: weatherData.latt_long,
    }
  }

  // renderComponent = () => {
  //   if (this.state.weatherData) {
  //     return (
  //       <DailyForecast
  //         weatherData={this.state.weatherData} />
  //       // <WeeklyForecast
  //       //   weatherData={this.state.weatherData} />
  //     )
  //   }
  // }

  render() {
    return (
      <main className='app'>
        <Nav />
        <Subheader savedCities={this.state.savedCities} />
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
                return < DailyForecast weatherData={this.state.weatherData} />
              }
              }
            />

            <Route
              exact path='/5day'
              render={() => {
                return < WeeklyForecast weatherData={this.state.weatherData} />
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