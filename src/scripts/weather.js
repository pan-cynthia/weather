import axios from 'axios'
import { DateTime } from 'luxon'

const getCoordinates = (cityName) => {
  const geo_url = new URL('https://geocoding-api.open-meteo.com/v1/search')
  geo_url.search = new URLSearchParams(cityName)
  console.log(geo_url.search)

  return axios.get(geo_url)
    .then(res => res.data)
}

const formatCoordinates = (data) => {
  const {
    results: {0: {latitude, longitude, name}}
  } = data
  return {latitude, longitude, name}
}

const getWeatherData = (searchParams) => {
  const meteo_url = new URL('https://api.open-meteo.com/v1/forecast')
  meteo_url.search = new URLSearchParams({...searchParams})
  console.log(meteo_url.search)

  return axios.get(meteo_url)
    .then(res => res.data)
}

const formatWeatherData = (data) => {
  let {
    hourly: {temperature_2m, relativehumidity_2m, apparent_temperature},
    daily: {temperature_2m_max, temperature_2m_min, sunrise, sunset, uv_index_max},
    current_weather: {time, temperature, weathercode, windspeed}
  } = data

  // only get forecast data for current day only + next 5 days
  temperature_2m = data.hourly.temperature_2m.slice(1, 6)
  relativehumidity_2m = data.hourly.relativehumidity_2m[0]  
  apparent_temperature = data.hourly.apparent_temperature[0]
  temperature_2m_max = data.daily.temperature_2m_max.slice(0, 6)
  temperature_2m_min = data.daily.temperature_2m_min.slice(0, 6)
  sunrise = formatToLocalTime(data.daily.sunrise[0], 'hh:mm a')
  sunset = formatToLocalTime(data.daily.sunset[0], 'hh:mm a')
  uv_index_max = data.daily.uv_index_max[0]
  time = formatToLocalTime(time)

  return {time, temperature, weathercode, temperature_2m, temperature_2m_max, temperature_2m_min, apparent_temperature, uv_index_max, relativehumidity_2m, windspeed, sunrise, sunset}
}

const getFormattedWeatherData = async (cityName) => {
  const coordinates = await getCoordinates(cityName).then(formatCoordinates)
  const {latitude, longitude, name} = coordinates

  const weatherData = await getWeatherData({
    latitude: latitude,
    longitude: longitude,
    hourly: ['temperature_2m', 'relativehumidity_2m', 'apparent_temperature', 'windspeed_10m'],
    daily: ['temperature_2m_max', 'temperature_2m_min', 'sunrise', 'sunset', 'uv_index_max'],
    current_weather: true,
    timezone: 'auto',
    temperature_unit: 'fahrenheit',
    windspeed_unit: 'mph'
  }).then(formatWeatherData)

  return {weatherData, name}
}

const formatToLocalTime = (time, format = 'hh:mm a ccc, LLL dd') => {
  return DateTime.fromISO(time).toFormat(format)
}

export default getFormattedWeatherData
