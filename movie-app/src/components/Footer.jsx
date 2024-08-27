import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {

const home = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766.67 683.33" className="home-icon">
  <path fill="#fc4a78" fillRule="evenodd" d="M360.34,9.2c12.88-12.26,33.1-12.26,45.98,0l266.67,253.97,83.33,79.37c13.33,12.69,13.84,33.79,1.15,47.13-12.69,13.33-33.79,13.84-47.13,1.15l-27.01-25.72v251.59c0,36.82-29.85,66.67-66.67,66.67H150c-36.82,0-66.67-29.85-66.67-66.67v-251.59l-27.01,25.72c-13.33,12.7-34.43,12.18-47.13-1.15-12.7-13.33-12.18-34.43,1.15-47.13l83.33-79.37L360.34,9.2ZM150,301.59v315.08h133.33v-166.67c0-55.23,44.77-100,100-100s100,44.77,100,100v166.67h133.33v-315.08l-233.33-222.22-233.33,222.22ZM416.67,616.67v-166.67c0-18.41-14.92-33.33-33.33-33.33s-33.33,14.92-33.33,33.33v166.67h66.67Z"/>
</svg>);

const moreInformationSvg = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 716.67 716.67" className="home-icon">
  <circle
    cx="358.33"
    cy="358.33"
    r="333.33"
    fill="none"
    stroke="#fc4a78"
    strokeMiterlimit="133.33"
    strokeWidth="50"
  />
  <path
    d="M358.33,525v-200"
    fill="none"
    stroke="#fc4a78"
    strokeLinecap="round"
    strokeMiterlimit="133.33"
    strokeWidth="50"
  />
  <circle
    cx="358.33"
    cy="225"
    r="33.33"
    fill="#fc4a78"
  />
</svg>);

  const star = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750.51 717.93" className="icon">
  <path
    d="M346.21,60.05c9.2-20.64,13.8-30.96,20.21-34.14,5.56-2.76,12.1-2.76,17.66,0,6.41,3.18,11.01,13.5,20.21,34.14l73.28,164.4c2.72,6.1,4.08,9.15,6.19,11.49,1.86,2.07,4.14,3.72,6.68,4.85,2.87,1.28,6.2,1.63,12.84,2.33l179,18.89c22.47,2.37,33.71,3.56,38.71,8.67,4.34,4.44,6.36,10.65,5.46,16.8-1.04,7.07-9.43,14.64-26.22,29.77l-133.72,120.5c-4.96,4.47-7.44,6.71-9.01,9.43-1.39,2.41-2.26,5.09-2.55,7.85-.33,3.13.36,6.39,1.75,12.93l37.35,176.08c4.69,22.11,7.03,33.16,3.72,39.49-2.88,5.51-8.17,9.35-14.29,10.38-7.05,1.19-16.84-4.45-36.41-15.74l-155.92-89.93c-5.79-3.34-8.68-5-11.76-5.66-2.72-.58-5.54-.58-8.26,0-3.08.66-5.97,2.32-11.76,5.66l-155.92,89.93c-19.58,11.29-29.36,16.93-36.41,15.74-6.12-1.04-11.41-4.88-14.29-10.38-3.31-6.33-.97-17.39,3.72-39.49l37.35-176.08c1.39-6.54,2.08-9.8,1.75-12.93-.29-2.77-1.16-5.44-2.55-7.85-1.57-2.72-4.05-4.96-9.02-9.43l-133.71-120.5c-16.79-15.13-25.18-22.69-26.22-29.77-.91-6.15,1.11-12.36,5.46-16.8,5-5.11,16.24-6.3,38.71-8.67l179-18.89c6.64-.7,9.97-1.05,12.84-2.33,2.54-1.13,4.82-2.79,6.68-4.85,2.1-2.34,3.46-5.39,6.18-11.49l73.28-164.4Z"
    fill="none"
    stroke="#fc4a78"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="47.69"
  />
</svg>);


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
