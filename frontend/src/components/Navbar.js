import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {

    const navigate = useNavigate()

    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
        console.log('Logging out')
        navigate('/')
    }

    if (user) {
        return ( 
            <header>
                <div className="navbar">
                    <div className="navbar-brand">
                        <Link to='/main' className="title is-1"><h1>Rate My Tutorial</h1></Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <Link to='/profile' className="button is-white mr-6"><span>Profile</span></Link>
                                </p>
                                <Link onClick={logout} className="button">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header>
            <div className="navbar">
                <div className="navbar-brand">
                <Link to='/' className="title is-1"><h1>Rate My Tutorial</h1></Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <Link to='/login'className="button is-light" ><span>Login</span></Link>
                            </p>
                            <Link to='/register' className="button is-primary"><h1>Sign Up</h1></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Navbar;


