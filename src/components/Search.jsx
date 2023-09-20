import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Search() {
  return (
    <div className='flex justify-end w-1/2'>
      <div className='flex w-5/6 space-x-1 bg-white rounded-lg'>
        <UilSearch className='text-slate-400 m-2' size={15}/>
        <input type="text" placeholder='Search' className='outline-none'/>
      </div>
      <div className='flex justify-center items-center w-1/6 space-x-2 text-white font-medium'>
        <button name='metric'>°C</button>
        <p>|</p>
        <button name='imperial'>°F</button>
      </div>
    </div>
  )
}

export default Search