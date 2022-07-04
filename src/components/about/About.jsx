import "./about.css";
import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineUsers, HiOutlineBriefcase } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="about__section">
      <h5>Get to know</h5>
      <h2>me.</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__pp">
            <img src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641528/personal_portofolio_assets_2022/pp_home_left_side_bfu1q7.webp" alt="aboutmepp" className="about__me__pp" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <HiOutlineBriefcase className="about__icon" />
              <h5>Experience</h5>
              <small className="about__small__text">1+ Years Working</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small className="about__small__text">4+ Local Clients</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small className="about__small__text">10+</small>
            </article>
          </div>
          <p className="about__p__text">
            I am a Fresh graduate , looking for job opportunities in the
            financial sector , aswell as looking for freelancing opportunities
            for Web Development with JavaScript!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
