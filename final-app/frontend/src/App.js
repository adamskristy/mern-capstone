import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";


import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

import Navbar from "./components/Navbar";


let initialRender = true

function App() {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const currentUserInfo = async (token) => {
        try {
  
            const info = await axios.get('http://localhost:8080/user/info/:username', {
                headers: {
                    'Authorization': ` Bearer ${token}`
                }
            })
  
            const { username, email } = info.data
            setUser({ username, email })
            
        } catch (error) {
  
            let message = error.response.data.error
  
            if (message.includes('expire')) {
                localStorage.removeItem('token')
            }
            
            //console.log(message)
  
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {

        let token = localStorage.getItem('token')
  
        if (initialRender) {
            if (token) {
                currentUserInfo(token)
                initialRender = false
            } else {
                setIsLoading(false)
            }
        }
  
    }, [])
  
  let routes;
  let loggedIn = user.username

  if (!isLoading) {
    if (loggedIn) {
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
                <Route path='/edit' element={<Edit user={user.username} />} />
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
    }

    return (
        <div>
            <Navbar user={user.username} setUser={setUser} />
            {routes}
        </div>
    );
}

export default App;

