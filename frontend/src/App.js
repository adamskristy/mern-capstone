import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import './App.css';

import Home from "./pages/Home";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

import userService from './services/userService'

let initialRender = true

function App() {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const currentUserInfo = async () => {
        
        try {
         
            const info = await userService.info()
  
            const { username, email } = info.data
          
            setUser({ username, email })
            
        } catch (error) {
  
            let message = error.response.data.error
  
            if (message.includes('expire')) {
                localStorage.removeItem('token')
            }
            
            
  
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
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main user={user.username} />} />
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
                <Route path='/edit/:id' element={<Edit user={user.username} />} /> {/* need to setup params first to access later */}
                <Route path="*" element={<Navigate to="/main" />} />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
                <Route path="*" element={<Navigate to="/" />} />
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

