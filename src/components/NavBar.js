import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

export default function NavBar({ name, setUser }) {
  function handleLogout() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <div class="nav-bar">
        <div class="logo">
          <a href="/">
            <img
              src="https://images.vans.com/is/image/VansBrand/ftb-modal-logo?wid=100&fmt=png-alpha"
              alt="foot the bill vans logo"
            />
          </a>
        </div>
        <div className="menu" role="navigation">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            &nbsp; | &nbsp;
            <li>
              <Link to="/mens">MENS</Link>
            </li>
            &nbsp; | &nbsp;
            <li>
              <Link to="/womens">WOMENS</Link>
            </li>
            &nbsp; | &nbsp;
            <li>
              <Link to="/kids">KIDS</Link>
            </li>
            &nbsp; | &nbsp;
            <li>
              <a
                href="https://www.vans.com/en-us/customs"
                target="_blank"
                rel="noopener noreferrer"
              >
                CUSTOMS
              </a>
            </li>
            &nbsp; | &nbsp;
            <li>
              <a
                href="https://www.vans.com/en-us/footthebill"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Foot The Bill
              </a>
            </li>
          </ul>
        </div>
        <div className="greeting">
          <p>Welcome, {name}</p>
        </div>
        <div class="icons" role="navigation">
          <ul>
            <li>
              <i class="fa fa-sign-in"></i>
              <Link to="/login"> &nbsp;Login</Link>
            </li>
            <li>
              <i class="fa fa-search"></i>
              &nbsp;Search
            </li>
            <li>
              <i class="fa fa-shopping-cart"></i>
              &nbsp;Cart
            </li>
            <li>
              &nbsp;&nbsp;
              <Link to="" onClick={handleLogout}>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
