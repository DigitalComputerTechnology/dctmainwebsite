import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import "../css/Courses.css";
import PopularCourses from "../PopularCourses";
function WebDevelopment() {
  return (
    <>
      <section className="courses-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_webdevelopment_headimg.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Header />
        <div className="container my-5">
          <div className="row text-center">
            <h1 className="text-uppercase fw-bolder fs-2 text-white">A powerful professional course that is easy to use for website development.</h1>
            <p className="mt-2 text-white">Discover our specialized web development services in <b>Kotputli</b>, focusing on <b>Digital Computer Technology.</b> We craft tailored strategies using advanced tech to boost online presence and efficiency. Elevate your digital footprint with our expertise in <b>Kotputli</b> and beyond.<br />
              <Link to="/contact"><button type="button" class="btn my-4 fw-bold">Explore Courses</button></Link>
            </p>
            <img src="./images/digital_computer_technology_kotputli_coursepage_heade_student_bg.png" alt="" />
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
                  <ul className="text-uppercase" style={{ width: "40%" }}>
                    <li>INTRODUCTION</li>
                    <li>Html/Css</li>
                    <li>tailwind ui</li>
                  </ul>
                  <ul className="text-uppercase">
                    <li>bootstrap</li>
                    <li>c/c++</li>
                    <li>JavaScript</li>
                  </ul>
                </div>Introduce your child to the exciting world of coding with our course in Kotputli. Software Courses in Kotputli Designed to ignite creativity and logical thinking, kids will learn fundamental coding concepts using digital computer technology. Software Development Courses Perfect for young learners in Kotputli eager to explore programming languages and develop problem-solving skills. Our interactive classes and hands-on projects ensure a fun and educational experience. Enroll your child today to empower them with essential digital skills amidst Kotputli’s tech-savvy environment.

              </p>
            </div>
            <div className="secound col-sm header-img">
              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="./images/digital_computer_technology_kotputli_codingforkids-slide1.webp" class="d-block w-100" height={"465px"} alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="./images/digital_computer_technology_kotputli_codingforkids-slide2.webp" class="d-block w-100" height={"465px"} alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/digital_computer_technology_kotputli_codingforkids-slide3.webp" class="d-block w-100" height={"465px"} alt="..." />
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
              <img className="p-0 cdd" src="./images/digital_computer_technology_kotputli_digital1.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="courses-third-section my-5 pt-5">
        <div className="container text-center">
          <div className="row">
            <h1 className="text-center fw-semibold text-uppercase main-heading">Courses Category / Details</h1>
            <img className="greenline" src="./images/digital_computer_technology_kotputli_greenline.png" alt="" />
            <p className="text-center fs-5 mt-3 mb-5 main-paragraph">OnLearning is a powerful online software suite that combines all the tools <br />
              Essential for running a successful school or office. Hardware and Networking Training
            </p>
            <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
              <img src="./images/digital_computer_technology_kotputli_codingforkids-icon1.png" width={"100px"} alt="" />
              <h5 className="mt-4 mb-2 text-uppercase fw-bold">INTRODUCTION</h5>
              <p>Explore web development introduction in Kotputli. Learn Digital Computer Technology for creating dynamic websites and mastering essential coding languages like HTML, CSS, and JavaScript.</p>
            </div>
            <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
              <img src="./images/digital_computer_technology_kotputli_codingforkids-icon2.png" width={"100px"} alt="" />
              <h5 className="mt-4 mb-2 text-uppercase fw-bold">html</h5>
              <p>Master HTML in Kotputli's web development course. Learn Digital Computer Technology to create structured web pages for effective online presence and user interaction.</p>
            </div>
            <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
              <img src="./images/digital_computer_technology_kotputli_codingforkids-icon3.png" width={"100px"} alt="" />
              <h5 className="mt-4 mb-2 text-uppercase fw-bold">css</h5>
              <p>Explore CSS in Kotputli's web development course. Utilize Digital Computer Technology to style and enhance the appearance of web pages for optimal user experience.</p>
            </div>
            <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
              <img src="./images/digital_computer_technology_kotputli_codingforkids-icon4.png" width={"100px"} alt="" />
              <h5 className="mt-4 mb-2 text-uppercase fw-bold">Tailwind ui</h5>
              <p>Discover Tailwind UI in Kotputli's web development. Learn Digital Computer Technology for rapid and efficient UI development with utility-first CSS framework.</p>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
              <img src="./images/digital_computer_technology_kotputli_codingforkids-icon5.png" width={"100px"} alt="" />
              <h5 className="mt-4 mb-2 text-uppercase fw-bold">bootstrap</h5>
              <p>Master Bootstrap in Kotputli's web development course. Utilize Digital Computer Technology for responsive and efficient web design with Bootstrap framework.</p>
            </div>
            <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
              <img src="./images/digital_computer_technology_kotputli_codingforkids-icon6.png" width={"100px"} alt="" />
              <h5 className="mt-4 mb-2 text-uppercase fw-bold">c/c++</h5>
              <p>Explore C/C++ for web development in Kotputli. Learn Digital Computer Technology for backend programming and dynamic web application development.</p>
            </div>
            <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
              <img src="./images/digital_computer_technology_kotputli_codingforkids-icon7.png" width={"100px"} alt="" />
              <h5 className="mt-4 mb-2 text-uppercase fw-bold">javascript</h5>
              <p>Master JavaScript in Kotputli's web development. Utilize Digital Computer Technology for interactive and dynamic web page behavior and client-side scripting.</p>
            </div>
            <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
              <img src="./images/digital_computer_technology_kotputli_web-design_icon8.png" width={"100px"} alt="" />
              <h5 className="mt-4 mb-2 text-uppercase fw-bold">Framework</h5>
              <p>Explore web development frameworks in Kotputli. Learn Digital Computer Technology for efficient, scalable, and modern web application development with popular frameworks like React and Angular.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="courses-fourth-section">
        <div className="container">
          <div className="row">
            <div className="first col-sm py-3 px-5">
              <h2 className="fw-bold ms-4">Get Student ID card</h2><br />
              <ul className="me-5 ps-0">
                <li className="list-unstyled d-flex align-items-center me-5"><img src="./images/vector.png" width={"30px"} alt="" />&nbsp; Access: Enables entry to coaching facilities and resources.
                </li>
                <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt="" />&nbsp; Identification: Easily identifies students within the coaching center.
                </li>
                <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt="" />&nbsp; Discounts: Offers potential discounts on study materials or additional courses.
                </li>
                <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt="" />&nbsp; Attendance: Facilitates easy tracking of attendance during coaching sessions,
                </li><br />

              </ul>
            </div>
            <div className="secound col-sm py-5 px-0 text-center">
              <a target="blank" href="./images/digital_computer_technology_kotputli_front_id_card.webp"><img className="me-5 border border-5 rounded border-white" src="./images/digital_computer_technology_kotputli_front_id_card.webp" width={"30%"} alt="" /></a>
              <a target="blank" href="./images/digital_computer_technology_kotputli_back_id_card.webp"><img className="me-5 border border-5 rounded border-white" src="./images/digital_computer_technology_kotputli_back_id_card.webp" width={"30%"} alt="" /></a>
            </div>
          </div>
        </div>
      </section>


      <PopularCourses />

      <section className="courses-fiveth-section pt-4 mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="first col-sm">
              <h1 className="fw-bold my-4 text-white">DIGITAL COMPUTER TECHNOLOGY KOTPUTLI</h1>
              <ul className="p-0 my-3 lh-lg">
                <li className="list-unstyled d-flex align-items-center fw-medium text-white">
                  <img src="./images/digital_computer_technology_kotputli_single-start.png" alt="" />&nbsp;
                  Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
                <li className="list-unstyled d-flex align-items-center fw-medium text-white">
                  <img src="./images/digital_computer_technology_kotputli_single-start.png" alt="" />&nbsp;
                  Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
                <li className="list-unstyled d-flex align-items-center fw-medium text-white">
                  <img src="./images/digital_computer_technology_kotputli_single-start.png" alt="" />&nbsp;
                  Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
              </ul>
              <button className="btn btn-outline-light mt-3 ms-4"><Link className="text-decoration-none text-light" to="">ADMISSION OPEN</Link></button>
            </div>
            <div className="secound col-sm header-img">
              <img src="./images/digital_computer_technology_kotputli_footer-girl.png" width={"100%"} alt="" />
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}

export default WebDevelopment;