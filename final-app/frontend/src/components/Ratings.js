// import axios from "axios"
import { useEffect, useState } from "react";


import  RatingDetails  from "../components/RatingDetails";


function Ratings () {
    const [ratings, setRatings] = useState(null)

    useEffect(() => {
        const fetchRatings = async () => {
            const response = await fetch('http://localhost:8080/rate-my-tutorial')
            const data = await response.json()
            //console.log(data)

            if (response.ok) {
                setRatings(data)
            }
        }
        fetchRatings()
    }, [])

    return ( 
        <div className="home">
            <div className="ratings-container">
                {ratings && ratings.map((rating) => {
                    return(
                        // <p key={rating._id}>{rating.title}</p>
                        <RatingDetails key={rating._id} rating={rating} />
                    )
                })}
            </div>
        </div>
     );
}

export default Ratings ;

// useEffect(() => {
//     axios.get('http://localhost:8080/rate-my-tutorial').then((data) => {
//         console.log(data);
//         setWorkouts(data?.data);
//     });
// }, []);
