import { BrowserRouter, Routes, Route, MemoryRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom'
import Layout from './Layout'
import SearchPage, { searchMoviesLoader } from './pages/SearchPage'
import Home, { moviesLoader } from './pages/Home'
import MoviePage from './pages/MoviePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={moviesLoader}/>
      <Route path='/:page' element={<Home />} loader={moviesLoader}/>
      {/* <Route path="/search" element={<SearchPage />} loader={searchMoviesLoader} /> */}
      {/* <Route path="/search" element={<SearchPage />} loader={searchMoviesLoader} /> */}
      <Route path="/search/:search" element={<SearchPage />} loader={searchMoviesLoader} />
      <Route path="/search/:search/:page" element={<SearchPage />} loader={searchMoviesLoader} />
      <Route path="/:page" element={<Home />} />
      <Route path="/movie" element={<MoviePage />} />
    </Route>
  )
)
function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
