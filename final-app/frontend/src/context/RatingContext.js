import { createContext, useReducer } from "react";

export const RatingsContext = createContext()

//take two arguments, previous state before changes, action
//check action type
//return new value that we want state to be
export const ratingsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RATINGS':
            //console.log(action)
            return {
                ratings: action.payload
                //rating is property
                //payload property on action that we pass into dispatch is array of all ratings
            }
        case 'CREATE_RATING':
            return {
                ratings: [action.payload, ...state.ratings]
                //return new array, but adding new rating
                //still want to include previous arrays, previous state
            }
        case 'DELETE_RATING':
            return {
                ratings: state.ratings.filter((r) => r._id !== action.payload._id)
                //filter through current ratings in current state
                //filter returns true if rating stays in the new array and false if not
                // filter out all the ratings that do not match the id
            }
        case 'UPDATE_RATING':
            return {
                ratings: state.ratings.filter((r) => r._id !== action.payload._id)
            }
        case 'FIND_RATING':
            return {
                ratings: state.ratings.filter((r) => r._id !== action.payload._id)
            }
        default:
            return state
    }
}

//provide context to whole application
//children represent what provider wraps --> App
export const RatingContextProvider = ({ children }) => {
    //pass two argurments, name of reducer and initial value for state
    const [state, dispatch] = useReducer(ratingsReducer, {
        ratings: null
    })
    //console.log(state)
    return (
        //allow every component to have access to value
        <RatingsContext.Provider value={{ ...state, dispatch }}> {/* provide properties not just whole object */}
            {children}
        </RatingsContext.Provider>
    )
}