import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

export default function NavBar({ name, setUser }) {
  function handleLogout() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }
  return (
    // want to implement logout functionality that toggles from "Sign Up" to "Log out" once the user is signed in.
    <>
      <div className="nav-container">
        <nav>
          <Link to="/">Home</Link>
          &nbsp; | &nbsp;
          <Link to="/form">Sign Up</Link>
          &nbsp; | &nbsp;
          <Link to="/cart">Cart</Link>
          &nbsp;&nbsp;
          <span>Welcome, {name}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogout}>
            Log Out
          </Link>
        </nav>
      </div>
    </>
  );
}
