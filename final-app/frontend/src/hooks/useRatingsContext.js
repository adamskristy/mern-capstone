import { RatingsContext } from "../context/RatingContext";
import { useContext } from "react";

export const useRatingsContext = () => {
    const context = useContext(RatingsContext)

    if (!context) {
        throw Error ('useRatingsContext must be used inside a RatingContextProvider')
    }

    return context
}