import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-96'>

      <div className='spinner '></div>
      <p className='font-bold mt-2 text-lg'>Loading</p>
    </div>
  )
}

export default Spinner
