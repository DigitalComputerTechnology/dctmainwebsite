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
            <h1 className="px-5 fw-bolder">Maximize <span>your</span> <br/>
            Reach with <span>Google Ads!</span></h1>
            <p>Unlock the full potential of your business with Google Ads. Drive targeted traffic, increase sales, and boost your online presence with our expert Google Ads services. At Digital Computer Technology, we specialize in creating high-impact campaigns that deliver measurable results. Join the countless businesses that have transformed their marketing strategies and achieved success. Get started today!</p>
        </div>
       <div class="col">
         <img src="/images/services_images/digital_computer_technology_kotputli_img1.png" width={"100%"} alt=""/>
        </div>
        </div>
        </div>
        </section>

        <section className="services-third-section main-third">
        <div class="container">
            <h2 className="text-center text-uppercase fw-bold">Related Services</h2>
         <div class="row align-items-center">
         <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <img className="main-i" src="/images/services_images/digital_computer_technology_kotputli_google_ad.webp" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase fw-semibold mb-2">Google Ads</h5><br/>
            <Link to="/contact" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">contact</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        <div class="col shadow-sm p-3 mb-5 mx-2 bg-body-tertiary rounded">
            <img className="main-i" src="/images/services_images/digital_computer_technology_kotputli_meta_ads.webp" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase">META Ads</h5><br/>
            <Link to="/contact" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">contact</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <img className="main-i" src="/images/services_images/digital_computer_technology_kotputli_SOCIAL_MEDIA_MANEGMENT.png" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase">SOCIAL MEDIA MANAGEMENT</h5><br/>
            <Link to="/contact" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">contact</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        </div>
        <div class="row align-items-center">
         <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <img className="main-i" src="/images/services_images/digital_computer_technology_kotputli_keywords_research.webp" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase fw-semibold mb-2">KEYWORD RESEARCH</h5><br/>
            <Link to="/contact" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">contact</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        <div class="col shadow-sm p-3 mb-5 mx-2 bg-body-tertiary rounded">
            <img className="main-i" src="/images/services_images/digital_computer_technology_kotputli_cms.webp" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase">CMS</h5><br/>
            <Link to="/contact" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">contact</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <img className="main-i" src="/images/services_images/digital_computer_technology_kotputli_seo.webp" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase">SEO</h5><br/>
            <Link to="/contact" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">contact</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        </div>
        </div>
        </section>

        <section className="services-fourth-section my-5">
        <div class="container py-5">
         <div class="row align-items-center">
         <div class="col">
            <img src="/images/services_images/digital_computer_technology_kotputli_img13.webp" alt="" width={"100%"}/>
        </div>
        <div class="col">
            <h1 className="px-5 fw-bolder">
            Drive Targeted <span>Traffic To</span> <br/>
            Your Website</h1>
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
            <img src="/images/staff/digital_computer_technology_kotputli_narender_kumar_yadav.webp" width={"100%"} height={"400px"} alt=""/>
            <div className="px-1 pt-3">
            <h5 className="fw-bold">Narender Kumar Yadav</h5>
            <br/>
            <p className="p-des">Narender Kumar Yadav, Operations Manager at Digital Computer Technology, brings 15+ years of expertise in optimizing operations and delivering top-tier digital services, ensuring efficiency and excellence.
</p>
            <div className="pt-3 mt-3 border-line"><span className="fw-bold">B.TECH</span><span className="float-end fs-5"><Link className="link-success" to="https://www.instagram.com/digitalcomputer_kotputli?igsh=MXIybzRmaHU1bTU1dQ%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></Link></span><span className="float-end fs-5 li"><Link  className="link-success" to="https://www.linkedin.com/company/digitalcomputertechnology/"><i class="fa-brands fa-linkedin-in"></i></Link></span></div>
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