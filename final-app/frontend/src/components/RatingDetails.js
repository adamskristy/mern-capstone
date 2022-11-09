function RatingDetails ({rating}) {
    return ( 
        <div className="rating-details">
            <span>{rating.cost}</span>
            <p>{rating.type}</p>
            <p>{rating.platform}</p>
            <h3>{rating.title}</h3>
            <a href={rating.link}><p>Check it out</p></a>
            <p>{rating.notes}</p>
            <p>{rating.stars}/5</p>
            <p>Submitted: {rating.createdAt}</p>
        </div>
     );
}

export default RatingDetails ;