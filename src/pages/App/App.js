// routes and components
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar";
import Mens from "../Mens";
import Womens from "../Womens";
import Kids from "../Kids";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage";
import UserLogOut from "../../components/UserLogOut";
// import Footer from "../../components/Footer";

// css
import "../../index.scss";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      <div className="header">
        <NavBar />

        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/*" element={<Navigate to="/" />} />
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<AuthPage setUser={setUser} />} />

            <Route
              path="/homepage"
              element={<UserLogOut setUser={setUser} />}
            />
          </Routes>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
