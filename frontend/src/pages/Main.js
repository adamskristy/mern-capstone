import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRatingsContext } from "../hooks/useRatingsContext";

import RatingDetails from "../components/RatingDetails";

import ratingService from '../services/ratingService'

function Main() {
    const navigate = useNavigate()

    const { ratings, dispatch } = useRatingsContext()

    const getAllRatings = async () => {

        try {
            const response = await ratingService.all()

            dispatch({ type: 'SET_RATINGS', payload: response.data })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllRatings()
    }, [])

    const handleClick = async () => {
        navigate('/add')
    }

    return (
        <div className="container">
            <div className="control p-2">
                <button onClick={handleClick} className="button is-primary">Submit New Share</button>
            </div>
            <div className="ratings-container">

                {ratings && ratings.map((rating) => {
                    return (
                        <RatingDetails key={rating._id} rating={rating} />
                    )
                })}
            </div>

            {/* need to pass user={user.username} */}
        </div>
    );
}

export default Main;
