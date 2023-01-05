// LoginForm.jsx

import { useState } from "react";
import * as usersService from "../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <div className="form-box" onSubmit={handleSubmit}>
        <h1 id="title">Sign In</h1>
        <form autoComplete="off">
          <div className="input-group">
            <div className="input-field"></div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
            />

            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="btn-field">
            <button type="submit" id="signupBtn">
              SUBMIT
            </button>
          </div>
        </form>
        <br />
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </div>
  );
}
