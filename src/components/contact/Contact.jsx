import React, { useRef } from 'react';
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s4a2jxm', 'template_7yf1aw5', form.current, 'c2aZX504KYs3Eja_5')
   e.target.reset();
   
   
  };




  

  
  return (
    <section id="contact">
      <h5>Message Me!</h5>
      <h2>Contact me here</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <AiOutlineMail className="contact__option_icon" /> 
            <h4>Email</h4>
            <a href="mailto::omar.ashraf.zeinhom@hotmail.com" target="blank">
             Send me a message!
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="email"
            placeholder="Enter Name Here"
            required
          />

          <input type="text" name="email" placeholder="Enter email here..." required />
          <textarea
            name="message"
            cols="10"
            rows="8"
            placeholder="Enter Your Message here"
            required
          ></textarea> 
          <button type="submit" className="btn btn-primary" >Submit </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
