import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import "../css/Services.css";
function GoogleAds() {
    return ( 
        <>
        <section className="services-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/scservices_images/digital_computer_technology_kotputli_img1.png)`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Header/>
        <div class="container text-center">
         <div class="row align-items-center mt-5">
         <div class="col text-start text-uppercase first">
            <h1 className="px-5 fw-bolder"> Ultimate <span>Cybersecurity:</span> <br/>
            Protect <span>Assets</span></h1>
            <p>Use our comprehensive digital marketing services, including Google Ads, SEO, Meta Ads, social media marketing, and keyword research. Enhance your brand's visibility and engagement with our expert content marketing system tailored to drive results.  </p>
        </div>
       <div class="col">
         <img className="first-section-img" src="/images/digital_computer_technology_kotputli_course_Ethical-hacking-slide4.jpg" width={"100%"} alt=""/>
        </div>
        </div>
        </div>
        </section>

        <section className="services-third-section my-5">
        <div class="container shadow py-5 px-4">
            <h2 className="text-center text-uppercase fw-bold">Related Services</h2>
            <p className="text-center mb-4">Provide exceptional content creation, SEO optimization, and digital marketing services to boost your online presence and drive conversions.</p>
         <div class="row align-items-center">
         <div class="col p-3 bg-body-tertiary rounded">
            <video width={"100%"} autoPlay loop muted>
                <source src="/images/services_images/digital_computer_technology_kotputli_ux-ui_design.mp4" type="video/mp4"></source>
            </video>
        </div>
        <div class="col p-3 mx-2 bg-body-tertiary rounded">
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Threat Detection & Prevention
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      In today's digital landscape, threat detection and prevention are crucial for robust cybersecurity. Proactive threat detection involves continuous monitoring to identify potential security breaches before they occur. Advanced tools and techniques, such as machine learning and behavioral analysis, enhance the ability to detect anomalies. Prevention strategies include implementing strong access controls, regular system updates, and employee training. By integrating these measures, organizations can effectively mitigate risks, protect sensitive data
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Data Protection & Privacy
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Data protection and privacy are foundational pillars of cybersecurity. Safeguarding sensitive information involves implementing robust encryption, access controls, and regular audits. Privacy measures ensure that personal data is collected, processed, and stored in compliance with regulations such as GDPR. Organizations must adopt a proactive approach, including employee training and incident response planning, to defend against data breaches and cyber threats. By prioritizing data protection and privacy, companies can build trust.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Incident Response & Recovery
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Effective incident response and recovery are critical for minimizing the impact of cyberattacks. A robust incident response plan includes timely detection, containment, and eradication of threats. Recovery strategies focus on restoring systems, data integrity, and normal operations swiftly. Regular drills, updates, and employee training enhance preparedness. By implementing these measures, organizations can reduce downtime, mitigate damage, and strengthen their resilience against future cyber incidents, ensuring business continuity and data.
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
        </section>

        <section className="services-fourth-section my-5">
        <div class="container py-5">
         <div class="row align-items-center">
         <div class="col">
            <img src="/images/digital_computer_technology_kotputli_cyber-security_slide3.jpeg" alt="" width={"100%"}/>
        </div>
        <div class="col">
            <h1 className="px-5 fw-bolder">
            Fortifying Your <span>Digital</span> <br/>
            World Securely</h1>
            <div className="d-flex px-5 mt-5 mb-4">
            <div><img src="/images/services_images/digital_computer_technology_kotputli_img14.webp" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold text-uppercase">beside you</h6>
            <p>More profit with less investment</p>
            </div>
            </div>
            <div className="d-flex px-5 my-4">
            <div><img src="/images/services_images/digital_computer_technology_kotputli_img15.webp" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Easily Accessible</h6>
            <p>Technical Services Institute in Kotputli</p>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>

        <section className="services-fiveth-section">
        <div class="container">
            <h2 className="text-center text-uppercase fw-bold">What Client’s say</h2>
            <p className="text-center mb-5">Exceptional service and results! Our business growth has soared thanks to their expertise and dedication.</p>
         <div class="row align-items-center mt-4">
         <div class="col border p-3 bg-body-tertiary rounded">
           <p>““Working with digital computer technology has been a game-changer for our brand. His proficiency in digital marketing, especially SEO and PPC campaigns, has increased quality traffic to our site. IT Certification Kotputli
           The professionalism and commitment to excellence of the Online IT Training Kotputli team is truly commendable.”</p>
           <div className="d-flex align-items-center">
            <div><img className="rounded-circle" src="/images/services_images/digital_computer_technology_kotputli_client1.png" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Mangal</h6>
            <p>Cisco Systems</p>
            </div>
            </div>
           </div>
         <div class="col border p-3 mx-3 bg-body-tertiary rounded">
           <p>““We have been thoroughly impressed by the services provided by digital computer technology. IT Training in Kotputli, Their ability to provide customized digital marketing solutions has helped us achieve our business objectives. Computer Skill Development Kotputli Their team is professional, reliable and always ready to go the extra mile.””</p>
           <div className="d-flex align-items-center">
            <div><img className="rounded-circle" src="/images/services_images/digital_computer_technology_kotputli_client1.png" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Manisha Khulsh</h6>
            <p>Oracle</p>
            </div>
            </div>
           </div>
         <div class="col border p-3 bg-body-tertiary rounded">
           <p>“Digital computer technology has been an invaluable partner in our digital transformation journey. Top IT Training Institute Kotputli His expertise in social media management and content marketing has significantly increased the visibility and engagement of our brand. Kotputli IT Training Center Their result-driven approach is second to none.”</p>
           <div className="d-flex align-items-center">
            <div><img className="rounded-circle" src="/images/services_images/digital_computer_technology_kotputli_client1.png" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Anish Rocal</h6>
            <p>Dell Technologies</p>
            </div>
            </div>
           </div>
        
        </div>
        </div>
        </section>

        <section className="services-sixth-section">
        <div class="container ">
        <h2 className="text-center"><u>Our Staff</u></h2>
        <div class="row align-items-center mt-4">
         
        <div class="col shadow p-3 bg-body-tertiary rounded">
            <img src="/images/staff/digital_computer_technology_kotputli_director.webp" width={"100%"} height={"400px"} alt=""/>
            <div className="px-1 pt-3">
            <h5 className="fw-bold">Director</h5>
            <p className="mb-2 text-uppercase">Ramavtar Yadav</p>
            <p className="p-des">Ramavtar Yadav, Director of Digital Computer Technology, brings over 15 years of expertise in tech services. His leadership drives innovative solutions and exceptional client results.</p>
            <div className="pt-2 mt-3 border-line"><span className="fw-bold"></span><span className="fs-5"><Link className="link-success" to="https://www.instagram.com/digitalcomputer_kotputli?igsh=MXIybzRmaHU1bTU1dQ%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></Link></span><span className="float-end fs-5 li"><Link className="link-success" to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin-in"></i></Link></span></div>
            </div>
        </div>
        <div class="col shadow p-3 mx-2 bg-body-tertiary rounded">
            <img src="/images/staff/digital_computer_technology_kotputli_md.webp" width={"100%"} height={"400px"} alt=""/>
            <div className="px-1 pt-3">
            <h5 className="fw-bold">Managing Director</h5>
            <p className="mb-2 text-uppercase">Pushpendra Kumar Yadav</p>
            <p className="p-des">Pushpendra Kumar Yadav, Managing Director of Digital Computer Technology, harnesses over 15 years of experience to drive innovation and deliver exceptional client results.</p>
            <div className="pt-2 mt-3 border-line"><span className="fw-bold">MCA,BCA</span><span className="float-end fs-5"><Link className="link-success" to="https://www.instagram.com/digitalcomputer_kotputli?igsh=MXIybzRmaHU1bTU1dQ%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></Link></span><span className="float-end fs-5 li"><Link  className="link-success" to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin-in"></i></Link></span></div>
            </div>
        </div>
        <div class="col shadow p-3 bg-body-tertiary rounded">
            <img src="/images/staff/digital_computer_technology_kotputli_ashok_kumhar.webp" width={"100%"} height={"400px"} alt=""/>
            <div className="px-1 pt-3">
            <h5 className="fw-bold">Ashok Kumhar</h5>
            <br/>
            <p className="p-des">Ashok Kumhar, Operations Manager at Digital Computer Technology, brings 15+ years of expertise in optimizing operations and delivering top-tier digital services, ensuring efficiency and excellence.</p>
            <div className="pt-3 mt-3 border-line"><span className="fw-bold">BCA</span><span className="float-end fs-5"><Link className="link-success" to="https://www.instagram.com/digitalcomputer_kotputli?igsh=MXIybzRmaHU1bTU1dQ%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></Link></span><span className="float-end fs-5 li"><Link  className="link-success" to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin-in"></i></Link></span></div>
            </div>
        </div>
        </div>
        </div>
        </section>


        <section className="services-seventh-section">
        <div class="container ">
         <div class="row align-items-center text-center text-white">
            <h2 className="mb-3 text-uppercase">Ask me a question</h2>
            <p className="mb-5">You can ask any question related to the web page</p>
            <form>
                <span>
                <input className="rounded-pill" type="email" required placeholder="Email Address"/>
                <input className="rounded-pill fw-bold" type="submit" value="Submit"/>
                </span>
            </form>
        </div>
        </div>
        </section>


        <Footer/>
        </>
     );
}

export default GoogleAds;