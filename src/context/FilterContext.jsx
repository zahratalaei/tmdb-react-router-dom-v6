import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext()

const initialState = {
    genre: "",
    year: "",
    sortBy: "popularity.desc",
    language: "",
    adult: "false",
    rate: "",
    query:"",
  };
  
function filterReducer(state,action){
    switch(action.type){
        case "SET_GENRE":
            return {...state,genre:action.payload}
        case "SET_YEAR":
            return {...state,year:action.payload}
        case "SET_SORTED_BY":
            return {...state,sortedBy:action.payload}
        case "SET_ADULT":
            return { ...state, adult: action.payload };
        case "SET_RATE":
            return { ...state, rate: action.payload };
        case "SET_LANGUAGE":
            return { ...state, language: action.payload };
        case "SET_QUERY":
            return { ...state, query: action.payload };
        default:
            return state
    }
}

export function FilterProvider({children}){
    const [state, dispatch] = useReducer(filterReducer,initialState)
    return(
        <FilterContext.Provider value={{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilters(){
    return useContext(FilterContext)
}