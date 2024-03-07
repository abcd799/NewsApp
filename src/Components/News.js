import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Button from './Button';
import Loader from './Loader'
import Error from './Error';

function News() {
  const [limit, setLimit] = useState(0)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=${limit}&page=1`);
      const parseData = await response.json();
      setData(parseData.results);
      setError(false);
    } catch (error) {
      console.log("Some error happened." + error)
      setError(true);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line 
  }, [limit, error])

  return (
    <>
      {loading ? <Loader /> :
         (error ? <Error fetchData={fetchData} /> : (
           <div>
             <p className="heading">Latest News</p>
             <div className='main-cont'>
               <div className="news-container">
                 {data.map((element) => (
                   <NewsItem key={element.id} image_url={element.image_url} summary={element.summary} title={element.title} url={element.url} />
                 ))}</div>
               <Button fetchData={fetchData} limit={limit} setLimit={setLimit} setLoading={setLoading} />
             </div>
         </div>))}
    </>
  );
}
 

export default News;