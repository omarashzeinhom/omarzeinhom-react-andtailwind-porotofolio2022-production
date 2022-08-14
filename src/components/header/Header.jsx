import "./header.css";
import React from "react";
import Cta from "./Cta";
import HeaderSocialMedia from "./HeaderSocialMedia";
import {ImArrowDownRight2} from "react-icons/im";


const Header = () => {
  return (
    <section className="container" id="header">
    <header>
      <div className="container header__container">
        <h5>Hello !, I'm</h5>
        <h1>Omar AbdAlRahman</h1>
        <h5 className="text-light">A Fullstack JS Developer</h5>
        <Cta />
        <div className="me">
          <a href="#contact" className="scroll__down">
          <ImArrowDownRight2/>
          Scroll Down
        </a>
          <img src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641529/personal_portofolio_assets_2022/pp_home_removedbg_g5eq7r.webp" alt="me" loading="lazy"/>
          <HeaderSocialMedia />
        </div>
      </div>
    </header>
    </section>

  );
};

export default Header;
