import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Movie App</h1>
      <ul className="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
