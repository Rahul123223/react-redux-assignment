import "./css/navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <h2>Masai Shop</h2>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <p>cart page</p>
        </div>
      </div>
    </>
  );
};
