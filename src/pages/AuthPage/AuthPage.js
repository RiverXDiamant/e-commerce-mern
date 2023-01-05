import { useState } from "react";

import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div className="auth-container">
        <div className="auth-btn">
          <h3 onClick={() => setShowLogin(!showLogin)}>
            <button type="submit" id="signupBtn">
              {showLogin ? "SIGN UP" : "LOG IN"}
            </button>
          </h3>
        </div>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
