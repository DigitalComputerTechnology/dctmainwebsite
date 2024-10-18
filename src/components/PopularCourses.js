import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const courses = [
    {
        title: "Rs-Cit",
        duration: "3 Months",
        fees: "3,200/-",
        description: "RS-CIT course in Kotputli introduces Digital Computer Technology, covering essential skills for efficient computing and enhancing professional opportunities.",
        imgSrc: "./images/digital_computer_technology_kotputli_app-development.webp",
        link: "/rscit"
    },
    {
        title: "Account",
        duration: "9 Months",
        fees: "15,000/-",
        description: "Explore accounting essentials in Kotputli, integrating Digital Computer Technology for comprehensive financial management skills essential in modern business environments.",
        imgSrc: "./images/digital_computer_technology_kotputli_game-development.webp",
        link: "/account"
    },
    {
        title: "Tally-With-Gst",
        duration: "3 Months",
        fees: "5,000/-",
        description: "Enroll in Tally-with-GST course in Kotputli to learn Digital Computer Technology integration for proficient accounting and tax management skills in modern business environments.",
        imgSrc: "./images/digital_computer_technology_kotputli_ethical-hacking.webp",
        link: "/tallywithgst"
    },
    {
        title: "Web Designer",
        duration: "9 Months",
        fees: "50,000/-",
        description: "Master web design in Kotputli with a focus on Digital Computer Technology. Learn UI/UX principles and tools for creating visually appealing and functional websites.",
        imgSrc: "./images/digital_computer_technology_kotputli_app-development.webp",
        link: "/webdesigner"
    },
    {
        title: "Ethical Hacking",
        duration: "9 Months",
        fees: "50,000/-",
        description: "Learn ethical hacking in Kotputli, integrating Digital Computer Technology. Acquire skills in cybersecurity, penetration testing, and ethical hacking techniques for secure digital environments.",
        imgSrc: "./images/digital_computer_technology_kotputli_cyber-security.webp",
        link: "/ethicalhacking"
    },
    {
        title: "Coding For Kids",
        duration: "3 Months",
        fees: "3,000/-",
        description: "Introduce kids in Kotputli to coding with Digital Computer Technology. Engaging courses in programming basics to foster creativity and logical thinking in young learners.",
        imgSrc: "./images/digital_computer_technology_kotputli_app-development.webp",
        link: "/codingforkids"
    },
    {
        title: "App Development",
        duration: "9 Months",
        fees: "50,000/-",
        description: "Discover app development in Kotputli, leveraging Digital Computer Technology. Master mobile app creation with essential skills in coding, design, and deployment for modern platforms.",
        imgSrc: "./images/digital_computer_technology_kotputli_game-development.webp",
        link: "/appdevelopment"
    },
    {
        title: "Digital Marketing",
        duration: "9 Months",
        fees: "50,000/-",
        description: "Explore Digital Marketing in Kotputli, utilizing Digital Computer Technology. Master SEO, social media, and analytics for effective online presence and business growth strategies.",
        imgSrc: "./images/digital_computer_technology_kotputli_cyber-security.webp",
        link: "/digitalmarketing"
    },
    {
        title: "Game Development",
        duration: "9 Months",
        fees: "50,000/-",
        description: "Dive into game development in Kotputli with Digital Computer Technology. Learn coding, design, and animation for creating interactive and engaging games for various platforms.",
        imgSrc: "./images/digital_computer_technology_kotputli_cyber-security.webp",
        link: "/gamedevelopment"
    },
];

const PopularCourses = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3 // Show 3 courses at a time
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="courses-third-section my-5">
            <div className="container">
                <h1 className="text-center fw-semibold text-uppercase main-heading mb-5">Popular Courses</h1>
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} transitionDuration={500}>
                    {courses.map((course, idx) => (
                        <div className="popular-courses shadow bg-body-tertiary rounded" key={idx}>
                            <Link to={course.link}>
                                <img src={course.imgSrc} width={"100%"} alt={course.title} />
                            </Link>
                            <Link className="text-decoration-none" to={course.link}>
                                <h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">{course.title}</h5>
                            </Link>
                            <div className="my-4 mx-3 fw-bold">
                                <span className="bg-light px-2 py-1 rounded">DURATION: {course.duration}</span>
                                <span className="float-end bg-light px-2 py-1 rounded">Fees: {course.fees}</span>
                            </div>
                            <p className="mt-2 mx-3">{course.description}</p>
                            <button className="btn mb-3 mx-3">
                                <Link className="text-decoration-none" to={course.link}>MORE...</Link>
                            </button>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default PopularCourses;
