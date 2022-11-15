import { createContext, useReducer } from "react";

export const RatingsContext = createContext()

export const ratingsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RATING':
            return {
                ratings: action.paylod
            }
        case 'CREATE_RATING':
            return {
                ratings: [action.payload, ...state.ratings]
            }
        default:
            return state
    }

}

export const RatingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ratingsReducer, {
        ratings: null
    })

    return (
        <RatingsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </RatingsContext.Provider>
    )
}