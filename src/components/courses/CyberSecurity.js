import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import "../css/Courses.css";
function CyberSecurity() {
    return ( 
        <>
        <section className="courses-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_cyber-security_hesdimg.png)`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Header/>
            <div className="container my-5">
            <div className="row text-center">
            <h1 className="text-uppercase fw-bolder fs-2 text-white">A powerful professional course that is easy to use for cyber security</h1>
            <p className="mt-2 text-white">Discover our specialized Ethical Hacking services in <b>Kotputli</b>, focusing on <b>Digital Computer Technology.</b> We craft tailored strategies using advanced tech to boost online presence and efficiency. Elevate your digital footprint with our expertise in <b>Kotputli</b> and beyond.<br/>
            <Link to="/contact"><button type="button" class="btn my-4 fw-bold">Explore Courses</button></Link>
            </p>
            <img src="./images/digital_computer_technology_kotputli_coursepage_heade_student_bg.png" alt=""/>
  </div>
            </div>
        </section>


        <section className="courses-secound-section my-5 pt-5">
            <div className="container mt-5">
            <div className="row">
    <div className="first col-sm p-5">
    <h2 className="text-uppercase fw-bolder">Course Deteails</h2>
    <button type="button" className="btn text-white fw-bold px-4 my-3 rounded-pill">DURATION: 6 MONTHS</button>
    <button type="button" className="btn text-white fw-bold px-4 my-3 mx-3 rounded-pill">FEES: 50,000/- Only</button>
      <p className="pe-5">
        <div className="d-flex">
        <ul className="text-uppercase" style={{width:"40%"}}>
          <li>INTRODUCTION</li>
          <li>Network security</li>
          <li>Cyber Defense</li>
        </ul>
        <ul className="text-uppercase">
          <li>Cloud security</li>
          <li>Information security</li>
          <li>Computer network</li>
        </ul>
        </div>A "Tally with GST" course integrates digital computer technology with comprehensive training on Tally software. It covers accounting fundamentals, emphasizing Goods and Services Tax (GST) implementation in India. Participants learn GST concepts, invoicing, tax computation, and filing returns using Tally ERP 9. The course ensures practical skills in financial management and compliance with GST regulations. It's tailored for finance professionals seeking proficiency in both digital tools and current tax requirements, making it highly relevant in today's digital economy.</p>
    </div>
    <div className="secound col-sm header-img">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="./images/digital_computer_technology_kotputli_cyber-security_slide1.jpeg" class="d-block w-100" height={"465px"} alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./images/digital_computer_technology_kotputli_cyber-security_slide2.jpeg" class="d-block w-100" height={"465px"} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/digital_computer_technology_kotputli_cyber-security_slide3.jpeg" class="d-block w-100" height={"465px"} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <img className="p-0 cdd" src="./images/digital_computer_technology_kotputli_digital1.png" alt=""/>
    </div>
  </div>
            </div>
        </section>


        <section className="courses-third-section my-5 pt-5">
            <div className="container text-center">
            <div className="row">
              <h1 className="text-center fw-semibold text-uppercase main-heading">Courses Category / Details</h1>
              <img className="greenline" src="./images/digital_computer_technology_kotputli_greenline.png" alt=""/>
              <p className="text-center fs-5 mt-3 mb-5 main-paragraph">Onlearing  is one powerful online software suite that combines all the tools <br/> needed to run a successful school or office.
              </p>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_cybersecurity-icon1.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">INTRODUCTION</h5>
      <p>Explore the fundamentals of digital computer technology at Kotputli. Learn basic concepts crucial for understanding computing systems and their applications in today's technological landscape.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_cybersecurity-icon2.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">network security</h5>
      <p>Enhance your expertise in MS Word through courses focusing on digital computer technology in Kotputli. Master essential skills for effective document creation and management.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_cybersecurity-icon3.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">CYBER DEFENSE</h5>
      <p>Excel in MS Excel courses at Kotputli, integrating digital computer technology. Develop essential skills for data analysis, visualization, and productivity in today's digital era.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_cybersecurity-icon4.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">CLOUD SECURITY</h5>
      <p>Explore MS PowerPoint courses at Kotputli, focusing on integrating digital computer technology. Learn essential skills for creating dynamic presentations in today's digital world.</p>
    </div>
  </div>
  <div className="row my-4">
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_cybersecurity-icon5.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">INFORMATION SECURITY</h5>
      <p>Explore the fundamentals of digital computer technology at Kotputli. Learn basic concepts crucial for understanding computing systems and their applications in today's technological landscape.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_cybersecurity-icon6.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">COMPUTER NETWORK</h5>
      <p>Enhance your expertise in MS Word through courses focusing on digital computer technology in Kotputli. Master essential skills for effective document creation and management.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_cybersecurity-icon7.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">Malware analysis</h5>
      <p>Excel in MS Excel courses at Kotputli, integrating digital computer technology. Develop essential skills for data analysis, visualization, and productivity in today's digital era.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_cybersecurity-icon8.png" width={"120px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">Cryptography</h5>
      <p>Explore MS PowerPoint courses at Kotputli, focusing on integrating digital computer technology. Learn essential skills for creating dynamic presentations in today's digital world.</p>
    </div>
  </div>
            </div>
        </section>


        <section className="courses-fourth-section">
            <div className="container">
            <div className="row">
    <div className="first col-sm py-3 px-5">
    <h2 className="fw-bold ms-4">Get Student ID card</h2><br/>
    <ul className="me-5 ps-0">
      <li className="list-unstyled d-flex align-items-center me-5"><img src="./images/vector.png" width={"30px"} alt=""/>&nbsp; Access: Enables entry to coaching facilities and resources.
      </li>
      <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt=""/>&nbsp; Identification: Easily identifies students within the coaching center.
      </li>
      <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt=""/>&nbsp; Discounts: Offers potential discounts on study materials or additional courses.
      </li>
      <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt=""/>&nbsp; Attendance: Facilitates easy tracking of attendance during coaching sessions,
      </li><br/>
      
    </ul>
    </div>
    <div className="secound col-sm py-5 px-0 text-center">
      <a target="blank" href="./images/digital_computer_technology_kotputli_front_id_card.jpg"><img className="me-5 border border-5 rounded border-white" src="./images/digital_computer_technology_kotputli_front_id_card.jpg" width={"30%"} alt=""/></a>
      <a target="blank" href="./images/digital_computer_technology_kotputli_back_id_card.jpg"><img className="me-5 border border-5 rounded border-white" src="./images/digital_computer_technology_kotputli_back_id_card.jpg" width={"30%"} alt=""/></a>
    </div>
  </div>
            </div>
        </section>


        <section className="courses-third-section my-5">
            <div className="container">
            <div className="row p-0">
              <h1 className="text-center fw-semibold text-uppercase main-heading mb-5">Popular Courses</h1>
    <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_app-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Tally-with gst</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 3 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 3,200/-</span></div>
      <p className="mt-2 mx-3">Design, front-end and back-end development, databases, APIs, testing, deployment, user experience, and platform-specific considerations for iOS and Android apps.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>
    <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_app-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">ACCOUNT</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 3 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 3,200/-</span></div>
      <p className="mt-2 mx-3">Design, front-end and back-end development, databases, APIs, testing, deployment, user experience, and platform-specific considerations for iOS and Android apps.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>
    <div className="col-sm mx-3 popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_game-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">web designer</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 12 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 15,000/-</span></div>
      <p className="mt-2 mx-3">Game development course covers game design, 2D/3D graphics, physics engines, scripting languages (like Unity C#), gameplay mechanics, testing, and publishing.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>

  </div>
  <div className="row p-0 my-5">
  <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_ethical-hacking.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Ethical Hacking</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 6 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Ethical hacking course includes network security, penetration testing, cryptography, web application security, social engineering, and legal implications of hacking.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>
    <div className="col-sm me-2 popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_cyber-security.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">coding for kid's</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 6 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Cybersecurity course covers network security, encryption, threat detection, incident response, ethical hacking, risk management, and compliance with industry standards and regulations.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>
    <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_app-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">web development</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 6 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Design, front-end and back-end development, databases, APIs, testing, deployment, user experience, and platform-specific considerations for iOS and Android apps.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>
  </div>
  <div className="row p-0 my-5">
    <div className="col-sm mx-3 popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_game-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">app development</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 6 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Game development course covers game design, 2D/3D graphics, physics engines, scripting languages (like Unity C#), gameplay mechanics, testing, and publishing.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>
    <div className="col-sm me-2 popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_cyber-security.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">digital marketing</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 6 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Cybersecurity course covers network security, encryption, threat detection, incident response, ethical hacking, risk management, and compliance with industry standards and regulations.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>
    <div className="col-sm me-2 popular-courses shadow bg-body-tertiary rounded">
    <Link to=""><img src="./images/digital_computer_technology_kotputli_cyber-security.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to=""><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Game development</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 6 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Cybersecurity course covers network security, encryption, threat detection, incident response, ethical hacking, risk management, and compliance with industry standards and regulations.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="">MORE...</Link></button>
    </div>
  </div>
            </div>
        </section>

        <section className="courses-fiveth-section pt-4 mt-5">
            <div className="container mt-5">
            <div className="row">
    <div className="first col-sm">
      <h1 className="fw-bold my-4 text-white">DIGITAL COMPUTER TECHNOLOGY KOTPUTLI</h1>
      <ul className="p-0 my-3 lh-lg">
        <li className="list-unstyled d-flex align-items-center fw-medium text-white">
          <img src="./images/digital_computer_technology_kotputli_single-start.png" alt=""/>&nbsp;
          Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
        <li className="list-unstyled d-flex align-items-center fw-medium text-white">
          <img src="./images/digital_computer_technology_kotputli_single-start.png" alt=""/>&nbsp;
          Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
        <li className="list-unstyled d-flex align-items-center fw-medium text-white">
          <img src="./images/digital_computer_technology_kotputli_single-start.png" alt=""/>&nbsp;
          Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
      </ul>
      <button className="btn btn-outline-light mt-3 ms-4"><Link className="text-decoration-none text-light" to="">ADMISSION OPEN</Link></button>
    </div>
    <div className="secound col-sm header-img">
      <img src="./images/digital_computer_technology_kotputli_footer-girl.png" width={"100%"} alt=""/>
    </div>
  </div>
            </div>
        </section>
       


        <Footer/>
        </>
     );
}

export default CyberSecurity;