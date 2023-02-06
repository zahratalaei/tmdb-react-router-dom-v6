import { BrowserRouter, Routes, Route, MemoryRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom'
import Layout from './Layout'
import SearchPage, { searchMoviesLoader } from './pages/SearchPage'
import Home, { moviesLoader } from './pages/Home'
import MoviePage, { movieLoader } from './pages/MoviePage'
import './App.css'
import GlobalFonts from './fonts/fonts'
import MovieLayout from './MovieLayout'
import RootLayout from './RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={moviesLoader}/>
        <Route path='/:page' element={<Home />} loader={moviesLoader}/>
        {/* <Route path="/search" element={<SearchPage />} loader={searchMoviesLoader} /> */}
        {/* <Route path="/search" element={<SearchPage />} loader={searchMoviesLoader} /> */}
        <Route path="/search/:search" element={<SearchPage />} loader={searchMoviesLoader} />
        <Route path="/search/:search/:page" element={<SearchPage />} loader={searchMoviesLoader} />
        <Route path="/:page" element={<Home />} />
      </Route>
        <Route path="/moviePage/:id" element={<MoviePage />} loader={movieLoader}/>
      
    </Route>
  )
)
function App() {
  

  return (
  <>
    <GlobalFonts/>

    <RouterProvider router={router}/>
    </>
  )
}

export default App
