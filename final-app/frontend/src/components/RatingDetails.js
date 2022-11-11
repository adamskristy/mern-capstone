import axios from "axios";

function RatingDetails ({rating}) {
    
    const handleClick = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080${rating._id}`)
            console.log('successfully deleted')
        }catch (error){
            console.log(error) 
        }
    }

    return ( 
        <div className="rating-details">
            <button onClick={handleClick}>Delete</button>
            {/* <span onClick={handleClick}>Delete</span> */}
            <h3>{rating.title}</h3>
            <p>{rating.cost}</p>
            <p>{rating.type}</p>
            <p>{rating.platform}</p>
            <a href={rating.link}><p>Check it out</p></a>
            <p>{rating.notes}</p>
            <p>Submitted: {rating.createdAt}</p>
        </div>
     );
}

export default RatingDetails ;