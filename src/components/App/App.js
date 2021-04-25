import './App.scss'
import { fetchCityId, fetchWeatherById } from '../../data/apiCalls'
import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import DailyForecast from '../DailyForecast/DailyForecast'
import Subheader from '../Subheader/Subheader'
import fakeCityId from '../../data/fakeCityId'
import fakeWeatherData from '../../data/fakeWeatherData'
import { Route, Switch } from 'react-router';
// import sunny from '../../assets/001-sunny.svg';
// import snow from '../../assets/009-snow.svg';
// import sleet from '../../assets/008-snow.svg';
// import thunderstorm from '../../assets/006-storm.svg';
// import heavyRain from '../../assets/005-heavy-rain.svg';
// import lightRain from '../../assets/004-rainy.svg';
// import showers from '../../assets/003-rain.svg';
// import lightCloud from '../../assets/002-cloudy.svg';
// import hail from '../../assets/006-storm.svg';
// import heavyCloud from '../../assets/010-wind.svg';
// import loading from '../../assets/loading.svg';


class App extends Component {
  constructor() {
    super()
    this.state = {
      // cityData: [fakeCityId],
      // weatherData: { fakeWeatherData },
      cityData: [],
      weatherData: {},
      // weatherImages: [],
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
    // let images = this.assignImage(weatherData, weatherData.consolidated_weather[0].weather_state_name)
    // this.setState({ weatherImages: images })
    return {
      weatherForecast: weatherData.consolidated_weather,
      cityName: weatherData.title,
      latLong: weatherData.latt_long,
    }
  }

  renderComponent = () => {
    if (this.state.weatherData) {

      return (
        <DailyForecast
          weatherData={this.state.weatherData}
          weatherImages={this.state.weatherImages} />
      )
    }
  }


  // assignImage = (weatherData, weatherLocation) => {
  //   let keyword;
  //   let weatherType = weatherLocation;
  // if (weatherType === 'Snow') {
  //   imgSrc = '../../assets/009-snow.svg';
  // } else if (weatherType === 'Sleet') {
  //   imgSrc = '../../assets/008-snow.svg';
  // } else if (weatherType === 'Hail') {
  //   imgSrc = '../../assets/006-storm.svg';
  // } else if (weatherType === 'Thunderstorm') {
  //   imgSrc = '../../assets/006-storm.svg';
  // } else if (weatherType === 'Heavy Rain') {
  //   imgSrc = '../../assets/005-heavy-rain.svg';
  // } else if (weatherType === 'Light Rain') {
  //   imgSrc = '../../assets/004-rainy.svg';
  // } else if (weatherType === 'Showers') {
  //   imgSrc = '../../assets/003-rain.svg';
  // } else if (weatherType === 'Heavy Cloud') {
  //   imgSrc = '../../assets/010-wind.svg';
  // } else if (weatherType === 'Light Cloud') {
  //   imgSrc = '../../assets/002-cloudy.svg';
  // } else {
  //   imgSrc = '../../assets/001-sunny.svg';
  // }

  // if (weatherType === 'Snow') {
  //   imgSrc = snow;
  // } else if (weatherType === 'Sleet') {
  //   imgSrc = sleet;
  // } else if (weatherType === 'Hail') {
  //   imgSrc = hail;
  // } else if (weatherType === 'Thunderstorm') {
  //   imgSrc = thunderstorm;
  // } else if (weatherType === 'Heavy Rain') {
  //   imgSrc = heavyRain;
  // } else if (weatherType === 'Light Rain') {
  //   imgSrc = lightRain;
  // } else if (weatherType === 'Showers') {
  //   imgSrc = showers;
  // } else if (weatherType === 'Heavy Cloud') {
  //   imgSrc = heavyCloud;
  // } else if (weatherType === 'Light Cloud') {
  //   imgSrc = lightCloud;
  // } else {
  //   imgSrc = sunny;
  // }
  // console.log('imgSrc', imgSrc)
  // return imgSrc;

  //   if (weatherType === 'Snow') {
  //     keyword = 'snow';
  //   } else if (weatherType === 'Sleet') {
  //     keyword = 'sleet';
  //   } else if (weatherType === 'Hail') {
  //     keyword = 'hail';
  //   } else if (weatherType === 'Thunderstorm') {
  //     keyword = 'thunderstorm';
  //   } else if (weatherType === 'Heavy Rain') {
  //     keyword = 'heavyRain';
  //   } else if (weatherType === 'Light Rain') {
  //     keyword = 'lightRain';
  //   } else if (weatherType === 'Showers') {
  //     keyword = 'showers';
  //   } else if (weatherType === 'Heavy Cloud') {
  //     keyword = 'heavyCloud';
  //   } else if (weatherType === 'Light Cloud') {
  //     keyword = 'lightCloud';
  //   } else if (weatherType === 'Sunny') {
  //     keyword = 'sunny';
  //   }
  //   console.log('imgSrc', keyword)
  //   return keyword;
  // }



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