import React from 'react'

function Error({ fetchData }) {
  return (
    <>
      <div className='error'>
        <div className='error-box'>
          <div className='error-msg'> Sorry can not fetch the data from API ☹️<br/>Please try again.</div>
          <button onClick={() => fetchData()}>Try again</button>
        </div>
      </div>
    </>
  )
}

export default Error;