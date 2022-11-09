import { useEffect, useState } from "react";

import Ratings from "../components/Ratings"
import RatingForm from "../components/RatingForm";


function Home () {
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
                <Ratings />
                <RatingForm  />
        </div>
     );
}

export default Home ;

