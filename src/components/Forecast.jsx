import React from 'react'

function Forecast({title}) {
  return (
    <div>
      <div className='mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
        <hr className='my-2'/>
      </div>
      <div className='grid grid-cols-5 divide-x text-white'>
        <div className='flex flex-col items-center'>
          <p>02:00pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>03:00pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>04:00pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>05:00pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>06:00pm</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sunny" className='w-12 my-1'/>
          <p>60°</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast