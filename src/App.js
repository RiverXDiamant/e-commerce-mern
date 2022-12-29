// import styles from "./App.module.css";
import HomePage from "../src/pages/HomePage";
import NavBar from "./components/NavBar";

// css
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <HomePage />
    </div>
  );
}
