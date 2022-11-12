import { useState, } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Add from "./pages/Add";

import Navbar from "./components/Navbar";


function App() {

    const [user, setUser] = useState({})
    //const [admin, setAdmin] = useState(false)

    let routes;

    if (user.username) {
        routes = (
            <Routes>
                <Route path="/" element={<Home user={user.username} />} />
                <Route
                    path="/profile"
                    element={
                        <Profile
                            username={user.username}
                            email={user.email}
                        />
                    }
                />
                <Route path='/add' element={<Add user={user.username} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        )
    }


    return (
        <div>
            <Navbar user={user.username} setUser={setUser} />
            {routes}
        </div>
    );
}

export default App;

