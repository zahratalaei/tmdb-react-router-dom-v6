import React from 'react'
import { Link,useLoaderData,useNavigate,useNavigation,useParams, useSearchParams } from 'react-router-dom';
import apiConf from '../apiConfig';
import backIcon from '../assets/TMDB.png';
import format from 'date-fns/format';
import styled from 'styled-components';
const Title = styled.h2` 
    font-family:'Montserrat' ;
    font-size:28px ;
    font-weight:700px ;
    line-height:30px ;
    color:#E3F4FC ;
`
const Back = styled.button` 
position:absolute ;
width:16.3px ;
height:18.75px ;
top:35.13px ;
left:21.72px ;
background-color: transparent;
border:none ;
cursor: pointer;
`
const Backdrop = styled.div` 
height:50vh ;
left:0 ;
right:0 ;
top:0 ;
bottom:76.75%;
background-image:url(${props => props.bg});
background-repeat:no-repeat;
background-size:cover;
background-position:center ;
`
const DetailsWrapper = styled.div` 
display:flex ;
flex-direction: row ;
font-family: 'Montserrat', sans-serif;
position: absolute;
top: 45vh;
left:20px ;
`
const MoviePoster = styled.div` 
width:140px ;
height:213px ;
min-width:140px ;
img{
    width:100% ;
    border-radius:10px;
    filter:drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.5));
}
`
const Details = styled.div` 
margin-left:18px;
margin-top:21px ;
display:flex ;
flex-direction:column ;
justify-content:flex-end ;
/* word-wrap:none; */
div{
    font-family:'Montserrat' ;
    color:#B8D8E5 ;
    font-size:12px ;
    font-weight:400 ;
    line-height:21px ;
    font-style:normal ;
}
`
const Line = styled.hr` 
position:relative ;
top:179px ;
width:80% ;
margin-left:auto;
margin-right:auto;
border:1px solid #0F303D ;
`
const Desc =styled.div` 
margin:24px 21px 326px 21px;
position:relative ;
top:179px ;
h2{
    font-family:'Montserrat';
    font-size:20px ;
    font-weight:700 ;
    line-height:24px ;
    color:#E3F4FC ;
    margin-bottom:12px;
}
p{
    font-size: 16px;
    font-weight:400 ;
    line-height:24px ;
    color: #9FBBC7;
    font-family: 'Roboto', sans-serif;
}
`
const MoviePage = () => {
  const { id} = useParams();
  const movie = useLoaderData()
  const navigate = useNavigate()
  return (
    <main>
    <article>
    
      <Backdrop bg={apiConf.w500Image(movie.backdrop_path)}/>
      <Back onClick={() => navigate(-1)}>
          <img src={backIcon} alt="" />
      </Back>
      <DetailsWrapper>
          <MoviePoster>
              <img src={movie.poster_path && apiConf.w500Image(movie.poster_path)} alt="" />
          </MoviePoster>
          <Details>
              <Title>{movie.title}</Title>
              <div>
              <p><span id='year'>{movie.release_date ? format(new Date(movie.release_date),"Y"):'invalid date'} </span> . <span>{Math.round(movie.vote_average * 10)}%  User Score</span></p>
              <p><span id='hour'> {Math.floor(movie.runtime/60)}h</span><span id='second'> {movie.runtime %60}min</span></p>
              </div>
          </Details> 
        </DetailsWrapper>
        <Line/>
        <Desc>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
        </Desc>
    </article>
</main>
  )
}

export default MoviePage

export const movieLoader = async ({params}) => {
  const {id} = params;
  const response = await fetch(apiConf.baseUrl + '/movie/' + id + apiConf.apiKey);
  const data = await response.json();
  return data;

}