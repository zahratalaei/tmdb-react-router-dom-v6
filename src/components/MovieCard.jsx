import React from 'react'
import { Link } from 'react-router-dom'
import apiConf from '../apiConfig'
import styled from'styled-components'
import format from 'date-fns/format'
import defaultMovie from '../assets/defaultMovie.png'
const Poster = styled.img` 
    width: 100%;
    border-radius: 10px;
`
const CardContainer= styled.div` 
    width: 225px;
    margin: 1.5rem auto 0;
    justify-content: center;
    position: relative;
`
const YearDate = styled.p` 
font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #A1D1E5;
`
const Rate = styled.span` 
background-color: #01D277;
    color: #FFFFFF;
    width: 40px;
    height: 20px;
    text-align: center;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`
const MovieTitle=styled.h2` 
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #E5F7FF;
    margin-top: 12px;
    margin-bottom: 6px;
    white-space:wrap ;
`
const MovieCard = ({movie}) => {
  return (
     <CardContainer>
     <Link to={`/moviePage/${movie.id}`}>
     <Poster src={movie.poster_path ? apiConf.w500Image(movie.poster_path): defaultMovie} alt="" className='poster' />
     <MovieTitle className='card-title' >{movie.title}</MovieTitle>
     <YearDate>{movie.release_date && new Date(movie.release_date) ? format(new Date(movie.release_date),"MMMM yyyy"):''}</YearDate> 
     <Rate id="rate" >{(movie.vote_average * 10).toFixed(1)}%</Rate>
     </Link>
   </CardContainer>
  )
}

export default MovieCard