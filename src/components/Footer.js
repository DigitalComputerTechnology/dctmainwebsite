import { Link } from "react-router-dom";
import "./css/Footer.css";


function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="container text-white">
                <div className="row my-5">
                    <div className="col-sm py-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5500876540746!2d76.19221187538157!3d27.700297225802423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d440bf3c0eda9%3A0x8e4e0e40e3153689!2sDigital%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1722660037384!5m2!1sen!2sin" style={{width:"100%", height:"250px"}}></iframe>
                    </div>
                    <div className="col-sm py-3">
                        <b>Address <hr /></b>
                        <p>Behind Police Station, <br />
                            Sanjeevani Hospital Road, <br /> Kotputli 303108</p>
                        <p>Kotputli-Behror <br />
                            +919649911993</p>
                    </div>
                    <div className="col-sm pt-4">
                        <ul>
                            <b>Quick Links <hr /></b>
                            <li className="list-unstyled mt-3"><Link className="text-white list-unstyled text-decoration-none" to="/">Home</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="/googleads">Services</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="/about">About Us</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="/blog">Blog</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="/contact">Enquiry Form</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm pt-4">
                        <ul>
                            <b>Quick Links <hr /></b>
                            <li className="list-unstyled mt-3"><Link className="text-white list-unstyled text-decoration-none" to="/webdevelopment">Coding</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="/ethicalheacking">Hacking</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="/rscit">Basic</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">College courses</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row links-row">
                    <div className="col-sm">
                        <ul className="d-flex float-start">
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Privacy </Link>| &nbsp; </li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Articles </Link>| &nbsp;</li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Sitemap </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm py-3">
                        <ul className="d-flex float-end">
                        <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="https://www.linkedin.com/company/digitalcomputertechnology/"><img src="images/Digital Computer Technology Kotputli linkedin.png" alt="" /></Link></li>
                        <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="https://twitter.com/dctkotputli"><img src="images/Digital Computer Technology Kotputli twitter.png" alt="" /></Link></li>
                        <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="https://www.instagram.com/digitalcomputer_kotputli?igsh=MXIybzRmaHU1bTU1dQ%3D%3D&utm_source=qr"><img src="images/Digital Computer Technology Kotputli instagram.png" alt="" /></Link></li>
                        <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="https://www.facebook.com/DigitalComputerTechnology"><img src="images/Digital Computer Technology Kotputli facebook.png" alt="" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center text-white">&copy;2024 Digital Computer Technology (DCT). All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;