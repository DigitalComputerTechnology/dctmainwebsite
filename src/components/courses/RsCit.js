import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import "../css/Courses.css";
function RsCit() {  
  return ( 
        <>
        <section className="courses-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_coursepage_headebg1.png)`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Header/>
            <div className="container my-5">
            <div className="row text-center">
            <h1 className="text-uppercase fw-bolder fs-2">A powerful BEST course that is easy to use for <br/> <span className="">Rs-Cit</span></h1>
            <p className="mt-2">Discover our specialized Rs-Cit services in <b>Kotputli</b>, focusing on <b>Digital Computer Technology.</b> We craft tailored strategies using advanced tech to boost online presence and efficiency. Elevate your digital footprint with our expertise in <b>Kotputli</b> and beyond.<br/>
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
    <h2 className="text-uppercase fw-bolder">Course Details</h2>
    <button type="button" className="btn text-white fw-bold px-4 my-3 rounded-pill">DURATION: 3 MONTHS</button>
    <button type="button" className="btn text-white fw-bold px-4 my-3 mx-3 rounded-pill">FEES: 3,200/- Only</button>
      <p className="pe-5">
        <div className="d-flex">
        <ul style={{width:"40%"}}>
          <li>BASIC COMPUTER</li>
          <li>INTERNET, E-MAIL</li>
          <li>M.S WORD</li>
        </ul>
        <ul>
          <li>M.S EXCEL</li>
          <li>M.S POWER POINT</li>
        </ul>
        </div>Explore RS-CIT, an essential course introducing <b className="text-uppercase">digital computer technology in Kotputli.</b> Learn fundamental computer skills and gain proficiency in MS Office, internet usage, and more. Ideal for beginners and professionals seeking to enhance their digital literacy. Enroll now to master essential IT skills and advance your career in Kotputli's growing digital landscape. Start your journey with RS-CIT today!</p>
    </div>
    <div className="secound col-sm header-img">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="./images/digital_computer_technology_kotputli_ms_word.png" class="d-block w-100" height={"465px"} alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./images/digital_computer_technology_kotputli_ms_excel.png" class="d-block w-100" height={"465px"} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/digital_computer_technology_kotputli_power_point.png" class="d-block w-100" height={"465px"} alt="..."/>
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
      <img src="./images/digital_computer_technology_kotputli_basic_Rscit.png" width={"80px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">basic computer</h5>
      <p>RS-CIT introduces Digital Computer Technology in Kotputli, covering basic skills for efficient computing. Learn essential software tools and internet basics for practical knowledge.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_ms_word.png" width={"80px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">M.S WORD</h5>
      <p>RS-CIT MS Word course in Kotputli offers practical skills in Digital Computer Technology. Master MS Word for efficient document creation and editing in professional environments.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_ms_excel.png" width={"80px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">M.S EXCEL</h5>
      <p>Learn MS Excel in Kotputli with RS-CIT, mastering Digital Computer Technology. Gain skills in data analysis, formulas, and spreadsheet management for professional efficiency.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_power_point.png" width={"80px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">POWER POINT</h5>
      <p>RS-CIT PowerPoint course in Kotputli covers Digital Computer Technology essentials. Learn presentation creation for effective communication in professional and academic settings.</p>
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
      <a target="blank" href="./images/digital_computer_technology_kotputli_front_id_card.webp"><img className="me-5 border border-5 rounded border-white" src="./images/digital_computer_technology_kotputli_front_id_card.webp" width={"30%"} alt=""/></a>
      <a target="blank" href="./images/digital_computer_technology_kotputli_back_id_card.webp"><img className="me-5 border border-5 rounded border-white" src="./images/digital_computer_technology_kotputli_back_id_card.webp" width={"30%"} alt=""/></a>
    </div>
  </div>
            </div>
        </section>


        <section className="courses-third-section my-5">
            <div className="container">
            <div className="row p-0">
              <h1 className="text-center fw-semibold text-uppercase main-heading mb-5">Popular Courses</h1>
    <div className="col-sm popular-courses shadow bg-body-tertiary rounded">
    <Link to="/tallywithgst"><img src="./images/digital_computer_technology_kotputli_app-development.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/tallywithgst"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Tally-with-gst</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 3 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 5,000/-</span></div>
      <p className="mt-2 mx-3">Enroll in Tally-with-GST course in Kotputli to learn Digital Computer Technology integration for proficient accounting and tax management skills in modern business environments.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/tallywithgst">MORE...</Link></button>
    </div>
    <div className="col-sm mx-3 popular-courses shadow bg-body-tertiary rounded">
    <Link to="/account"><img src="./images/digital_computer_technology_kotputli_game-development.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/account"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">ACCOUNT</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 15,000/-</span></div>
      <p className="mt-2 mx-3">Explore accounting essentials in Kotputli, integrating Digital Computer Technology for comprehensive financial management skills essential in modern business environments.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/account">MORE...</Link></button>
    </div>
    <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to="/webdesigner"><img src="./images/digital_computer_technology_kotputli_ethical-hacking.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/webdesigner"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">web designer</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Master web design in Kotputli with a focus on Digital Computer Technology. Learn UI/UX principles and tools for creating visually appealing and functional websites.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/webdesigner">MORE...</Link></button>
    </div>
      
  </div>
  <div className="row p-0 my-5">
  <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to="/ethicalheacking"><img src="./images/digital_computer_technology_kotputli_ethical-hacking.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/ethicalheacking"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Ethical Hacking</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Learn ethical hacking in Kotputli, integrating Digital Computer Technology. Acquire skills in cybersecurity, penetration testing, and ethical hacking techniques for secure digital environments.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/ethicalheacking">MORE...</Link></button>
    </div>
    <div className="col-sm mx-3 popular-courses shadow bg-body-tertiary rounded">
    <Link to="/codingforkids"><img src="./images/digital_computer_technology_kotputli_codingforkids-slide2.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/codingforkids"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">coding for kid's</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 3 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 3,000/-</span></div>
      <p className="mt-2 mx-3">Introduce kids in Kotputli to coding with Digital Computer Technology. Engaging courses in programming basics to foster creativity and logical thinking in young learners.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/codingforkids">MORE...</Link></button>
    </div>
    <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to="/webdevelopment"><img src="./images/digital_computer_technology_kotputli_web-development-coding.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/webdevelopment"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">web development</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Explore comprehensive web development in Kotputli, integrating Digital Computer Technology. Learn HTML, CSS, JavaScript, and more for creating dynamic and interactive websites.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/webdevelopment">MORE...</Link></button>
    </div>
  </div>
  <div className="row p-0 my-5">
    <div className="col-sm popular-courses shadow bg-body-tertiary rounded">
    <Link to="/appdevelopment"><img src="./images/digital_computer_technology_kotputli_app-development.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/appdevelopment"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">app development</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Discover app development in Kotputli, leveraging Digital Computer Technology. Master mobile app creation with essential skills in coding, design, and deployment for modern platforms.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/appdevelopment">MORE...</Link></button>
    </div>
    <div className="col-sm mx-3 popular-courses shadow bg-body-tertiary rounded">
    <Link to="/digitalmarketing"><img src="./images/digital_computer_technology_kotputli_cyber-security.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/digitalmarketing"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">digital marketing</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Explore Digital Marketing in Kotputli, utilizing Digital Computer Technology. Master SEO, social media, and analytics for effective online presence and business growth strategies.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/digitalmarketing">MORE...</Link></button>
    </div>
    <div className="col-sm popular-courses shadow bg-body-tertiary rounded">
    <Link to="/gamedevelopment"><img src="./images/digital_computer_technology_kotputli_game-development.webp" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/gamedevelopment"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Game development</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Dive into game development in Kotputli with Digital Computer Technology. Learn coding, design, and animation for creating interactive and engaging games for various platforms.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/gamedevelopment">MORE...</Link></button>
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
 
      {/* <section>
      <div class="container text-center">
      <marquee>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </marquee>
</div>
      </section> */}

        <Footer/>
        </>
     );
}

export default RsCit;