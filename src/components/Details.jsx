import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'

function Details() {
  return (
    <div>
      <div className='flex flex-col items-center text-white m-5 space-y-2'>
        <div className='text-4xl'>San Francisco</div>
        <div className='text-5xl font-light'>66°</div>
        <div className='text-xl'>Mostly Sunny</div>
      </div>
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
          <p className='ml-1'>Sunrise: 06:54am</p>
        </div>
        <p>|</p>
        <div className='flex'>
          <UilSunset/>
          <p className='ml-1'>Sunset: 7:13pm</p>
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
          <p className='ml-1'>Wind: 12mph</p>
        </div>
      </div>
    </div>
  )
}

export default Details