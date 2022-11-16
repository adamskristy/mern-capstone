import { RatingsContext } from "../context/RatingContext";
import { useContext } from "react";

export const useRatingsContext = () => {
    const context = useContext(RatingsContext)
    //this hook returns the value of this context

    if (!context) {
        throw Error ('useRatingsContext must be used inside a RatingContextProvider')
    }

    return context
}