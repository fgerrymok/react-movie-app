import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {

  //change nav bg on scroll
  const [navBG, setNavBG] = useState(false)

  const changeBG = () => {
    if (window.scrollY >= 10) {
      setNavBG(true)
    } else {
      setNavBG(false)
    }
  }

  window.addEventListener('scroll', changeBG)

  return (
    <header>
      <div className="mobile-logo">
        <Link to="/">
          <img src="/clickflicks.png" alt="logo" />
        </Link>
      </div>
      <nav className={navBG ? 'navBar active' : 'navBar'}>
        <div>
          <Link to="/"><img src="/clickflicks.png" alt="click flicks logo" className="logo" /></Link>
        </div>
        <ul className="main-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/favourites" className="nav-link">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
