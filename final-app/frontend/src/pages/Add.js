import RatingForm from "../components/RatingForm";

function Add({ user }) {
    return (
        <div>
            <h1>Submit a New Rating</h1>
            <RatingForm user={user.username} />
        </div>
    );
}

export default Add;