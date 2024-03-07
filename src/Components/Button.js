import React from 'react'

function Button({limit,setLimit,setLoading}) {
  const handlePreviousClick=()=>{
    if(limit<10&& limit>0){
      setLimit(0)
      setLoading(true);
    }else{
      const newLimit=limit-10;
      setLimit(newLimit);
      setLoading(true);
    }
  }
    const handleNextClick=()=>{
    const newLimit=limit+10;
    setLimit(newLimit);
    setLoading(true);
  }
  return (
    <>
      <div className="btn-container">
          <button disabled={limit<=0} className='previous' onClick={handlePreviousClick}>&laquo; Previous</button>
          <button className="next" onClick={handleNextClick}>Next &raquo;</button>
        </div>
    </>
  )
}

export default Button;