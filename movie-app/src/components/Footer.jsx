import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/"><img src="/clickflicks.png" alt="click flicks logo" className="footer-logo" /></Link>
      </div>
    </footer>
  );
}

export default Footer;
