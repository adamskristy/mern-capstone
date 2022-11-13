import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RatingDetails from "../components/RatingDetails";

function Ratings() {
    const navigate = useNavigate()
    const [ratings, setRatings] = useState(null)


    const getAllRatings = async () => {

        let token = localStorage.getItem("token")

        try {
            const response = await axios.get('http://localhost:8080', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            setRatings(response.data)
            //console.log(response)

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
        <div className="home">

            <div className="ratings-container">
                {ratings && ratings.map((rating) => {
                    return (
                        <RatingDetails key={rating._id} rating={rating} />
                    )
                })}
            </div>
            <div>
                <button onClick={handleClick}>Submit new rating</button>
            </div>
            {/* need to pass user={user.username} */}
        </div>
    );
}

export default Ratings;
