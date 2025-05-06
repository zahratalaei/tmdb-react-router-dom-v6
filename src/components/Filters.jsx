import React, { useState, useEffect } from "react";
import { useFilters } from "../context/FilterContext";
import apiConf from "../api/apiConfig";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  padding: 16px;
  margin: 10px 0 30px 0;
  background-color: #1e2a38;
  border-radius: 8px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const sharedInputStyles = `
  padding: 10px;
  font-size: 14px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  border: none;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  ${sharedInputStyles}
`;
const Input = styled.input`
  ${sharedInputStyles}
`;
const ApplyButton = styled.button`
  ${sharedInputStyles}
  background-color: #03a9f4;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0288d1;
  }
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #fff;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  accent-color: #03a9f4;
`;

const Filters = () => {
  const { state, dispatch } = useFilters();
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${apiConf.baseUrl}genre/movie/list${apiConf.apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);
  const generateYearOptions = (
    start = 1950,
    end = new Date().getFullYear()
  ) => {
    const years = [];
    for (let y = end; y >= start; y--) {
      years.push(y);
    }
    return years;
  };

  const handleApply = () => {
    const params = new URLSearchParams();
    if (state.genre) params.set("genre", state.genre);
    if (state.year) params.set("year", state.year);
    if (state.sortBy) params.set("sort_by", state.sortBy);
    if (state.language) params.set("language", state.language);
    if (state.adult) params.set("include_adult", state.adult);
    if (state.rate) params.set("vote_average.gte", state.rate);

    navigate(`/filter?${params.toString()}`);
  };
  return (
    <FilterContainer>
      <Select
        value={state.genre}
        onChange={(e) =>
          dispatch({ type: "SET_GENRE", payload: e.target.value })
        }
      >
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </Select>

      <Select
        value={state.year}
        onChange={(e) =>
          dispatch({ type: "SET_YEAR", payload: e.target.value })
        }
      >
        <option value="">All Years</option>
        {Array.from({ length: 25 }).map((_, idx) => {
          const year = new Date().getFullYear() - idx;
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </Select>
      <Select
        value={state.language}
        onChange={(e) =>
          dispatch({ type: "SET_LANGUAGE", payload: e.target.value })
        }
      >
        <option value="">All Languages</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
      </Select>

      <Select
        value={state.rate}
        onChange={(e) =>
          dispatch({ type: "SET_RATE", payload: e.target.value })
        }
      >
        <option value="">All Ratings</option>
        <option value="5">5+ Rating</option>
        <option value="6">6+ Rating</option>
        <option value="7">7+ Rating</option>
        <option value="8">8+ Rating</option>
      </Select>
      <Select
        value={state.sortBy}
        onChange={(e) =>
          dispatch({ type: "SET_SORT", payload: e.target.value })
        }
      >
        <option value="popularity.desc">Popularity ↓</option>
        <option value="popularity.asc">Popularity ↑</option>
        <option value="release_date.desc">Release Date ↓</option>
        <option value="release_date.asc">Release Date ↑</option>
      </Select>
      <CheckboxWrapper>
        <Checkbox
          checked={state.adult === "true"}
          onChange={(e) =>
            dispatch({
              type: "SET_ADULT",
              payload: e.target.checked ? "true" : "false",
            })
          }
        />
        Adult Content
      </CheckboxWrapper>
      <ApplyButton onClick={handleApply}>Apply</ApplyButton>
    </FilterContainer>
  );
};

export default Filters;
