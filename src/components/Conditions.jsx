import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset, UilInfoCircle } from '@iconscout/react-unicons'

function Conditions({weather: {weatherData: {temperature_2m_max, temperature_2m_min, apparent_temperature, uv_index_max, relativehumidity_2m, windspeed, sunrise, sunset}}}) {
  return (
    <div className='bg-[#007cbc]/70 rounded-lg p-5 w-2/6'>
      <div className='flex items-center space-x-1.5 text-[#7eb8e0]'>
        <UilInfoCircle size={18}/>
        <p className='mb-2 font-medium uppercase'>Conditions</p>
      </div>
      <div className='grid grid-cols-2 gap-5 text-white'>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilArrowUp size={20}/>
            <p>High</p>
          </div>
          <p className='text-xl'>&nbsp;{temperature_2m_max[0].toFixed()}°</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilArrowDown size={20}/>
            <p>Low</p>
          </div>
          <p className='text-xl'>&nbsp;{temperature_2m_min[0].toFixed()}°</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilTemperature size={18}/>
            <p>Feels Like</p>
          </div>
          <p className='text-xl'>&nbsp;{apparent_temperature.toFixed()}°</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilSun size={18}/>
            <p>UV Index</p>
          </div>
          <p className='text-xl'>{uv_index_max.toFixed()}</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilTear size={18}/>
            <p>Humidity</p>
          </div>
          <p className='text-xl'>{relativehumidity_2m.toFixed()}%</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilWind size={18}/>
            <p>Wind</p>
          </div>
          <p className='text-xl'>{windspeed.toFixed()} mph</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilSun size={20}/>
            <p>Sunrise</p>
          </div>
          <p className='text-lg'>{sunrise}</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilSunset size={20}/>
            <p>Sunset</p>
          </div>
          <p className='text-lg'>{sunset}</p>
        </div>
      </div>
    </div>
  )
}

export default Conditions