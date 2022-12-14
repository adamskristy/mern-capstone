import { useState } from "react";

import authService from "../services/authService";
import userService from "../services/userService";

function Login({ setUser }) {
  let [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(form);

      localStorage.setItem("token", response.data.token);

      const info = await userService.info();

      console.log(response, info);

      setUser(info.data);
      alert("Login Successful");
    } catch (error) {
      //console.log(error)
      alert(error.response.data.error);
    }
  };

  return (
    <div className="form container p-6">
      <div className="box">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <div className="control">
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={form.username}
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <div className="control">
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={form.password}
                className="input"
              />
            </div>
          </div>
          <div>
            <button className="button is-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
