import './MiniWeatherCard.scss';
import React from 'react';
import sunny from '../../assets/001-sunny.svg';
import snow from '../../assets/009-snow.svg';
import sleet from '../../assets/008-snow.svg';
import thunderstorm from '../../assets/006-storm.svg';
import heavyRain from '../../assets/005-heavy-rain.svg';
import lightRain from '../../assets/004-rainy.svg';
import showers from '../../assets/003-rain.svg';
import lightCloud from '../../assets/002-cloudy.svg';
import hail from '../../assets/006-storm.svg';
import heavyCloud from '../../assets/010-wind.svg';

const MiniWeatherCard = ({ fLowTemp, fHighTemp, weatherName, date }) => {
  let imgSrc, formattedHighTemp, formattedLowTemp;

  if (fLowTemp) {
    let weatherType = weatherName;
    formattedHighTemp = Math.round((fHighTemp * 1.8) + 32);
    formattedLowTemp = Math.round((fLowTemp * 1.8) + 32);

    if (weatherType === 'Snow') {
      imgSrc = snow;
    } else if (weatherType === 'Sleet') {
      imgSrc = sleet;
    } else if (weatherType === 'Hail') {
      imgSrc = hail;
    } else if (weatherType === 'Thunderstorm') {
      imgSrc = thunderstorm;
    } else if (weatherType === 'Heavy Rain') {
      imgSrc = heavyRain;
    } else if (weatherType === 'Light Rain') {
      imgSrc = lightRain;
    } else if (weatherType === 'Showers') {
      imgSrc = showers;
    } else if (weatherType === 'Heavy Cloud') {
      imgSrc = heavyCloud;
    } else if (weatherType === 'Light Cloud') {
      imgSrc = lightCloud;
    } else {
      imgSrc = sunny;
    }
  }

  return (
    <section className='mini-card-container'>
      <p className='mini-card-date'> {date}</p>
      <img src={imgSrc} alt='weather icon' className='mini-weather-icon' />
      <div className='mini-card-temp-container'>
        <p className='mini-card-temp'>{formattedHighTemp}° |</p>
        <p className='mini-card-temp low'> {formattedLowTemp}°</p>
      </div>
    </section>
  )
}

export default MiniWeatherCard;
