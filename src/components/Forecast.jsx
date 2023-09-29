import React from 'react'
import { UilClock, UilCalender } from '@iconscout/react-unicons'

function Forecast({title, icon, datetime, temperature, temperature2}) {
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
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
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
