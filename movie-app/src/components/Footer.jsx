import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  // const home = (
  // <svg className="home-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 18.5H6.5V8.66667L3 11L12 5L21 11L17.5 8.66667V18.5H13.5M10.5 18.5V13.5H13.5V18.5M10.5 18.5H13.5" stroke="#FC4A78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)
  // const home = (
  //   <svg className="home-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">
  //     <g id="SVGRepo_bgCarrier" stroke-width="0" />
  //     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
  //     <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z" fill="#fc4a78" /> </g></svg>)

// const home = (<svg className="home-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z" fill="#fc4a78"/>
// </svg>)

const home = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766.67 683.33" className="home-icon">
  <path fill="#fc4a78" fillRule="evenodd" d="M360.34,9.2c12.88-12.26,33.1-12.26,45.98,0l266.67,253.97,83.33,79.37c13.33,12.69,13.84,33.79,1.15,47.13-12.69,13.33-33.79,13.84-47.13,1.15l-27.01-25.72v251.59c0,36.82-29.85,66.67-66.67,66.67H150c-36.82,0-66.67-29.85-66.67-66.67v-251.59l-27.01,25.72c-13.33,12.7-34.43,12.18-47.13-1.15-12.7-13.33-12.18-34.43,1.15-47.13l83.33-79.37L360.34,9.2ZM150,301.59v315.08h133.33v-166.67c0-55.23,44.77-100,100-100s100,44.77,100,100v166.67h133.33v-315.08l-233.33-222.22-233.33,222.22ZM416.67,616.67v-166.67c0-18.41-14.92-33.33-33.33-33.33s-33.33,14.92-33.33,33.33v166.67h66.67Z"/>
</svg>);

  // const moreInformationSvg = (
  //   <svg className="more-info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#FC4A78" stroke-width="2"></circle> <path d="M12 17V11" stroke="#FC4A78" stroke-width="2" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#FC4A78"></circle> </g></svg>)


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

  // const star = (
  //   <svg className="favourites-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#FC4A78" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)

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
