import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
const SearchInputs = styled.div` 
    display: flex;
    width:70%;
    margin:0 auto;

`
const Search = styled.input`
  box-sizing:border-box ;
  width:100% ;
  height:42px ;
  border-radius:22px 0 0 22px ;
  color: #01D277 ;
  padding-top:14px;
  padding-left:17px ;
  padding-bottom:18px;
  font-weight:500 ;
  font-size:14px ;
  line-height:16px ;
  font-family: 'Roboto';
  border:none;
  ::placeholder{
    font-family:'Roboto';
    color: #01D277;
    font-size: 14px;
    line-height:16px;
  }
  :focus {
      outline: none;
    }
`
const SearchButton =styled.button`
  height: 42px;
  width: 42px;
  background-color: white;
  display: grid;
  place-items: center;
  border: none;
  border-radius:0 22px 22px 0;
  svg {
  color:#01D277 ;
  font-size: 20px;
}
`

const SearchForm = () => {
  const [searchValue,setSearchValue] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  console.log(location.pathname)
  useEffect(() => {
    if (location.pathname.startsWith("/search") && params.search) {
      setSearchValue(params.search);
    }
  }, [location.pathname, params.search]);

  useEffect(() => {
    if(location.pathname == '/') setSearchValue('')
  },[location.pathname])
  const onClickSearch = (e) => {
    const search = searchValue

      //pass search using state
      navigate(
       '/search/'+search,
        {state:{search:search},
      })
  }

  return (
    <SearchInputs>
     <Search 
      type="text"
      placeholder='search'
      value={searchValue}
      name='search'
      onChange={(e)=>setSearchValue(e.target.value)}/>
      <SearchButton type='submit' onClick={onClickSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </SearchButton>
    </SearchInputs>
  )
}

export default SearchForm

