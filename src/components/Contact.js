import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/Services.css";
import Footer from "./Footer";
import Header from "./Header";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u7r4899', 'template_wjfg9x9', form.current, 'VkH6gNxXV3O5RXYZs')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Message sent successfully! We will get back to you soon.');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message. Please try again later.');
        }
      );

    e.target.reset();
  };

  return (
    <>
      <ToastContainer />
      <section className="contact-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_contact_header_img.webp)`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Header />
        <div className="container my-5">
          <div className="row text-center">
            <h1 className="text-uppercase text-white fw-bolder mt-5 fs-1"><u>CONTACT-US</u></h1>
          </div>
        </div>
      </section>
      <section className="contact-second-section my-3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <img src="/images/digital_computer_technology_kotputli_contact_gif.gif" alt="" width={"100%"} />
            </div>
            <div class="col">
            <form ref={form} onSubmit={sendEmail} className="row g-3">
                <div class="col-md-6">
                  <input type="text" name="user_name" class="form-control" placeholder="Full Name" required/>
                </div>
                <div class="col-md-6">
                  <input type="email" name="user_email" class="form-control" placeholder="E-mail" required/>
                </div>
                <div class="col-md-6">
                  <input type="tel" name="whatsapp_number" class="form-control" placeholder="Mobile Number"  pattern="^\d{10}$" title="Please enter a valid phone number in (10) digits" required />
                </div>
                <div class="col-md-6">
                <select id="inputState" name="subject" className="form-select">
                    <option value="">Courses/Services</option>
                    <option value="Rs -Cit">Rs -Cit</option>
                    <option value="Ccc">Ccc</option>
                    <option value="Account">Account</option>
                    <option value="TallyWithGst">TallyWithGst</option>
                    <option value="Web Designer">Web Designer</option>
                    <option value="Ethical Heacking">Ethical Heacking</option>
                    <option value="Coding For Kid's">Coding For Kid's</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Ad's">Ad's</option>
                    <option value="Web solutions">Web solutions</option>
                    <option value="Ux/Ui Design">Ux/Ui Design</option>
                    <option value="CyberSecurity">CyberSecurity</option>
                    <option value="Remote It Support">Remote It Support</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="E-Commerce Platform">E-Commerce Platform</option>
                  </select>
                </div>
                <div class="col-12">
                  <input name="message" rows="3" cols="34"  placeholder="Message" class="form-control" id="inputAddress" required />
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary mb-5">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;