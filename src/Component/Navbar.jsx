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
          <p>Cart</p>
        </div>
      </div>
    </>
  );
};
