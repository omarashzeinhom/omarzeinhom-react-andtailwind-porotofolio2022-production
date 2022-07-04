import "./footer.css";
import React from "react";
import { FaDribbble } from "react-icons/fa";
import { SiLinkedin, SiGithub, SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        OAZ
      </a>

      <ul className="perma__links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#certificates">Certificates</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/omarzeinhom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://github.com/omarashzeinhom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~016ff0a16ccc85d242"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiUpwork />
        </a>
        <a
          href="https://dribbble.com/omarzeinhom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble />
        </a>
      </div>
      <div className="footer__copyright">
      <h5>NO: +201063197365</h5>
        <small>&copy; OAZ . All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
