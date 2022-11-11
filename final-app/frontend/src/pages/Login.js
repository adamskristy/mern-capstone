import axios from 'axios'
import { useState } from "react";

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

            const response = await axios.post('http://localhost:8080/auth/login', form)
            const info = await axios.get('http://localhost:8080/user/info/' + form.username)

            console.log(response, info)

            localStorage.setItem("token", response.data.token)
            setUser(info.data)
            alert('Login Successful')

        } catch (error) {
            //console.log(error)
            alert(error.response.data.error)
        }
    }

    return (
        <>
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
        </>
    );
}

export default Login;