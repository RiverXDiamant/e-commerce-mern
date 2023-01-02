// routes and components

import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import NavBar from "./components/NavBar";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import SignUpForm from "./components/SignUpForm";

// css
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}
