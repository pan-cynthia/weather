import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Search() {
  return (
    <div className='mx-auto flex justify-around my-6 w-5/6'>
      <div className='flex w-5/6 space-x-2 bg-white rounded-full'>
        <UilSearch className='text-slate-400 m-2' size={25}/>
        <input type="text" placeholder='Search' className='outline-none'/>
      </div>
      <div className='flex justify-center items-center w-1/6 space-x-2 text-white'>
        <button name='metric'>°C</button>
        <p>|</p>
        <button name='imperial'>°F</button>
      </div>
    </div>
  )
}

export default Search