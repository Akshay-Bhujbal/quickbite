import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">QuickBite</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/menu">Menu</Link>
			  <Link to="/cart">Cart</Link>
			  <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;