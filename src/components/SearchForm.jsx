import React, { useState } from 'react'
import { NavLink,Link,useSearchParams, useNavigate, useParams } from 'react-router-dom'


const SearchForm = () => {
  const[searchParams, setSearchParams] = useSearchParams({search:''})
  const [searchValue,setSearchValue] = useState('')
  const search = searchParams.get('search')

  const navigate = useNavigate()
  
  const onClickSearch = (e) => {
    //  setSearchParams({search:searchValue})
    const search = searchValue
console.log(searchValue)
console.log(searchParams)

      // navigate('search/'+search)

      //pass search using state
      navigate(
       '/search/'+search,
        {state:{search:search},
      })
      
      //pass search using string query
      // navigate({
      //   pathname:'/search/'+search,
      //   state:{search:search},
      //   // search:'?search='+search 
      // })
      

    }

  return (
    <div>
     {/* <Form action={`search`}> */}
     <input 
      type="text"
      placeholder='search'
      value={searchValue}
      // value={search}
      name='search'
      onChange={(e)=>setSearchValue(e.target.value)}/>
      {/* onChange={(e)=>setSearchParams({search:e.target.value})}/> */}
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

