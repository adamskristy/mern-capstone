import { useState } from "react";

import authService from '../services/authService'
import userService from '../services/userService'


function Login({ setUser }) {

    let [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await authService.login(form)

            localStorage.setItem("token", response.data.token)

            const info = await userService.info()

            console.log(response, info)

            
            setUser(info.data)
            alert('Login Successful')


        } catch (error) {
            //console.log(error)
            alert(error.response.data.error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;