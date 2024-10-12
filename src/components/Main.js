import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./css/Main.css";
import { Link } from "react-router-dom";


function Main() {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [prevHeadingIndex, setPrevHeadingIndex] = useState(null);
  const [animating, setAnimating] = useState(false);

  const headings = [
    "A Simple Question",
    "Learning for a JOB?",
    "Get Job in 180 Days",
    "or 100% Moneyback Guarantee",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevHeadingIndex(currentHeadingIndex);
      setAnimating(true);
    }, 500); // Change heading every 3 seconds

    return () => clearInterval(interval);
  }, [currentHeadingIndex]);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setCurrentHeadingIndex((prevIndex) =>
          prevIndex === headings.length - 1 ? 0 : prevIndex + 1
        );
        setAnimating(false);
      }, 2000); // Match the animation duration

      return () => clearTimeout(timer);
    }
  }, [animating]);

  return (
    <>
      <section className="first-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/main-bg.png)` }}><br />
        <Header></Header>
        <div className="container mt-1 pt-5">
          <img className="d-sm-none d-md-none img-fluid" src="images/Digital Computer Technology Kotputli tag name.png" alt="" />
          <div className="row">
            <div className="col-sm text-center order-sm-last"> {/* This will be displayed first on small screens */}
              <div className="img-column img-column-1 text-center">
                <img className="image-1 mx-1" src="images/Digital Computer Technology Kotputli student 1.png" alt="" />
                <img className="image-2 mx-1" src="images/Digital Computer Technology Kotputli student 2.png" alt="" />
                <img className="image-3 mx-1" src="images/Digital Computer Technology Kotputli student 3.png" alt="" />
              </div>
              <div className="img-column text-center">
                <img className="image-4 mx-1" src="images/Digital Computer Technology Kotputli student 4.png" alt="" />
                <img className="image-5 mx-1" src="images/Digital Computer Technology Kotputli student 5.png" alt="" />
                <img className="image-6 mx-1" src="images/Digital Computer Technology Kotputli student 6.png" alt="" />
              </div>
            </div>
            <div className="col-sm teg-name order-sm-first"> {/* This will be displayed second on small screens */}
              <img className="d-none d-sm-block img-fluid" src="images/Digital Computer Technology Kotputli tag name.png" alt="" />
              <div className="d-sm-none d-md-none mb-4" />

              <div className="heading-container">
                {prevHeadingIndex !== null && (
                  <h1 className={`heading ${animating ? "heading-exit" : ""}`}>
                    {headings[prevHeadingIndex]}
                  </h1>
                )}
                <h1 className={`heading ${animating ? "heading-enter" : ""}`}>
                  {headings[currentHeadingIndex]}
                </h1>
              </div>
              <p className="text-start">Discover our online & offline courses in app/web/game development, digital marketing & ethical hacking. Job offers from day one. Basic courses start at INR 5000. Call now for details & offers.</p>
              <button className="btn btn-outline-success"><Link className="text-decoration-none" to="">ENQUIRY FORM</Link></button>
            </div>
          </div>
        </div>
      </section >

      <section className="secound-section">
        <div className="container">
          <div className="row">
            <div className="col-sm img-col">
              <br />
              <h3 className="mt-2 mb-2">DIGITAL COMPUTER TECHNOLOGY</h3>
              <p className="fs-6" style={{ textAlign: "justify" }}>Welcome to Digital Computer Technology We're your ultimate destination for digital solutions. Our expertise spans app, web, and game development, ensuring your projects are executed with precision. Security is paramount, and our ethical hacking and cybersecurity services safeguard your digital assets. We believe in empowering individuals; our courses in HTML, Bootstrap, and digital marketing provide essential skills for success in today's digital landscape. Whether you're a business seeking to enhance your online presence, an aspiring developer eager to learn, or an organization in need of cybersecurity measures, Digital Computer Technology is here for you. Join us as we pave the way for a brighter, more secure digital future.</p>
              <button className="btn btn-outline-success mt-2"><Link className="text-decoration-none" to="">Read More</Link></button>
            </div>
            <div className="col-sm text-center">
              {/* <img className="img-fluid" src="images/Digital Computer Technology Kotputli about.png" alt="" /> */}
              {/* <video controls width={"100%"} height={"100%"}>
                <source src="/images/DCT _introduction.mp4" type="video/mp4"/>
              </video> */}
              {/* introduction video */}
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xQT2CvfkPlw" title="Discover Digital Computer Technology: Leading Tech Education in Kotputli" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="third-section">
        <div className="container">
          <div className="row">
            <div className="col-sm third-first-col">
              <b>OUR PROFILE</b>
              <p>We offer a wide range of IT services ranging from Software
                development, Website designing, e-commerce online solutions
                and Android App.</p>
              <ul className="p-0">
                <li className="list-unstyled"><img src="images/vector.png" alt="" /> We deliver financing solutions that streamline.</li>
                <li className="list-unstyled"><img src="images/vector.png" alt="" /> Operations and expedite change for auto, equipment.</li>
                <li className="list-unstyled"><img src="images/vector.png" alt="" /> Commercial, consumer and real estate finance.</li>
              </ul>
              <button className="btn btn-outline-success mt-2"><Link className="text-decoration-none" to="">Read More</Link></button>
            </div>
            <div className="col-sm third-secound-col">
              <div>
                <img src="images/Digital_Computer_Technology_Kotputli_Ellipse_7.png" width="27%" style={{ marginLeft: "15px" }} alt="" />
                <img className="position-relative" src="images/Digital_Computer_Technology_Kotputli_18.png" width="22%" alt="" />
                <h2 className="d-inline">YEAR OF<br /> <b>EXPERIENCE</b></h2>
              </div>
            </div>
          </div>
          <div className="container mt-5 pt-5">
            <div className="row placement">
              <div className="col-sm text-center">
                <img src="images/Digital Computer Technology Kotputli gradient-half-elipse 1.png" width="50%" alt="" />
                <p className="fs-5 mt-4">Placement Support</p>
              </div>
              <div className="col-sm text-center">
                <img src="images/Digital Computer Technology Kotputli gradient-half-elipse 1.png" width="50%" alt="" />
                <p className="fs-5 mt-4">Practical Knowledge</p>
              </div>
              <div className="col-sm text-center">
                <img src="images/Digital Computer Technology Kotputli gradient-half-elipse 1.png" width="50%" alt="" />
                <p className="fs-5 mt-4">Skill Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-section py-5">
        <div className="container">
          <div className="row first-row py-5">
            <div className="col-sm fourth-one">
              <b>OUR MISSION</b>
              <h3>We Offer Online and Offline
                Courses</h3>
            </div>
            <div className="col-sm fourth-two">
              <p className="px-5">Crafting compelling content for a software development company involves effectively showcasing the company's expertise, services, and values to attract potential clients and stakeholders.</p>
            </div>

          </div>
          <div className="row">
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Web Design</b>
              <img src="images/dct_web_design.png" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dct_web_design_1.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Web Design</b>
                <p>Master the art of creating stunning websites with our comprehensive web design course. Learn essential principles, UI/UX best practices, and responsive design techniques to build visually appealing, user-friendly sites that stand out in a digital world.</p>
                <Link to="/webdesigner"><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Development</b>
              <img src="images/dct_development.png" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Development</b>
                <p>Explore the dynamic field of software development! Our course covers various programming languages, frameworks, and methodologies, equipping you with the skills to develop robust, efficient, and scalable applications for diverse needs and platforms.</p>
                <Link to="/webdevelopment"><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Marketing</b>
              <img src="images/dct_marketing.png" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Marketing</b>
                <p>Unlock the secrets of successful digital marketing with our in-depth training. Dive into SEO, social media strategies, content creation, and analytics to drive targeted traffic, enhance brand visibility, and maximize online engagement effectively.</p>
                <Link to="/digitalmarketing"><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Ethical Hacking</b>
              <img src="images/dct_ethical_hacking.png" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Ethical Hacking</b>
                <p>Become a certified ethical hacker and safeguard digital assets! Our course teaches you to identify vulnerabilities, perform penetration testing, and deploy defensive strategies, empowering you to protect systems and networks from cyber threats.</p>
                <Link to="/ethicalheacking"><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>


          </div>
          <div className="row secound-row py-5">
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Coding For Kid's</b>
              <img src="images/coding kids.webp" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Coding For Kid's</b>
                <p>Introduce children to the exciting world of coding with our engaging and age-appropriate lessons. Foster problem-solving skills and creativity through interactive projects, using kid-friendly programming languages and tools to spark a lifelong passion for technology.</p>
                <Link to="/codingforkids"><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">English Spoken</b>
              <img src="images/english spoken.webp" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">English Spoken</b>
                <p>Enhance your spoken English skills with our focused training. Improve pronunciation, grammar, vocabulary, and conversational fluency through interactive exercises and real-life practice, boosting your confidence in both casual and professional communication.</p>
                <Link to="/englishspoken"><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Game Development</b>
              <img src="images/game.webp" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Game Development</b>
                <p>Turn your game ideas into reality with our comprehensive game development course. Learn key concepts such as design, coding, and graphics, and develop immersive, interactive experiences that captivate players and stand out in the competitive gaming industry.</p>
                <Link to="/gamedevelopment"><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">App Development</b>
              <img src="images/learn js.webp" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">App Development</b>
                <p>Transform your innovative ideas into functional apps with our app development training. Gain expertise in conceptualizing, designing, and deploying applications for both Android and iOS platforms, using popular frameworks and programming languages to create impactful solutions.</p>
                <Link to="/appdevelopment"><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth-section">
        <div className="container text-center">
          <h3 className="fw-bold">CAREER OPPORTUNITIES WITH DIGITAL COMPUTER TECHNOLOGY?</h3>
          <div className="row justify-content-evenly">
            <div className="col-sm py-5 my-3 bg-white m-0">
              <h1>30+</h1>
              <h2 className="mt-3">INDUSTRIES</h2>
            </div>
            <div className="col-sm py-5 mx-sm-3 my-3 bg-white m-0">
              <h1>44+</h1>
              <h2 className="mt-3">SPECIALIZATION</h2>
            </div>
            <div className="col-sm py-5 my-3 bg-white m-0">
              <h1>144+</h1>
              <h2 className="mt-3">CAREER FIELDS</h2>
            </div>

          </div>
        </div>
      </section>

      <section className="sixth-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_ourgoalimages.webp)` }}>
        <div>
          <b className="fs-5">OUR GOAL</b>
          <h3>Building the Future: Digital Transformation and Tech Education</h3>
          <p>At Digital Computer Technology, we strive to transform businesses with cutting-edge digital solutions. Our mission is to deliver exceptional quality and drive innovation, keeping clients at the forefront of the digital landscape. We emphasize continuous education and training, empowering our team, clients, and students with the skills needed for success. By fostering a culture of learning and professional growth, we ensure sustainable growth and impactful community support. As a trusted partner, we are dedicated to creating meaningful change and driving digital transformation in the tech industry.</p>
          <button className="btn btn-outline-success mt-2"><Link className="text-decoration-none" to="">Read More</Link></button>
        </div>
      </section>

      {/* <section className="seventh-section">
        <div className="container">
          <b className="text-center d-block">WHAT WE DO</b>
          <h3 className="fw-bold text-center">DCT Serving From Last 18 Years</h3>
          <div className="row">
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/graphic-design 2.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>01</h2>
              <h1>Website Designing</h1>
              <p>Creating compelling content for a website involves
                a strategic approach aimed at engaging the target
                audience.</p>
            </div>
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli web-development.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>02</h2>
              <h1>Web Development</h1>
              <p>Developing a successful website requires careful
                planning and execution. It starts by defining the
                website's objectives.</p>
            </div>
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli development.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>03</h2>
              <h1>Mobile App Development</h1>
              <p>Creating a mobile app involves a structured
                process to develop a functional, user-friendly,
                and engaging application.</p>
            </div>

          </div>
          <div className="secound-row row">
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli search-engine.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>04</h2>
              <h1>Search Engine Optimization</h1>
              <p>Conduct thorough research to identify relevant
                keywords and phrases that potential users might
                use to search for your products or services.</p>
            </div>
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli digital-marketing.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>05</h2>
              <h1>Digital Marketing</h1>
              <p>Define specific, measurable, achievable, relevant,
                and time-bound (SMART) goals for your digital
                marketing efforts, </p>
            </div>
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli software testing.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>06</h2>
              <h1>Software Testing</h1>
              <p>Understand and analyze the software
                requirements to identify the scope of testing, key
                functionalities, and expected outcomes.</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="tenth-section">
        <div className="container text-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Digital_Computer_Technology_Kotputli_session-bg.webp)` }}>
          <h1>Book Free Counselling Session with Experts</h1>
          <p className="fw-bold my-4">Enter your mobile number and recieve a call from our expert</p>
          {/* <form>
            <input type="number" placeholder="Mobile No..." min="10" max="13" />
            <input type="submit" value="Contact Us" />

          </form> */}
          <img className="icon-img1 float-start" src="images/Digital Computer Technology Kotputli session-art.png" alt="" />
          <img className="icon-img2 float-end" src="images/Digital Computer Technology Kotputli session-art2.png" width="10%" alt="" />
          <img className="icon-img3 float-end" src="images/Digital Computer Technology Kotputli footer-plant.png " width="2%" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Main;