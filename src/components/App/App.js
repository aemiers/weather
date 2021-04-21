import './App.scss';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      weatherData: []
    }
  }

  componentDidMount() {
    fetchWeatherData()
      .then(())
  }
}