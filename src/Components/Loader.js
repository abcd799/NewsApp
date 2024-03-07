import React from 'react'
import loader from './loader.svg'
function Loader() {
  return (
    <>
      <div className='loader-cont'>
        <img className="loader" src={loader} alt='loading...' />
      </div>
    </>
  )
}

export default Loader;