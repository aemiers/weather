import './WeeklyForecastDetails.scss';
import React from 'react';
import MiniWeatherCard from '../MiniWeatherCard/MiniWeatherCard';

const WeeklyForecastDetails = ({ weatherData }) => {
  let weeklyForecastData;
  if (weatherData.weatherForecast) {
    Object.keys(weatherData)
    weeklyForecastData = weatherData.weatherForecast.map(dayData => {
      return (
        <MiniWeatherCard
          fLowTemp={dayData.min_temp}
          fHighTemp={dayData.max_temp}
          weatherName={dayData.weather_state_name}
          date={dayData.applicable_date}
        />
      )
    })
  }

  return (
    <section className='card-container'>
      {weeklyForecastData}
    </section>
  )
}

export default WeeklyForecastDetails;
