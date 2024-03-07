import React from 'react'

function NewsItem(props) {
  const { id, image_url, title, summary, url } = props;

  return (
    <>
      <div key={id} className='news-item'>
        <img src={image_url} alt=''/>
        <div className='title'>{title}</div>
        <div className='summary'> {summary.length > 100 ? summary.substring(0, 100) + "....." : summary} </div>
        <button className='read-btn' onClick={() => window.location.href = url}>Read More
        </button>
      </div>


    </>
  )
}

export default NewsItem;