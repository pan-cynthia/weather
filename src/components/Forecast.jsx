import React from 'react'
import { UilClock, UilCalender } from '@iconscout/react-unicons'

function Forecast({title, icon}) {
  return (
    <div className='bg-[#0478c9] rounded-lg p-5 w-full'>
      <div className='flex items-center mb-2 space-x-1.5 text-[#7eb8e0]'>
        {icon === 'UilClock' ? (<UilClock size={18}/>) : (<UilCalender size={18}/>)}
        <p className=' font-medium uppercase'>{title}</p>
      </div>
      <div className='grid grid-cols-5 divide-x divide-[#7eb8e0]/25 text-white'>
        <div className='flex flex-col items-center'>
          <p>02:00 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>03:00 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>04:00 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>05:00 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>06:00 PM</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast
