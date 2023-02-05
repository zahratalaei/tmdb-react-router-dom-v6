import React from 'react'
import { Link,useParams, useSearchParams } from 'react-router-dom';

const MoviePage = () => {
     const[searchParams,setSearchParams]=useSearchParams({n:1})
     const number = searchParams.get('n')
    //  const text = searchParams.get('text')
     
     
     const { id} = useParams();

  return (
    <div>
     <Link to={`/movie/${number}`}>Movie {number}</Link>
     {/* <p>text {text}</p> */}
     <br/>
     <input type="number" value={number} onChange={(e)=>{setSearchParams({n:e.target.value})}} /><br/>
     {/* <input type="text" value={text} onChange={(e)=>{setSearchParams({text:e.target.value})}} /> */}
    </div>
  )
}

export default MoviePage