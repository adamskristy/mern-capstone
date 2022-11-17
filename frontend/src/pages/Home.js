import { Link, useNavigate } from "react-router-dom";

function Home() {
    return (
        <div className="container">

            <div className="level ">
                <div className="block level-item">
                    <p className="title mt-6">“Knowledge is power. Sharing knowledge is the key to unlocking that power.”</p>
                </div>
            </div>
            <div className="block has-text-centered">
                <span className="title is-4"> ― Martin Uzochukwu Ugwu</span>
            </div>
            <div className="block has-text-centered is-size-5 mt-6">
                <p>Knowledge can sometimes be difficult to find and that's why were counting on you. </p>
                <p>Help us find and share that knowledge.</p>
                <p>Sign up today to Link Share, and help somone else unlock their power.</p>
                <p className="block mt-6"><Link to='/register' className="button is-primary is-large"><h1>Sign Up</h1></Link></p>
            </div>
            <div className="section is-medium">
                <div className="level">
                    <span className="icon is-large">
                        <div className="level-item"> <i class="fa-solid fa-brain fa-5x"></i></div>
                    </span>
                    <span className="icon is-large">
                        <div className="level-item"> <i class="fa-solid fa-hand-fist fa-5x"></i></div>
                    </span>
                    <span className="icon is-large">
                        <div className="level-item"><i class="fa-solid fa-share fa-5x"></i></div>
                    </span>
                    <span className="icon is-large">
                        <div className="level-item"><i class="fa-solid fa-earth-americas fa-5x"></i></div>
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Home;