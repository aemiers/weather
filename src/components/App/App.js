import './App.scss'
import { fetchCityId, fetchWeatherById } from '../../data/apiCalls'
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cityData: [],
      weatherData: {},
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
        this.setState({ weatherData: fetchedWeatherData })
      })
      .catch(error => this.setState({ error: 'There was a loading error. Please reload the page and try again.' }))
  }

  render() {
    return (
      <main className='app'>
        {!!this.state.error &&
          <h2 className="error-feedback">{this.state.error}</h2>
        }

        <section className='main-page'>
        </section>
      </main>
    )
  }
}

export default App;