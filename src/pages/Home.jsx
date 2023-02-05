import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import apiConf from '../apiConfig'
import ReactPaginate from 'react-paginate'

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
    <div>
      <h1>Popular Movies</h1>
      {movies && movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          
          </div>
      ))
}
<ReactPaginate
  nextLabel={">>"}
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
    </div>
  )
}

export default Home
 
export const moviesLoader = async({params}) => {
  const currentPage = params.page;
  
  const res = await fetch(apiConf.baseUrl + 'movie/popular' + apiConf.apiKey + '&page=' + currentPage)
  const data = await res.json()
  
  return data


}