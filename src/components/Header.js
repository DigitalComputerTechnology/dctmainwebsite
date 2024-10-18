import "./css/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-light p-0 rounded-pill">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/main"><img className="dct-logo" src="/images/dct logo.png" width="77px" alt="Digital Computer Technology Logo"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </Link>
                <ul className="dropdown-menu mt-4 border-0 bg-transparent" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/about"><img src="images/rscit 1.png" alt=""/>About Us</Link></li>
                  <li><Link className="dropdown-item" to="/staff"><img src="images/rscit 1.png" alt=""/>Staff</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </Link>
                <ul className="dropdown-menu mt-4 border-0 bg-transparent" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/rscit"><img src="images/rscit 1.png" alt=""/>RS-CIT</Link></li>
                  <li><Link className="dropdown-item" to="/account"><img src="images/rscit 1.png" alt=""/>Account</Link></li>
                  <li><Link className="dropdown-item" to="/tallywithgst"><img src="images/tally-marks 1.png" alt=""/>TALLY WITH GST</Link></li>
                  <li><Link className="dropdown-item" to="/webdesigner"><img src="images/design 1.png" alt=""/>WEB DESIGNER</Link></li>
                  <li><Link className="dropdown-item" to="/ethicalheacking"><img src="images/hacking 1.png" alt=""/>ETHICAL HACKING</Link></li>
                  <li><Link className="dropdown-item" to="/cybersecurity"><img src="images/hacking 1.png" alt=""/>CYBER SECURITY</Link></li>
                  {/* <li><Link className="dropdown-item" to="/englishspoken"><img src="images/eng 1.png" alt=""/>ENGLISH SPOKEN</Link></li> */}
                  <li><Link className="dropdown-item" to="/codingforkids"><img src="images/programming 1.png" alt=""/>CODING FOR KID'S</Link></li>
                  <li><Link className="dropdown-item" to="/webdevelopment"><img src="images/coding 1.png" alt=""/>WEB DEVELOPMENT</Link></li>
                  <li><Link className="dropdown-item" to="/appdevelopment"><img src="images/developer 1.png" alt=""/>APP DEVELOPMENT</Link></li>
                  <li><Link className="dropdown-item" to="/digitalmarketing"><img src="images/digital-marketing.png" alt=""/>DIGITAL MARKETING</Link></li>
                  {/* <li><Link className="dropdown-item" to="/GameDevelopment"><img src="images/game-development 1.png" alt=""/>GAME DEVELOPMENT</Link></li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu bg-transparent border-0 mt-4" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/googleads"><img src="images/google ad.png" alt=""/>GOOGLE ADS</Link></li>
                  <li><Link className="dropdown-item" to="/googleads"><img src="images/facebook-ad.png" alt=""/>META ADS</Link></li>
                  <li><Link className="dropdown-item" to="/web"><img src="images/design 1.png" alt=""/>WEB DESIGN</Link></li>
                  <li><Link className="dropdown-item" to="/web"><img src="images/ui-ux-design.png" alt=""/>UI/UX DESIGN</Link></li>
                  <li><Link className="dropdown-item" to="/cyber"><img src="images/cybersecurity.png" alt=""/>CYBERSECURITY</Link></li>
                  <li><Link className="dropdown-item" to="/web"><img src="images/programming 1.png" alt=""/>WEB SOLUTION</Link></li>
                  <li><Link className="dropdown-item" to="#"><img src="images/workshop 1.png" alt=""/>TRAINING AND WORKSHOPS</Link></li>
                  <li><Link className="dropdown-item" to="/web"><img src="images/remote-it.png" alt=""/>REMOTE IT SUPPORT</Link></li>
                  <li><Link className="dropdown-item" to="/web"><img src="images/developer 1.png" alt=""/>APP DEVELOPMENT</Link></li>
                  <li><Link className="dropdown-item" to="#"><img src="images/digital-marketing.png" alt=""/>DIGITAL MARKETING</Link></li>
                  <li><Link className="dropdown-item" to="/web"><img src="images/responshiv.png" alt=""/>RESPONSIVE DESIGN</Link></li>
                  <li><Link className="dropdown-item" to="/web"><img src="images/ecommerce 1.png" alt=""/>E-COMMERCE PLATEFORMS</Link></li>
                  <li><Link className="dropdown-item" to="/googleads"><img src="images/social-media 1.png" alt=""/>SOCIAL MEDIA MANAGEMENT</Link></li>
                  <li><Link className="dropdown-item" to="/googleads"><img src="images/workshop 1.png" alt=""/>KEYWORD RESEARCH</Link></li>
                  <li><Link className="dropdown-item" to="/googleads"><img src="images/content-strategy 1.png" alt=""/>CMS</Link></li>
                  <li><Link className="dropdown-item" to="/googleads"><img src="images/seo (1) 1.png" alt=""/>SEO</Link></li>
                  <li><Link className="dropdown-item" to="https://ilearn.myrkcl.com/index.php"><img src="images/digital_computer_technology_kotputli_course_Online-exam-icon.webp" width={"40px"} height={"40px"} className="mt-2" alt=""/>ONLINE EXAM</Link></li>
                  <li><Link className="dropdown-item" to="/cheatsheet"><img src="images/digital_computer_technology_kotputli_course_cheat-sheet-icon.webp" width={"40px"} height={"40px"} className="mt-2" alt=""/>CHEAT SHEET</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success"><Link className="text-decoration-none" to="/contact">ENQUIRY FORM</Link></button>
            </form>
          </div>
        </div>
      </nav>
 );
}

export default Header;