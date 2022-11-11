import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <header>
            <div className="nav">
                <Link to='/'><h1>Rate My Tutorial</h1></Link>
                <Link to='/login'><h1>Login</h1></Link>
                <Link to='/register'><h1>Register</h1></Link>
                <Link to='/profile'><h1>Profile</h1></Link>
                <Link>Logout</Link>
            </div>
        </header>
     );
}

export default Navbar;