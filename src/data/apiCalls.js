// const baseURL = 'https://www.metaweather.com/api/location/'
const baseURL = '/api/location/'

export const fetchCityId = (cityName) => {
  return fetch(`${baseURL}search/?query=${cityName}`)
    .then(response => {
      return response.json()
    })
}

// export const fetchCityId = (cityName) => {
//   let allWeatherData;
//   let cityData = fetch(`${baseURL}search/?query=${cityName}`)
//     .then(response => response.json())
//   let weatherData = fetch(`${baseURL}${id}`)
// }

export const fetchWeatherById = (id) => {
  return fetch(`${baseURL}${id}`)
    .then(response => {
      return response.json
    })
}
//location search needs ?query= and then name of the city here
//provides
// [
// {
//   "title": "London",
//     "location_type": "City",
//       "woeid": 44418,
//         "latt_long": "51.506321,-0.12714"
// }
// ]

//then using woeid, you can search https://www.metaweather.com/api/location/44418/ (last one is woeid) to find out lots of information
// {
//   "consolidated_weather": [
//     {
//       "id": 6545948432924672,
//       "weather_state_name": "Heavy Cloud",
//       "weather_state_abbr": "hc",
//       "wind_direction_compass": "ENE",
//       "created": "2021-04-21T21:31:02.787688Z",
//       "applicable_date": "2021-04-21",
//       "min_temp": 6.145,
//       "max_temp": 13.969999999999999,
//       "the_temp": 14.035,
//       "wind_speed": 6.128266803205282,
//       "wind_direction": 70.24703440918229,
//       "air_pressure": 1021.5,
//       "humidity": 62,
//       "visibility": 9.272411616161616,
//       "predictability": 71
//     },
//     {
//       "id": 4920582484262912,
//       "weather_state_name": "Clear",
//       "weather_state_abbr": "c",
//       "wind_direction_compass": "E",
//       "created": "2021-04-21T21:31:03.132228Z",
//       "applicable_date": "2021-04-22",
//       "min_temp": 2.785,
//       "max_temp": 14.205,
//       "the_temp": 12.275,
//       "wind_speed": 6.58483489630425,
//       "wind_direction": 87.01350286235225,
//       "air_pressure": 1028,
//       "humidity": 46,
//       "visibility": 12.341985305814045,
//       "predictability": 68
//     },
//     {
//       "id": 6443151242821632,
//       "weather_state_name": "Clear",
//       "weather_state_abbr": "c",
//       "wind_direction_compass": "E",
//       "created": "2021-04-21T21:31:01.976653Z",
//       "applicable_date": "2021-04-23",
//       "min_temp": 2.915,
//       "max_temp": 15.209999999999999,
//       "the_temp": 14.275,
//       "wind_speed": 6.919860257056125,
//       "wind_direction": 89.66687370009672,
//       "air_pressure": 1029.5,
//       "humidity": 44,
//       "visibility": 13.006231110315756,
//       "predictability": 68
//     },
//     {
//       "id": 5036355642982400,
//       "weather_state_name": "Heavy Cloud",
//       "weather_state_abbr": "hc",
//       "wind_direction_compass": "E",
//       "created": "2021-04-21T21:31:03.251733Z",
//       "applicable_date": "2021-04-24",
//       "min_temp": 5.05,
//       "max_temp": 14.925,
//       "the_temp": 13.75,
//       "wind_speed": 8.635213117161113,
//       "wind_direction": 83.33499428378381,
//       "air_pressure": 1027.5,
//       "humidity": 50,
//       "visibility": 13.670787600413584,
//       "predictability": 71
//     },
//     {
//       "id": 5494900645691392,
//       "weather_state_name": "Heavy Cloud",
//       "weather_state_abbr": "hc",
//       "wind_direction_compass": "ENE",
//       "created": "2021-04-21T21:31:02.183891Z",
//       "applicable_date": "2021-04-25",
//       "min_temp": 6.005,
//       "max_temp": 13.954999999999998,
//       "the_temp": 13.09,
//       "wind_speed": 8.80973897473952,
//       "wind_direction": 68.83199043358044,
//       "air_pressure": 1026,
//       "humidity": 50,
//       "visibility": 13.79785800922612,
//       "predictability": 71
//     },
//     {
//       "id": 6458389249916928,
//       "weather_state_name": "Heavy Cloud",
//       "weather_state_abbr": "hc",
//       "wind_direction_compass": "ENE",
//       "created": "2021-04-21T21:31:05.193331Z",
//       "applicable_date": "2021-04-26",
//       "min_temp": 4.92,
//       "max_temp": 15.525,
//       "the_temp": 13.91,
//       "wind_speed": 5.768421816591108,
//       "wind_direction": 59.5,
//       "air_pressure": 1013,
//       "humidity": 55,
//       "visibility": 9.999726596675416,
//       "predictability": 71
//     }
//   ],
//     "time": "2021-04-21T23:55:56.678820+01:00",
//       "sun_rise": "2021-04-21T05:51:54.343439+01:00",
//         "sun_set": "2021-04-21T20:07:33.207918+01:00",
//           "timezone_name": "LMT",
//             "parent": {
//     "title": "England",
//       "location_type": "Region / State / Province",
//         "woeid": 24554868,
//           "latt_long": "52.883560,-1.974060"
//   },
//   "sources": [
//     {
//       "title": "BBC",
//       "slug": "bbc",
//       "url": "http://www.bbc.co.uk/weather/",
//       "crawl_rate": 360
//     },
//     {
//       "title": "Forecast.io",
//       "slug": "forecast-io",
//       "url": "http://forecast.io/",
//       "crawl_rate": 480
//     },
//     {
//       "title": "HAMweather",
//       "slug": "hamweather",
//       "url": "http://www.hamweather.com/",
//       "crawl_rate": 360
//     },
//     {
//       "title": "Met Office",
//       "slug": "met-office",
//       "url": "http://www.metoffice.gov.uk/",
//       "crawl_rate": 180
//     },
//     {
//       "title": "OpenWeatherMap",
//       "slug": "openweathermap",
//       "url": "http://openweathermap.org/",
//       "crawl_rate": 360
//     },
//     {
//       "title": "Weather Underground",
//       "slug": "wunderground",
//       "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
//       "crawl_rate": 720
//     },
//     {
//       "title": "World Weather Online",
//       "slug": "world-weather-online",
//       "url": "http://www.worldweatheronline.com/",
//       "crawl_rate": 360
//     }
//   ],
//     "title": "London",
//       "location_type": "City",
//         "woeid": 44418,
//           "latt_long": "51.506321,-0.12714",
//             "timezone": "Europe/London"
// }