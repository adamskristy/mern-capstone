import { Link } from "react-router-dom";
import { useRatingsContext } from "../hooks/useRatingsContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

import ratingService from "../services/ratingService";

function RatingDetails({ rating }) {
  const { dispatch } = useRatingsContext();

  const handleDelete = async () => {
    try {
      //console.log(rating)

      const response = await ratingService.remove(rating._id);

      dispatch({ type: "DELETE_RATING", payload: response.data });

      console.log(response);
      console.log("successfully deleted");

      // alert("Rating Deleted")
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  return (
    <div className="box details">
      <div className="ratings-details-btns field is-grouped is-grouped-right buttons are-small">
        <button onClick={handleDelete} className="button is-danger is-light">
          Delete
        </button>
        <button className="button">
          <Link to={`/edit/${rating._id}`} rating={rating}>
            Edit
          </Link>
        </button>{" "}
        {/* need to setup params first to access later */}
      </div>
      <div className="block">
        <h3 className="title is-4">{rating.title}</h3>
        <p className="is-italic tag is-light mb-2">{rating.cost}</p>
        <p>{rating.type}</p>
        <p className="has-text-weight-bold">{rating.platform}</p>
        <p>{rating.notes}</p>
        <a href={rating.link} className="is-underlined">
          <p>Check it out</p>
        </a>
      </div>
      <p className="is-size-7">
        Submitted:{" "}
        {formatDistanceToNow(new Date(rating.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
}

export default RatingDetails;
