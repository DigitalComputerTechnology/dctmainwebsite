import "./css/About.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Staff() {
    return (
        <>
        <section className="staff-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/staff/digital_computer_technology_kotputli_staff_h-img.webp)`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Header/>
            <div className="container mt-5">
            <div className="row text-center">
            <h1 className="mt-5">Our Faculty</h1>
            <p>An exceptional teacher of digital computer technology simplifies complex concepts, inspires curiosity, stays updated with advancements, employs interactive teaching methods, and fosters hands-on learning experiences for students.</p>
            </div>
            </div>
        </section>
        <section className="staff-second-section py-3" style={{backgroundColor:"#e5fff1"}}>
        <div className="container">
    <div className="text-center">
        <br/>
    <span className="py-2 px-5 rounded-pill fw-bold">OUR TEAM</span>
    <h2 className="mt-5 mb-4">Meet Our Faculty</h2>
    <p>A great digital computer technology teacher simplifies complex topics, inspires curiosity, and uses interactive, hands-on methods for effective learning.</p>
    </div>
  <div className="row align-items-center mt-5 main-staff">
  <div className="col">
  <div className="card">
  <img src="/images/staff/digital_computer_technology_kotputli_director1.png" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Ramavtar Yadav</h5>
  <p className=" text-uppercase ">DIRECTOR</p>
  {/* <p className="text-success"><i class="fa-solid fa-school-circle-check"></i> Harvard University</p> */}<br/><br/>
  <div>
    <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/digital_computer_technology_kotputli_md1.png" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Pushpendra Kumar</h5>
  <p className=" text-uppercase  text-uppercase">managing director</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> MCA,BCA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/surendra_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Surender Kumar</h5>
  <p className=" text-uppercase ">XMD</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> MBA,BBA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
   
  </div>

  <div className="row align-items-center mt-5 text-center legal-staff">
  <h3 className="mt-5 mb-4">Legal And Technical Team</h3>
  <div className="col">
  <div className="card">
  <img src="/images/staff/subhash_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Subhash Yadav</h5>
  <p className=" text-uppercase ">Advocate</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> Harvard University</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/hariram_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Hariram Yadav</h5>
  <p className=" text-uppercase  text-uppercase p1">Ex. Goverment Teacher</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> MA,BA,B.ED</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link> 
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/ANTIKSHA_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Ms. Antiksha</h5>
  <p className=" text-uppercase ">XMD</p>
  <p className="text-success p1"><i className="fa-solid fa-school-circle-check"></i> LLB ,MSW ,M.com, B.Com</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/priyanka_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Ms. Priyanka</h5>
  <p className=" text-uppercase ">XMD</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> MBA, BBA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  
</div>
  
  <div className="row align-items-center mt-5 text-center counseler-staff">
  <h3 className="mt-5 mb-4">Counseler & Managment Faculty</h3>
  <div className="col">
  <div class="card">
  <img src="/images/staff/neha_digital_computer_technology_kotputli.png" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Miss Neha Mittal</h5>
  <p className=" text-uppercase ">Counseler</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> B.A,B.ED</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link> 
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/laxmi_digital_computer_technology_kotputli.png" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Ms. Laxmi</h5>
  <p className=" text-uppercase  text-uppercase">Counseler</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> BA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/kk_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Krishan Kumar</h5>
  <p className=" text-uppercase ">Managment</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> MSC,BSC</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  
  
    
  </div>
  <div className="row align-items-center mt-5 text-center Tutor-staff">
  <h3 className="mt-5 mb-4">Tutor/Developer</h3>
  <div className="col">
  <div className="card">
  <img src="/images/staff/ekta_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Ekta Yadav</h5>
  <p className=" text-uppercase ">ASSITANt-DEVELOPER</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> MSC,BSC,NTT</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div class="card">
  <img src="/images/staff/digital_computer_technology_kotputli_nikhil_bagoriya.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Nikhil Bagoriya</h5>
  <p className=" text-uppercase  text-uppercase">Software Designer</p>
  <p className="text-success"><i class="fa-solid fa-school-circle-check"></i> BCA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div class="card">
  <img src="/images/staff/manoj_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Manoj Kumar</h5>
  <p class=" text-uppercase ">App Developer</p>
  <p className="text-success"><i class="fa-solid fa-school-circle-check"></i> BCA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link> 
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div class="card">
  <img src="/images/staff/nikesh_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Nikesh Yadav</h5>
  <p class=" text-uppercase ">Backend Developer</p>
  <p className="text-success"><i class="fa-solid fa-school-circle-check"></i> B.TECH</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
</div>

  <div className="row align-items-center mt-5 text-center Tutor-staff2">
  <div className="col">
  <div className="card">
  <img src="/images/staff/digital_computer_technology_kotputli_ashok_kumhar.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Ashok Kumhar</h5>
  <p className=" text-uppercase fs-6 p1">Cyber Security/Ethical Hacking</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> BCA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/digital_computer_technology_kotputli_narender_kumar_yadav.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Narender Ghoghar</h5>
  <p className=" text-uppercase ">Digital Marketing</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> B.TECH</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link> 
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/parveen_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Praveen Yadav</h5>
  <p className=" text-uppercase  text-uppercase">Rs-cit,Ccc</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> MBA,BBA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
  <div className="col">
  <div className="card">
  <img src="/images/staff/Ashok_digital_computer_technology_kotputli.webp" alt="John" width={"100%"} height={"350px"}/>
  <h5 className="mt-2 fw-bold">Ashok Kumar</h5>
  <p className=" text-uppercase ">Account,Tally</p>
  <p className="text-success"><i className="fa-solid fa-school-circle-check"></i> MA,BA</p>
  <div>
  <Link className="a"  to="https://www.instagram.com/digitalcomputer_kotputli/"><i className="fa-brands fa-instagram"></i></Link>  
    <Link className="a mx-3"  to="https://www.facebook.com/DigitalComputerTechnology"><i className="fa-brands fa-facebook"></i></Link>  
    <Link className="a me-3"  to="https://twitter.com/dctkotputli"><i className="fa-brands fa-twitter"></i></Link>
    <Link className="a"  to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin"></i></Link>
  </div>
  <p><Link to="/contact" className="contact-link"><button>Contact</button></Link></p>
</div>
  </div>
</div>
</div>
        </section>
        <Footer/>
        </>
 );
}

export default Staff;