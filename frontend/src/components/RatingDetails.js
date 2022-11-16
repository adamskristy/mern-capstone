import { Link } from "react-router-dom";

import { useRatingsContext } from "../hooks/useRatingsContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

import ratingService from '../services/ratingService'

function RatingDetails({ rating }) {
    const { dispatch } = useRatingsContext()

    const handleDelete = async () => {


        try {
            //console.log(rating)
            
            const response = await ratingService.remove(rating._id)

            dispatch({ type: 'DELETE_RATING', payload: response.data })

            console.log(response)
            console.log('successfully deleted')

            // alert("Rating Deleted")
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
        }
    }

    return (
        <div className="rating-details">
            <div className="ratings-details-btns">
                <button onClick={handleDelete}>Delete</button>
                <Link to={`/edit/${rating._id}`} rating={rating}><button>Edit</button></Link> {/* need to setup params first to access later */}
            </div>
            <h3>{rating.title}</h3>
            <p>{rating.cost}</p>
            <p>{rating.type}</p>
            <p>{rating.platform}</p>
            <p>{rating.notes}</p>
            <a href={rating.link}><p>Check it out</p></a>
            <p>Submitted: {formatDistanceToNow(new Date(rating.createdAt), { addSuffix: true })}</p>
        </div>
    );
}

export default RatingDetails;