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
                <div className="navbar p-3 mb-6 is-primary ">
                <div className="navbar-brand">
                        <div className="navbar-item">
                            <span className="icon is-large">
                                <span className="icon"><i className="fa-solid fa-bullhorn fa-3x"></i></span>
                            </span>
                        </div>
                        <Link to='/main' className="title is-1"><h1 className="has-text-white has-text-weight-bold">Link Share</h1></Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <Link to='/profile' className="button is-primary mr-6"><span>Profile</span></Link>
                                </p>
                                <button className="button" onClick={logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header>
                <div className="navbar p-3 mb-6 is-primary">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <span className="icon is-large">
                                <span className="icon"><i className="fa-solid fa-bullhorn fa-3x"></i></span>
                            </span>
                        </div>
                        <Link to='/' className="title is-1"><h1 className="has-text-white has-text-weight-bold">Link Share</h1></Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <Link to='/login' className="button is-primary" ><span>Login</span></Link>
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


