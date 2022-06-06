import "./navigationbar.css";
import React, { useState } from "react";
import { SiFiles } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiFileMarkLine } from "react-icons/ri";
import { VscCallOutgoing } from "react-icons/vsc";
import { MdWork,MdOutlineDesignServices } from "react-icons/md";
import {FaGamepad} from "react-icons/fa";

const NavigationBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <IoMdHome />
      </a>
     
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <CgProfile />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <MdWork />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <MdOutlineDesignServices />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <SiFiles />
      </a>
      <a
        href="#certificates"
        className={activeNav === "#certificates" ? "active" : ""}
        onClick={() => setActiveNav("#certificates")}
      >
        <RiFileMarkLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <VscCallOutgoing />
      </a>
     
    </nav>
  );
};

export default NavigationBar;
