import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RatingDetails from "../components/RatingDetails";


import ratingService from '../services/ratingService'

function Profile({ username, email }) {
    const navigate = useNavigate()
    const [ratings, setRatings] = useState(null)

    const getUserRatings = async () => {

        try {
            const response = await ratingService.index()

            setRatings(response.data.rating)

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
            <div className="container p-6">
                <div className="profile-details block ">
                    <h1 className="title">Profile</h1>
                    <h3 className="title is-5">Account Information</h3>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                </div>
                <div className="field p-4">
                    <button onClick={handleClick} className="button is-primary">Submit New Share</button>
                </div>

                <div className="profile-ratings">

                    {ratings ? ratings.map((rating) => {
                        return (
                            <RatingDetails key={rating._id} rating={rating} />
                        )
                    }) : ( <div>You haven't submitted any shares yet.</div> 
                )}

                </div>
            </div>
        );
    
}

export default Profile;