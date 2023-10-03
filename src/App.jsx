import Search from './components/Search.jsx'
import DateTime from './components/DateTime.jsx'
import Details from './components/Details.jsx'
import Forecast from './components/Forecast.jsx'
import Conditions from './components/Conditions.jsx'
import getFormattedWeatherData from './scripts/weather.js'
import { useEffect, useState } from 'react'

function App() {

  const [cityName, setCityName] = useState({name: 'San Francisco'})
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState({temperature_unit: 'fahrenheit', windspeed_unit: 'mph'})

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData(cityName, units).then(setWeather)
    }
  
    fetchWeather();
  }, [cityName, units])

  return (
    <div className='mx-auto max-w-screen-full h-screen bg-gradient-to-br from-[#55a6cd] to-[#1689bb]'>
      {weather && (
      <div>
        <div className='flex justify-between items-center p-5'>
          <DateTime weather={weather}/>
          <Search units={units} setUnits={setUnits}/>
        </div>
        <Details weather={weather}/>
        <div className='mx-auto mt-10 flex justify-between w-2/3 space-x-5'>
          <div className='w-4/5 flex flex-col justify-between'>
            <Forecast datetime={weather.weatherData.time_h} temperature={weather.weatherData.temperature_2m} weather={weather} title='Hourly Forecast' icon='UilClock'/>
            <Forecast datetime={weather.weatherData.time_d} temperature={weather.weatherData.temperature_2m_max.slice(1, 6)} temperature2={weather.weatherData.temperature_2m_min.slice(1, 6)} weather={weather} title='Daily Forecast' icon='UilCalender'/>
          </div>
          <Conditions weather={weather} units={units}/>
        </div>
      </div>
      )}
    </div>
  )
}

export default App
