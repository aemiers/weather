import './TemperatureCard.scss';
import React from 'react';

const TemperatureCard = ({ weatherData }) => {
  let fHighTemp, fLowTemp, fCurrentTemp;
  if (weatherData.weatherForecast) {
    fHighTemp = Math.round((weatherData.weatherForecast[0].max_temp * 1.8) + 32)
    fLowTemp = Math.round((weatherData.weatherForecast[0].min_temp * 1.8) + 32)
    fCurrentTemp = Math.round((weatherData.weatherForecast[0].the_temp * 1.8) + 32)
  }

  return (
    <section className='temp-card-container'>
      <div className='white-overlay'>
        <p className='current-temp'>{fCurrentTemp}°F</p>
        <div className='mini-temp-container'>
          <p className='mini-temp'>{fHighTemp}° |</p>
          <p className='mini-temp low'> {fLowTemp}°</p>
        </div>
      </div>
    </section>
  )
}

export default TemperatureCard;