import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'

function Conditions() {
  return (
    <div className='bg-[#0478c9] rounded-lg p-5 m-10'>
      <div className='flex justify-center space-x-2 mb-2 text-white'>
        <div className='flex'>
          <UilArrowUp/>
          <p className='ml-1'>H: 69°</p>
        </div>
        <p>|</p>
        <div className='flex'>
          <UilArrowDown/>
          <p className='ml-1'>L: 58°</p>
        </div>
        <p>|</p>
        <div className='flex'>
          <UilSun/>
          <p className='ml-1'>Sunrise: 06:54 AM</p>
        </div>
        <p>|</p>
        <div className='flex'>
          <UilSunset/>
          <p className='ml-1'>Sunset: 7:13 PM</p>
        </div>
      </div>
      <div className='flex justify-center space-x-2 text-white'>
        <div className='flex'>
          <UilTemperature/>
          <p className='ml-1'>Feels Like: 66°</p>
        </div>
        <p>|</p>
        <div className='flex'>
          <UilTear/>
          <p className='ml-1'>Humidity: 75%</p>
        </div>
        <p>|</p>
        <div className='flex'>
          <UilWind/>
          <p className='ml-1'>Wind: 12 mph</p>
        </div>
      </div>
    </div>
  )
}

export default Conditions