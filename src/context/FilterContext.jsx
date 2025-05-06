import { createContext, useContext } from "react";

const FilterContext = createContext()
const initialState = {
    genre:"",
    year:"",
    sortedBy:"popularity.desc",
}

function filterReducer(state,action){
    switch(action.type){
        case "SET_GENRE":
            return {...state,genre:action.payload}
        case "SET_YEAR":
            return {...state,year:action.payload}
        case "SET_SORTED_BY":
            return {...state,sortedBy:action.payload}
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