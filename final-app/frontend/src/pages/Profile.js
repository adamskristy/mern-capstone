import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RatingDetails from "../components/RatingDetails";

function Profile({ username, email }) {
    const navigate = useNavigate()
    const [ratings, setRatings] = useState(null)

    const getUserRatings = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/info/${username}/index`)
            setRatings(response.data)
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserRatings()
    }, [])

    const handleClick = async () => {
        navigate('/add')
    }

    return (
        <div className="profile">
            <div>
                <h1>Profile</h1>
                <h3>Account Information</h3>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
            </div>
            <button onClick={handleClick}>Submit new rating</button>

            <div className="ratings-container">
                {ratings && ratings.map((rating) => {
                    return (
                        <RatingDetails key={rating._id} rating={rating} />
                    )
                })}
            </div>
        </div>
    );
}

export default Profile;