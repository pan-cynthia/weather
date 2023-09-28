import React from 'react'

function DateTime({weather: {weatherData: {time}}}) {
  return (
    <div className='flex ml-2 text-white font-medium'>{time}</div>
  )
}

export default DateTime