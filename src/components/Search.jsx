import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Search({units, setUnits, setCityName}) {
  const [city, setCitySearch] = useState('')

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter' && city != '') {
      setCityName({name: city})
      document.querySelector('input').value = ''
    }
  }

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units.temperature_unit !== selectedUnit) {
      selectedUnit === 'fahrenheit' ? 
      setUnits({temperature_unit: 'fahrenheit', windspeed_unit: 'mph'}) :
      setUnits({temperature_unit: 'celsius', windspeed_unit: 'kmh'})
    }
  }

  return (
    <div className='flex justify-end w-1/2'>
      <div className='flex w-5/6 space-x-1 bg-white rounded-lg'>
        <UilSearch className='text-slate-400 m-2' size={15}/>
        <input type="text" placeholder='Search' className='outline-none' onChange={(e) => setCitySearch(e.currentTarget.value)} onKeyDown={(e) => handleSearchEnter(e)}/>
      </div>
      <div className='flex justify-center items-center w-1/6 space-x-2 text-white font-medium'>
        <button name='celsius' className='transition ease-out hover:scale-125' onClick={handleUnitChange}>°C</button>
        <p>|</p>
        <button name='fahrenheit' className='transition ease-out hover:scale-125' onClick={handleUnitChange}>°F</button>
      </div>
    </div>
  )
}

export default Search