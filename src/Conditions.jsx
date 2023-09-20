import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset, UilInfoCircle } from '@iconscout/react-unicons'

function Conditions() {
  return (
    <div className='bg-[#0478c9] rounded-lg p-5 m-10'>
      <div className='flex items-center space-x-1.5 text-[#7eb8e0]'>
        <UilInfoCircle size={18}/>
        <p className='mb-2 font-medium uppercase'>Conditions</p>
      </div>
      <div className='grid grid-cols-4 gap-6 text-white'>
        <div>
          <div className='flex items-center space-x-1'>
            <UilArrowUp size={20}/>
            <p>High</p>
          </div>
          <p className='text-2xl ml-6'>69°</p>
        </div>
        <div>
          <div className='flex items-center space-x-1'>
            <UilArrowDown size={20}/>
            <p>Low</p>
          </div>
          <p className='text-2xl ml-6'>58°</p>
        </div>
        <div>
          <div className='flex items-center space-x-1'>
            <UilSun size={18}/>
            <p>Sunrise</p>
          </div>
          <p className='text-2xl ml-6'>06:54 AM</p>
        </div>
        <div>
          <div className='flex items-center space-x-1'>
            <UilSunset size={18}/>
            <p>Sunset</p>
          </div>
          <p className='text-2xl ml-6'>07:13 PM</p>
        </div>
        <div>
          <div className='flex items-center space-x-1'>
            <UilTemperature size={18}/>
            <p>Feels Like</p>
          </div>
          <p className='text-2xl ml-6'>66°</p>
        </div>
        <div>
          <div className='flex items-center space-x-1'>
            <UilTear size={18}/>
            <p>Humidity</p>
          </div>
          <p className='text-2xl ml-6'>75%</p>
        </div>
        <div>
          <div className='flex items-center space-x-1'>
            <UilWind size={18}/>
            <p>Wind</p>
          </div>
          <p className='text-2xl ml-6'>12 mph</p>
        </div>
      </div>
    </div>
  )
}

export default Conditions