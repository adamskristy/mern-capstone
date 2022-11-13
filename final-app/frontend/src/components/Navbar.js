import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {

    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
        console.log('Logging out')
    }

    if (user) {
        return ( 
            <header>
                <div className="nav">
                    <Link to='/'><h1>Rate My Tutorial</h1></Link>
                    <Link to='/profile'><h1>Profile</h1></Link>
                    <Link onClick={logout}>Logout</Link>
                </div>
            </header>
        );
    } else {
        return (
            <header>
            <div className="nav">
                <h1>Rate My Tutorial</h1>
                <Link to='/login'><h1>Login</h1></Link>
                <Link to='/register'><h1>Register</h1></Link>
            </div>
        </header>
        )
    }
}

export default Navbar;