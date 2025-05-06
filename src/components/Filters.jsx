import React,{useState} from 'react'
import { useFilters } from '../context/FilterContext'
import apiConf from '../api/apiConfig'
const Filters = ({onApply}) => {
    const [state, dispatch] = useFilters()
    const [genre, setGenre] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiConf.apiKey}`)
        .then(res => res.json())
        .then(data => {
            setGenre(data.genres)
        });
    }
    , [])
    return (
        <div className="filter-container">
          <select value={state.genre} onChange={(e) => dispatch({ type: "SET_GENRE", payload: e.target.value })}>
            <option value="">All Genres</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
    
          <input
            type="number"
            placeholder="Year"
            value={state.year}
            onChange={(e) => dispatch({ type: "SET_YEAR", payload: e.target.value })}
          />
    
          <select value={state.sortBy} onChange={(e) => dispatch({ type: "SET_SORT", payload: e.target.value })}>
            <option value="popularity.desc">Popularity ↓</option>
            <option value="popularity.asc">Popularity ↑</option>
            <option value="release_date.desc">Release Date ↓</option>
            <option value="release_date.asc">Release Date ↑</option>
          </select>
    
          <button onClick={onApply}>Apply</button>
        </div>
      );
}

export default Filters