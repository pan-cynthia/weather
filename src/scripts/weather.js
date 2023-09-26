import axios from 'axios'

const BASE_URL = 'https://api.open-meteo.com/v1/forecast'

const getWeatherData = (searchParams) => {
  const url = new URL(BASE_URL)
  url.search = new URLSearchParams({...searchParams})
  console.log(url.search)  // print out query parameters

  return axios.get(url)
    .then(res => res.data)
}

export default getWeatherData
