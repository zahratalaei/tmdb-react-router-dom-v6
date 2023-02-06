import React from 'react'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import apiConf from '../apiConfig'

const HeaderContainer = styled.div` 
  height:192px ;
  display:flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:flex-end ;
  background-image: radial-gradient(circle at 53.46% -21.35%, rgba(5, 112, 172, 0.46) 0%, rgba(8, 27, 35, 0) 100%);
  @media (min-width:460px){
  background-repeat:repeat;
  background-position:50%;
  background-size:404px auto,cover;
  }
  @media (max-width:460px){
  background-repeat:no-repeat;
  background-position:50%;
  background-size:460px auto;
  }
  @media (max-width:375px){
  background-repeat:no-repeat;
  background-position:50%;
  background-size:404px auto;
  }
     img{
      width:66px ;
     }

`
const Header = () => {
  return (
    <div>
     <HeaderContainer>
          <Link to='/' style={{marginBottom:"20px"}}>
               <img src={apiConf.logoUrl} alt="Home"/>
          </Link>
     <SearchForm/>

     </HeaderContainer>
     {/* <NavLink to="/"style={({isActive})=>{
          return isActive ?{color:'red'}:{}

     }}>Home</NavLink><br/> */}
    </div>
  )
}

export default Header