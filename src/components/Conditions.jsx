import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset, UilInfoCircle } from '@iconscout/react-unicons'

function Conditions() {
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
          <p className='text-xl'>&nbsp;69°</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilArrowDown size={20}/>
            <p>Low</p>
          </div>
          <p className='text-xl'>&nbsp;58°</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilTemperature size={18}/>
            <p>Feels Like</p>
          </div>
          <p className='text-xl'>&nbsp;66°</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilSun size={18}/>
            <p>UV Index</p>
          </div>
          <p className='text-xl'>6</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilTear size={18}/>
            <p>Humidity</p>
          </div>
          <p className='text-xl'>75%</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilWind size={18}/>
            <p>Wind</p>
          </div>
          <p className='text-xl'>12 mph</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilSun size={20}/>
            <p>Sunrise</p>
          </div>
          <p className='text-lg'>06:54 AM</p>
        </div>
        <div className='bg-[#7eb8e0]/30 rounded-xl flex flex-col items-center justify-center py-2'>
          <div className='flex items-center'>
            <UilSunset size={20}/>
            <p>Sunset</p>
          </div>
          <p className='text-lg'>07:13 PM</p>
        </div>
      </div>
    </div>
  )
}

export default Conditions