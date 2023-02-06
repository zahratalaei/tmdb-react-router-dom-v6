import React, { useState } from 'react'
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom'
import apiConf from '../apiConfig'
import ReactPaginate from 'react-paginate'
import MovieCard from '../components/MovieCard'
import {Content, MoviesFlexBox, MoviesWrapper, Title,TitleWrapper} from './Home'


const SearchPage = () => {
  const navigate = useNavigate()
  const data = useLoaderData()
  const searchMovies = data.results
  const location = useLocation()
  
  const {search} = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = data.total_pages

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected + 1)

    // navigate(`/search/${search}/${data.selected + 1}`)

    // when pass search and page using string query
    // navigate({pathname:`/search/${search}/${data.selected + 1}`,search:'?search='+search+'&page='+(currentPage+1)})

    //when pass search and page using state
    navigate({pathname:`/search/${search}/${data.selected + 1}`,
    state:{search:search,page:currentPage + 1},
    // search:'?search='+search+'&page='+(currentPage+1)
  })

        
  }
  return (
    <Content>
      <TitleWrapper>
        <Title>
          Results for {search}
        </Title>
      </TitleWrapper>
      <MoviesWrapper>
      <MoviesFlexBox>
      {searchMovies.map(movie =>(
          <MovieCard movie={movie} key={movie.id}/>
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
        containerClassName={"pagination justify-content-center"}
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

export default SearchPage
//LoaderFunction
export const searchMoviesLoader = async({params}) =>{
  const search=params.search
  const currentPage=params.page

  const response = await fetch(apiConf.baseUrl + 'search/movie' + apiConf.apiKey + '&query=' + search + '&page='+ currentPage)
   const data = await response.json()
  return data
}