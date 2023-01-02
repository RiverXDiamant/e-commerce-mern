import React from "react";
import { ReactDOM } from "react";

import { Link } from "react-router-dom";

export default function SignUpForm() {
  let signupBtn = document.getElementById("signupBtn");
  let signinBtn = document.getElementById("signinBtn");
  let nameField = document.getElementById("nameField");
  let title = document.getElementById("title");

  // ! Finish Button Click Events for Sign Up Form

  // ReactDOM.render(
  //   signinBtn.onclick = function () {
  //     nameField.style.maxHeight = "0";
  //     title.innerHTML = "Sign In";
  //     signupBtn.classList.add("disable");
  //     signinBtn.classList.remove("disable");
  //   },
  //   signupBtn.onclick = function () {
  //     nameField.style.maxHeight = "60px";
  //     title.innerHTML = "Sign Up";
  //     signupBtn.classList.remove("disable");
  //     signinBtn.classList.add("disable");
  // )
  return (
    <>
      <div className="signUpForm">
        <div class="form-box">
          <h1 id="title">Sign Up</h1>
          <form>
            <div class="input-group">
              <div class="input-field" id="nameField">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="Name" />
              </div>

              <div class="input-field">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>

              <div class="input-field">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <p>
                Forgot Password <Link to="#">Click Here</Link>
              </p>
            </div>

            <div class="btn-field">
              <button type="button" id="signupBtn">
                Sign Up
              </button>
              <button type="button" id="signinBtn" class="disable">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
