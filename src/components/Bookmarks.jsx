import React from 'react'

function Bookmarks() {

  const cities = [
    {
      id: 1,
      name: 'San Francisco'
    },
    {
      id: 2,
      name: 'Toronto'
    },
    {
      id: 3,
      name: 'Shanghai'
    },
    {
      id: 4,
      name: 'Paris'
    },
    {
      id: 5,
      name: 'Seoul'
    },
  ]

  return (
    <div className='flex justify-around my-5'>
      {cities.map((city) => (
        <button className='text-white text-lg font-medium' key={city.id}>{city.name}</button>
      ))}
    </div>
  )
  
}

export default Bookmarks