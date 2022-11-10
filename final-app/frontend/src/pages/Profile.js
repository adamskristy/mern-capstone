import { useNavigate } from "react-router-dom";

function Profile () {
    const navigate = useNavigate()
    const handleClick= async () => {
        navigate('/add')
    }

    return ( 
        <div className="profile">
            <h1>Profile</h1>

            <button onClick={handleClick}>Submit new rating</button>
        </div>
     );
}

export default Profile ;