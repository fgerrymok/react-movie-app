import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {

const home = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#fc4d7a" d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>;

const moreInformationSvg = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#fc4d7a" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>

const star = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#fc4d7a" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>

  return (
    <footer>
      <div className="footer-logo">
        <Link to="/"><img src="/click-flicks/clickflicks.png" alt="click flicks logo" className="footer-logo" /></Link>
      </div>

      <nav className="footer-menu">
        <ul className="mobile-nav">
          <li className="nav-item">
            <Link to="/" className="nav-icon">{home}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-icon">{moreInformationSvg}</Link>
          </li>
          <li className="nav-item">
            <Link to="/favourites" className="nav-icon">{star}</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
