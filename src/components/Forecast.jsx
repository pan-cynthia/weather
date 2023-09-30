import React from 'react'
import { UilClock, UilCalender } from '@iconscout/react-unicons'
import { getIcon } from '../scripts/weather'

function Forecast({title, icon, datetime, temperature, temperature2, weather: {weatherData: {weathercode_h, weathercode_d}}}) {

  const weatherIcons = {
    0: '01d',
    1: '01d',
    2: '02d',
    3: '04d',
    45: '50d',
    51: '09d',
    53: '09d',
    55: '09d',
    56: '13d',
    57: '09d',
    61: '10d',
    63: '10d',
    65: '10d',
    66: '13d',
    67: '13d',
    71: '13d',
    73: '13d',
    75: '13d',
    77: '13d',
    80: '09d',
    81: '09d',
    82: '09d',
    85: '13d',
    86: '13d',
    95: '11d',
    96: '11d',
    99: '11d'
  }

  return (
    <div className='bg-[#007cbc]/70 rounded-lg p-5 w-full'>
      <div className='flex items-center mb-2 space-x-1.5 text-[#7eb8e0]'>
        {icon === 'UilClock' ? (<UilClock size={18}/>) : (<UilCalender size={18}/>)}
        <p className=' font-medium uppercase'>{title}</p>
      </div>
      <div className='grid grid-cols-5 divide-x divide-[#7eb8e0]/25 text-white'>
        {temperature.map((t, i) => (
          <div key={i} className='flex flex-col items-center'>
            <p>{datetime[i]}</p>
            {title === 'Hourly Forecast' ? 
              <img src={getIcon(weatherIcons[weathercode_h[i]])} alt="icon" className='w-12 my-1'/> :
              <img src={getIcon(weatherIcons[weathercode_d[i]])} alt="icon" className='w-12 my-1'/>
            }
            {temperature2 ?
              <div className='flex space-x-2'>
                <p className='text-white/60 font-medium'>L:{temperature2[i].toFixed()}°</p> 
                <p>H:{temperature[i].toFixed()}°</p>
              </div> :
              <p>{temperature[i].toFixed()}°</p>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
