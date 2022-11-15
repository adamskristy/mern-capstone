import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RatingDetails from "../components/RatingDetails";

function Profile({ username, email }) {
    const navigate = useNavigate()
    const [ratings, setRatings] = useState(null)

    const getUserRatings = async () => {

        let token = localStorage.getItem("token")

        try {
            const response = await axios.get(`http://localhost:8080/${username}/index`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            setRatings(response.data.rating)
            //console.log(response.data)

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


    const loaded = () => {
        return (
            <div className="profile">
                <div className="profile-details">
                    <h1>Profile</h1>
                    <h3>Account Information</h3>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                </div>
        
                    <button onClick={handleClick}>Submit new rating</button>
                    
                
                <div className="profile-ratings">
                
                    {ratings && ratings.map((rating) => {
                        return (
                            <RatingDetails key={rating._id} rating={rating} />
                        )
                    })}

                    
                </div>
            </div>
        );
    }

    const loading = () => {
        return (
            <div className="profile">
                <div className="profile-ratings">
                    <h1>Profile</h1>
                    <h3>Account Information</h3>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                </div>
                    <button onClick={handleClick}>Submit new rating</button>
                <div className="ratings-container">
                   <h2>No ratings to display...</h2>
                </div>
            </div>
        );
    }
    return ratings ? loaded() : loading()
}

export default Profile;