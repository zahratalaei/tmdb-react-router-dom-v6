import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import apiConf from '../apiConfig'
import styled from 'styled-components'
import MovieCard from '../components/MovieCard'
import ReactPaginate from 'react-paginate'


export const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #e3f4fc;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left:20px;
  margin-top: 20px;

`; 

export const MoviesFlexBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  
`;
export const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 20px;
`;
export const Content = styled.div`
margin: 0 auto;
 @media(min-width:375px){
    width: 100%;

  }
  @media(min-width:460px){
    width: 90%;

  }
  @media(min-width:1200px){
    width: 70%;

  }
  
`

const Home = () => {
  const data = useLoaderData()
  const navigate = useNavigate()
  
  const movies = data.results
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = data.total_pages
  
  const handlePageClick = async (data) => {
    setCurrentPage(data.selected + 1)
      navigate(`/${data.selected + 1}`)
        
  }
  
  return (
    <Content>
      <TitleWrapper>
        <Title>Popular Movies</Title>
      </TitleWrapper>
      <MoviesWrapper>
        <MoviesFlexBox>
        {movies && movies.map(movie => (
          <MovieCard movie = {movie} key={movie.id} />
          ))}
        </MoviesFlexBox>
          
        <ReactPaginate 
          nextLabel={">>"}
          previousLabel={"<<"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={0}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          forcePage={currentPage-1}
        />
      </MoviesWrapper>
    </Content>
  )
}

export default Home
 
export const moviesLoader = async({params}) => {
  const currentPage = params.page;
  
  const res = await fetch(apiConf.baseUrl + 'movie/popular' + apiConf.apiKey + '&page=' + currentPage)
  const data = await res.json()
  return data

}