import React from "react";
import { useLoaderData, useLocation, useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import ReactPaginate from "react-paginate";
import Filters from "../components/Filters";
import apiConf from "../api/apiConfig";
import {
  Content,
  MoviesWrapper,
  MoviesFlexBox,
  TitleWrapper,
  Title,
} from "./Home";
const FilterPage = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const handlePageChange = (e) => {
    searchParams.set("page", e.selected + 1);
    setSearchParams(searchParams);
  };

  return (
    <Content>
      <Filters />

      <TitleWrapper>
        <Title>Filtered Movies</Title>
      </TitleWrapper>

      <MoviesWrapper>
        <MoviesFlexBox>
          {data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MoviesFlexBox>

        <ReactPaginate
          nextLabel=">>"
          previousLabel="<<"
          breakLabel="..."
          pageCount={data.total_pages}
          onPageChange={handlePageChange}
          forcePage={currentPage - 1}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </MoviesWrapper>
    </Content>
  );
};

export default FilterPage;


export const filterLoader = async ({ request }) => {
  const url = new URL(request.url);
  
console.log("url:",url)
  const query = url.searchParams.get("query");
  console.log("query:",query)
  const genre = url.searchParams.get("genre");
  const year = url.searchParams.get("year");
  const sortBy = url.searchParams.get("sort_by");
  const language = url.searchParams.get("language");
  const adult = url.searchParams.get("include_adult") || "false";
  const rate = url.searchParams.get("vote_average.gte");
  const page = url.searchParams.get("page") || 1;

  let apiUrl = "";

  // ✅ Use search endpoint if query is present
  if (query && query.trim() !== "") {
    apiUrl = `${apiConf.baseUrl}search/movie${apiConf.apiKey}&query=${encodeURIComponent(query)}&page=${page}`;

    // Only supported filters for search
    if (year) apiUrl += `&year=${year}`;
    if (language) apiUrl += `&language=${language}`;
    apiUrl += `&include_adult=${adult}`;
  } else {
    // ✅ Use discover endpoint if no search query
    apiUrl = `${apiConf.baseUrl}discover/movie${apiConf.apiKey}&page=${page}`;

    if (genre) apiUrl += `&with_genres=${genre}`;
    if (year) apiUrl += `&primary_release_year=${year}`;
    if (sortBy) apiUrl += `&sort_by=${sortBy}`;
    if (language) apiUrl += `&language=${language}`;
    if (rate) apiUrl += `&vote_average.gte=${rate}`;
    apiUrl += `&include_adult=${adult}`;
  }

  console.log("🔍 Final API URL:", apiUrl);

  const res = await fetch(apiUrl);
  if (!res.ok) {
    const message = await res.text();
    throw new Error(`Failed to fetch filtered results: ${res.status} - ${message}`);
  }

  return await res.json();
};

// export const filterLoader = async ({ request }) => {
  
//   const url = new URL(request.url);
//   const genre = url.searchParams.get("genre");
//   const year = url.searchParams.get("year");
//   const sortBy = url.searchParams.get("sort_by") || "popularity.desc";
//   const page = url.searchParams.get("page") || 1;
//   const language = url.searchParams.get("language");
//   const adult = url.searchParams.get("include_adult");
//   const rate = url.searchParams.get("vote_average.gte");

//   let fetchUrl = `${apiConf.baseUrl}discover/movie${apiConf.apiKey}&page=${page}`;
//   if (genre) fetchUrl += `&with_genres=${genre}`;
//   if (year) fetchUrl += `&primary_release_year=${year}`;
//   if (sortBy) fetchUrl += `&sort_by=${sortBy}`;
//   if (language) fetchUrl += `&language=${language}`;
//   if (adult) fetchUrl += `&include_adult=${adult}`;
//   if (rate) fetchUrl += `&vote_average.gte=${rate}`;

//   const res = await fetch(fetchUrl);
//   return await res.json();
// };
