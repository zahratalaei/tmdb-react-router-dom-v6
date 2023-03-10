import React from 'react'
import { NavLink,Link,useSearchParams, useNavigate, useParams } from 'react-router-dom'


const SearchForm = () => {
  const[searchParams, setSearchParams] = useSearchParams({search:''})

  const search = searchParams.get('search')

  const navigate = useNavigate()
  
  const onClickSearch = (e) => {
    
      // navigate('search/'+search)
      navigate({
        pathname:'/search/'+search,

        search:'?search='+search 
      })

    }

  return (
    <div>
     {/* <Form action={`search`}> */}
     <input 
      type="text"
      placeholder='search'
      value={search}
      name='search'
      onChange={(e)=>setSearchParams({search:e.target.value})}/>
      <button type='submit' onClick={onClickSearch}>Search</button>
     {/* </Form> */}
     
     <NavLink to="/"style={({isActive})=>{
          return isActive ?{color:'red'}:{}

     }}>Home</NavLink><br/>
     <Link to={`/movie`}>movie</Link>
    </div>
  )
}

export default SearchForm

