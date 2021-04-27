import './PictureCard.scss';
import PropTypes from 'prop-types';
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
import cloud from '../../assets/cloud.svg'
import loading from '../../assets/loading.svg';

const PictureCard = ({ weatherData }) => {
  let imgSrc;
  let weatherName;
  if (!weatherData.weatherForecast) {
    imgSrc = loading;
    weatherName = 'Loading';
  } else {
    let weatherType = weatherData.weatherForecast[0].weather_state_name;
    if (weatherType === 'Snow') {
      imgSrc = snow;
      weatherName = 'Snow';
    } else if (weatherType === 'Sleet') {
      imgSrc = sleet;
      weatherName = 'Sleet';
    } else if (weatherType === 'Hail') {
      imgSrc = hail;
      weatherName = 'Hail';
    } else if (weatherType === 'Thunderstorm') {
      imgSrc = thunderstorm;
      weatherName = 'Thunderstorm';
    } else if (weatherType === 'Heavy Rain') {
      imgSrc = heavyRain;
      weatherName = 'Heavy Rain';
    } else if (weatherType === 'Light Rain') {
      imgSrc = lightRain;
      weatherName = 'Light Rain';
    } else if (weatherType === 'Showers') {
      imgSrc = showers;
      weatherName = 'Showers';
    } else if (weatherType === 'Heavy Cloud') {
      imgSrc = cloud;
      weatherName = 'Heavy Clouds';
    } else if (weatherType === 'Light Cloud') {
      imgSrc = lightCloud;
      weatherName = 'Light Clouds';
    } else {
      imgSrc = sunny;
      weatherName = 'Sunny';
    }
  }

  return (
    <section className='picture-card-container'>
      <img src={imgSrc} alt='weather icon' className='weather-icon' />
      <h2>{weatherName}</h2>
    </section>
  )
}

export default PictureCard;

PictureCard.propTypes = {
  weatherData: PropTypes.object
}