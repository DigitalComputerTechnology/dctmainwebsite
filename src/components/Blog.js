import "./css/Services.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Blog() {
    return (
        <>
            <section className="blog-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_contact_header_img.webp)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "300px" }}>
                <Header />
                <div className="container my-5">
                    <div className="row text-center">
                        <h1 className="text-uppercase text-white fw-bolder mt-5 fs-1"><u>BLOG</u></h1>
                    </div>
                </div>
            </section>
            <section className="blog-second-section my-4">
                <div class="container">
                    <div class="blog-row row align-items-center">
                        <div class="col">
                            <Link className="text-decoration-none fs-2" to="/marketingblog">
                                <video width={"100%"} autoPlay loop muted>
                                    <source src="/images/blog_images/digital_computer_technology_kotputli_digital_marketing_blog1.mp4" type="video/mp4"></source>
                                </video>
                            </Link>
                            <div className="p-2">
                                <Link className="text-decoration-none fs-2" to="/marketingblog">
                                    <h2 className="fs-3">Best Digital Marketing Services in Kotputli – Digital Computer Technology</h2></Link>
                                <h5>Overview of Digital Marketing</h5>
                                <p>Digital marketing has become an essential aspect of modern business strategies. In an era where online presence can make or break a company, understanding and implementing effective digital marketing practices is crucial. This article explores the best digital marketing services in Kotputli provided by Digital Computer Technology, a renowned expert in the field.</p>
                                <Link className="text-decoration-none border rounded-pill px-5 py-2" to="/marketingblog">View</Link>
                            </div>
                        </div>
                        <div class="col">
                            <Link className="text-decoration-none fs-2" to="">
                                <video width={"100%"} autoPlay loop muted>
                                    <source src="/images/blog_images/digital_computer_technology_kotputli_digital_marketing_blog2.mp4" type="video/mp4"></source>
                                </video>
                            </Link>
                            <div className="p-2">
                                <Link className="text-decoration-none fs-2" to="">
                                    <h2 className="fs-3">Best Digital Marketing Services in Kotputli – Digital Computer Technology</h2></Link>
                                <h5>Overview of Digital Marketing</h5>
                                <p>Digital marketing has become an essential aspect of modern business strategies. In an era where online presence can make or break a company, understanding and implementing effective digital marketing practices is crucial. This article explores the best digital marketing services in Kotputli provided by Digital Computer Technology, a renowned expert in the field.</p>
                                <Link className="text-decoration-none border rounded-pill px-5 py-2" to="">View</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Blog;