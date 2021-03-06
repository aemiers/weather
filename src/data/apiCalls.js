const baseURL = '/api/location/'
// const baseURL = 'https://www.metaweather.com/api/#location'

export const fetchCityId = (cityName) => {
  return fetch(`${baseURL}search/?query=${cityName}`)
    .then(response => {
      return response.json()
    })
}

export const fetchWeatherById = (id) => {
  return fetch(`${baseURL}${id}/`)
    .then(response => {
      return response.json()
    })
}
