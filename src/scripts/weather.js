import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/3.0'

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType)
  url.search = new URLSearchParams({...searchParams, appid:import.meta.env.VITE_OPENWEATHER_API_KEY})
  console.log(url.search)
  return axios.get(url)
    .then((res) => res.data)
}

export default getWeatherData
