import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    // want to implement logout functionality that toggles from "Sign Up" to "Log out" once the user is signed in.
    <>
      <div class="nav-bar">
        <div class="logo">
          <a href="/homepage">
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
          </ul>
        </div>
      </div>
    </>
  );
}
