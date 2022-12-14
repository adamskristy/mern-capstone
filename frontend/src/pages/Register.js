import { useState } from "react";

import authService from "../services/authService";
import userService from "../services/userService";

function Register({ setUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await authService.register(form);

      localStorage.setItem("token", response.data.token);

      const info = await userService.info();

      setUser(info.data);
      alert("Registered");

      setIsLoading(false);
    } catch (error) {
      alert(error.response.data.error);
      setIsLoading(false);
    }
  };

  return (
    <div className="form container p-6">
      <div className="box">
        <h1 className="title">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={form.username}
              className="input"
            />
          </div>
          <div className="field">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              className="input"
            />
          </div>
          <label htmlFor="password" className="label">
            Password:
          </label>
          <div className="field">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              className="input"
            />
          </div>
          <div>
          <button className="button is-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
