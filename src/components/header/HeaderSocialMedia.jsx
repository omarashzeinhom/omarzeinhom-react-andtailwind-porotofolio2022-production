import React from "react";
import { FaDribbble, FaYoutube } from "react-icons/fa";
import { SiLinkedin, SiGithub, SiUpwork } from "react-icons/si";
import "./header.css";

const HeaderSocialMedia = () => {
  return (
    <div className="header__socials">
      <big>
        {" "}
        <em>Social Media</em>
      </big>
      <a
        href="https://www.linkedin.com/in/omarzeinhom/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="header__socials__icon">
          <SiLinkedin />
        </div>
      </a>
      <a
        href="https://github.com/omarashzeinhom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="header__socials__icon">
          <SiGithub />
        </div>
      </a>
      <a
        href="https://www.upwork.com/freelancers/~016ff0a16ccc85d242"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="header__socials__icon">
          <SiUpwork />
        </div>
      </a>
      <a
        href="https://dribbble.com/omarzeinhom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="header__socials__icon">
          <FaDribbble />
        </div>
      </a>

      <a
        href="https://www.youtube.com/channel/UCT36vWlpobEtZiIAJKVoPGw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="header__socials__icon">
          <FaYoutube />
        </div>
      </a>
    </div>
  );
};

export default HeaderSocialMedia;
