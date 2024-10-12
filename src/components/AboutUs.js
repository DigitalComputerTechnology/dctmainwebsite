import Footer from ".//Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import React from 'react';
import "./css/About.css";
function AboutUs() {
    return (
        <>
            <section className="about-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_ass_mg.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundColor: "#e5fff1" }}>
                <Header />
                <div className="container">
                    <div className="row py-3">
                        <div className="col-3">
                            <a className="text-decoration-none fw-bold d-block border py-2 px-3" href="#About_The_Academy">About The Academy <img src="images/digital_computer_technology_kotputli_animated_arrow.gif" width={"25px"} alt="" /></a>
                            <a className="text-decoration-none fw-bold d-block border py-2 px-3" href="#News">We are in News <img src="images/digital_computer_technology_kotputli_animated_arrow.gif" width={"25px"} alt="" /></a>
                            <a className="text-decoration-none fw-bold d-block border py-2 px-3" href="#Director_Message">Director Message<img src="images/digital_computer_technology_kotputli_animated_arrow.gif" width={"25px"} alt="" /></a>
                            <a className="text-decoration-none fw-bold d-block border py-2 px-3" href="#">Awards and achievements<img src="images/digital_computer_technology_kotputli_animated_arrow.gif" width={"25px"} alt="" /></a>
                            <a className="text-decoration-none fw-bold d-block border py-2 px-3" href="#Managing_Director_Message">Managing Director Message <img src="images/digital_computer_technology_kotputli_animated_arrow.gif" width={"25px"} alt="" /></a>
                            <a className="text-decoration-none fw-bold d-block border py-2 px-3" href="#Approvals">Our Approvals and Legitimate<img src="images/digital_computer_technology_kotputli_animated_arrow.gif" width={"25px"} alt="" /></a>
                        </div>
                        <div className="col-9">
                            <p className="py-4 px-3 text main-para">
                                <h2 className="text-uppercase" id="About_The_Academy">About Us</h2>

                                <h5 className="text-uppercase mt-5 mb-3">Welcome to Digital Computer Technology!</h5>
                                At Digital Computer Technology, we are dedicated to providing cutting-edge technology solutions to meet the evolving needs of our clients. With a passion for innovation and a commitment to excellence, we strive to deliver top-notch digital products and services that empower businesses and individuals alike. Our team of experts leverages the latest advancements in technology to create customized solutions tailored to each client's unique requirements. Whether you're looking to enhance your online presence, improve operational efficiency, or develop innovative digital products, we have the expertise and experience to help you achieve your goals. Partner with us and experience the future of technology today.


                                <h5 className="text-uppercase mt-5 mb-3 d-containt">Our Mission</h5>
                                Our mission is to enable our clients to achieve their goals through innovative technology solutions. We believe in building long-term relationships based on trust, transparency, and mutual success. By understanding the unique needs of each client, we tailor our services to provide the most effective and efficient solutions. At Digital Computer Technology, we prioritize the unique requirements of every client, ensuring personalized service and solutions that align with their specific objectives. Our dedicated team works tirelessly to stay ahead of technological advancements, providing our clients with cutting-edge tools and strategies that drive growth and success. We are committed to fostering an environment of open communication and collaboration, where our clients feel valued and understood. Our mission goes beyond just providing services; it’s about creating a partnership that cultivates success and innovation. Together, we can navigate the ever-evolving digital landscape and achieve remarkable outcomes.

                                <h5 className="text-uppercase mt-5 mb-3">Training and Teaching</h5>

                                We are committed to fostering the next generation of tech innovators. Our comprehensive training programs and educational services are designed to equip students with the skills and knowledge needed to thrive in the ever-evolving tech landscape.

                                <h5 className="text-uppercase mt-5 mb-3">Our Training Programs</h5>
                                Coding Bootcamps: Intensive, hands-on training in various programming languages and software development frameworks.
                                Tech Workshops: Interactive sessions covering the latest technologies, tools, and industry best practices.
                                Online Courses: Flexible, self-paced learning modules that cater to different skill levels, from beginners to advanced learners.
                                Teaching Philosophy

                                Our teaching approach focuses on practical, real-world applications of technology. By leveraging the best data and the latest educational methodologies, we ensure that our students gain not only theoretical knowledge but also the hands-on experience needed to excel in the tech industry.

                                <h5 className="text-uppercase mt-5 mb-3">Why Choose Our Training Programs</h5>
                                Expert Instructors: Learn from industry professionals with extensive experience and a passion for teaching.
                                Cutting-Edge Curriculum: Stay ahead with courses that cover the latest trends and technologies in the digital world.
                                Personalized Learning: Benefit from customized learning paths that cater to individual needs and career goals.
                                Career Support: Access career guidance, resume-building workshops, and job placement assistance to help you land your dream job in tech.
                                Empower Your Future

                                Join us at Digital Computer Technology and take the first step towards a successful career in technology. Our training and teaching programs are designed to empower students with the skills and confidence needed to innovate and lead in the digital era.

                                <h5 className="text-uppercase mt-5 mb-3">Get Started Today</h5>
                                Ready to embark on your tech education journey? Explore our training programs and discover how we can help you achieve your goals. Visit our Training Page for more information and to enroll in our courses.

                                <h5 className="text-uppercase mt-5 mb-3">Who We Are</h5>
                                Digital Computer Technology is a team of highly skilled professionals with extensive experience in computer science, software development, and IT services. Our team comprises experts who are proficient in the latest technologies and trends, ensuring that we stay ahead of the curve in the digital world.


                                <h5 className="text-uppercase mt-5 mb-3" id="News">We Are In News</h5>
                                Digital Computer Technology Kotputli is making headlines for our exceptional contributions to the tech industry. Our innovative solutions and comprehensive computer courses are transforming businesses and empowering individuals in the digital age. At <a href="https://digitalcomputertechnology.in/">www.digitalcomputertechnology.in</a>, we are proud to be recognized for our commitment to excellence, trust, and transparency. Our state-of-the-art technology services and products are tailored to meet the unique needs of our clients, driving success and fostering long-term relationships. Stay tuned for more updates and join us as we continue to lead the way in digital transformation and technology education in Kotputli.

                                <div className="row align-items-center Secound-row mt-3">
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_news8.webp" width={"100%"} alt="" />
                                    </div>
                                    <div className="col img-1">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_news5.webp" width={"100%"} alt="" />
                                    </div>
                                    <div className="col img-2">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_news6.webp" width={"100%"} alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_news7.webp" width={"100%"} alt="" />
                                    </div>
                                </div>
                                <div className="row align-items-center Secound-row mt-3">
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_news3.webp" width={"100%"} alt="" />
                                    </div>
                                    <div className="col img-1">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_news2.webp" width={"100%"} alt="" />
                                    </div>
                                    <div className="col img-2">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_news4.webp" width={"100%"} alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_news1.webp" width={"100%"} alt="" />
                                    </div>
                                </div>

                                <h5 className="text-uppercase mt-5 mb-3" id="Director_Message">Director Message</h5>
                                <div className="d-flex d2">
                                    <p className="pe-4">Welcome to Digital Computer Technology! Our mission is to empower businesses with innovative technology solutions tailored to their unique needs. At <a href="https://digitalcomputertechnology.in/">www.digitalcomputertechnology.in</a>, we prioritize excellence, trust, and transparency, ensuring our clients achieve their goals with efficiency and effectiveness. Our team is dedicated to building long-term relationships, delivering top-notch digital products and services that drive success. By staying ahead of technological advancements, we provide cutting-edge tools and strategies to enhance your online presence and operational efficiency. Partner with us and experience the future of technology today. Let's achieve remarkable outcomes together!</p>
                                    <div>
                                        <img src="/images/staff/digital_computer_technology_kotputli_director1.png" width={"100%"} alt="" /><br />
                                        <b>Director.</b><span>Ramavtar Yadav</span>
                                    </div>
                                </div>

                                <h5 className="text-uppercase mt-5 mb-3 d-containt" id="Managing_Director_Message">Managing Director Message </h5>
                                <div className="d-flex d2">
                                    <p className="pe-4">Welcome to Digital Computer Technology!  At www.<a href="https://digitalcomputertechnology.in/webdevelopment">digitalcomputertechnology.in</a>, we offer a wide range of computer courses tailored for all skill levels, ensuring everyone can thrive in the digital era. Our commitment to excellence, trust, and transparency allows us to build lasting relationships while delivering top-tier digital products and services. We stay ahead of technological advancements, providing you with the latest tools and strategies to enhance your online presence and operational efficiency. Join us to master technology and achieve extraordinary success together. Let's shape the future of technology!</p>
                                    <div>
                                        <img src="/images/staff/digital_computer_technology_kotputli_md1.png" width={"100%"} alt="" /><br />
                                        <b>MD.</b><span>Pushpendra Kumar</span>
                                    </div>
                                </div>


                                <h5 className="text-uppercase mt-5 mb-3" id="Approvals">Our Approvals and Legitimate</h5>
                                Digital Computer Technology Kotputli is making headlines for our exceptional contributions to the tech industry. Our innovative solutions and comprehensive computer courses are transforming businesses and empowering individuals in the digital age. At <a href="https://digitalcomputertechnology.in/">www.digitalcomputertechnology.in</a>, we are proud to be recognized for our commitment to excellence, trust, and transparency. Our state-of-the-art technology services and products are tailored to meet the unique needs of our clients, driving success and fostering long-term relationships. Stay tuned for more updates and join us as we continue to lead the way in digital transformation and technology education in Kotputli.

                                <div className="row align-items-center Secound-row mt-3">
                                    <div class="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_rkcl.png" width={"100%"} alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_csc.png" width={"100%"} alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_csc_academy.png" width={"100%"} alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_iibf.png" width={"100%"} alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_iso.png" width={"100%"} alt="" />
                                    </div>
                                </div>
                                <div className="row align-items-center Secound-row mt-3">
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_gst.png" width={"100%"} alt="" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_msme.png" width={"100%"} alt="" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_nextgen.png" width={"100%"} alt="" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_nielit.png" width={"100%"} alt="" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_vardhman.png" width={"80%"} alt="" />
                                    </div>
                                </div>
                                <div className="row align-items-center Secound-row mt-3">
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_tm.png" width={"100%"} alt="" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/about_images/digital_computer_technology_kotputli_sunrise.png" width={"100%"} alt="" />
                                    </div>
                                    <div className="col">
                                    </div>
                                    <div className="col">
                                    </div>
                                </div>

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer/> */}
        </>
    );
}

export default AboutUs;