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
    hourly: {time: time_h, temperature_2m, relativehumidity_2m, apparent_temperature, weathercode: weathercode_h},
    daily: {time: time_d, temperature_2m_max, temperature_2m_min, sunrise, sunset, uv_index_max, weathercode: weathercode_d},
    current_weather: {time, temperature, weathercode, windspeed}
  } = data

  // only get forecast data for current day only + next 5 days
  relativehumidity_2m = data.hourly.relativehumidity_2m[0]  
  apparent_temperature = data.hourly.apparent_temperature[0]
  temperature_2m_max = data.daily.temperature_2m_max.slice(0, 6)
  temperature_2m_min = data.daily.temperature_2m_min.slice(0, 6)
  sunrise = formatToLocalTime(data.daily.sunrise[0], 'hh:mm a')
  sunset = formatToLocalTime(data.daily.sunset[0], 'hh:mm a')
  uv_index_max = data.daily.uv_index_max[0]

  time = formatToLocalTime(time)
  let hour = parseInt(time.slice(0, 2))
  if (time.slice(6, 8) === 'PM' && hour != 12) {
    // use 24 hour time to index
    hour = hour + 12
  }
  temperature_2m = data.hourly.temperature_2m.slice(hour + 1, hour + 6)
  weathercode_h = weathercode_h.slice(hour + 1, hour + 6)
  time_h = time_h.slice(hour + 1, hour + 6).map(h => {
    return formatToLocalTime(h, 'hh:mm a')
  })

  weathercode_d = weathercode_d.slice(1, 6)
  time_d = time_d.slice(1, 6).map(d => {
    return formatToLocalTime(d, 'ccc')
  })
  
  return {time, time_h, time_d, temperature, weathercode, weathercode_h, weathercode_d, temperature_2m, temperature_2m_max, temperature_2m_min, apparent_temperature, uv_index_max, relativehumidity_2m, windspeed, sunrise, sunset}
}

const getFormattedWeatherData = async (cityName, units) => {
  const coordinates = await getCoordinates(cityName).then(formatCoordinates)
  const {latitude, longitude, name} = coordinates

  let weatherData = await getWeatherData({
    latitude: latitude,
    longitude: longitude,
    hourly: ['temperature_2m', 'relativehumidity_2m', 'apparent_temperature', 'windspeed_10m', 'weathercode'],
    daily: ['temperature_2m_max', 'temperature_2m_min', 'sunrise', 'sunset', 'uv_index_max', 'weathercode'],
    current_weather: true,
    timezone: 'auto',
    temperature_unit: units.temperature_unit,
    windspeed_unit: units.windspeed_unit
  }).then(formatWeatherData)

  return {weatherData, name}
}

const formatToLocalTime = (time, format = 'hh:mm a ccc, LLL dd') => {
  return DateTime.fromISO(time).toFormat(format)
}

const getIcon = (weathercode) => `http://openweathermap.org/img/wn/${weathercode}@2x.png`

export default getFormattedWeatherData
export { getIcon }