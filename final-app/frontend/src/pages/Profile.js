import { useNavigate } from "react-router-dom";

function Profile({ username, email }) {
    const navigate = useNavigate()
    const handleClick = async () => {
        navigate('/add')
    }

    return (
        <div className="profile">
            <h1>Profile</h1>
            <h3>Account Information</h3>
            <p>Username: {username}</p>
            <p>Email: {email}</p>

            <button onClick={handleClick}>Submit new rating</button>
        </div>
    );
}

export default Profile;