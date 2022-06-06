import "./services.css";
import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import {
  FaWordpressSimple,
  FaResearchgate,
  FaDeviantart,
  FaYoutube,
  FaKey,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { SiSemanticuireact, SiTailwindcss, SiJavascript } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";

const Services = () => {
  return (
    <section id="services">
      <h5>What services i</h5>
      <h2>Offer !!!</h2>

      <div className="container services__container">
        {/*Begin UI/UX Design Card */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <SiTailwindcss className="service__list__icon" loading="lazy" />
              <p>TailWind.</p>
            </li>
            <li>
              <SiSemanticuireact
                className="service__list__icon"
                loading="lazy"
              />
              <p>Semantic UI React.</p>
            </li>
            <li>
              <FaSass className="service__list__icon" loading="lazy" />
              <p>Sass.</p>
            </li>
            <li>
              <FaBootstrap className="service__list__icon" loading="lazy" />
              <p>Bootstrap 5 and MDBS5</p>
            </li>
          </ul>
        </article>
        {/*End UI/UX Design Card */}
        {/*Begin Web Development Card */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineApi className="service__list__icon" loading="lazy" />
              <p>API.</p>
            </li>
            <li>
              <FaKey className="service__list__icon" loading="lazy" />
              <p>Authentication</p>
            </li>

            <li>
              <RiPagesFill className="service__list__icon" loading="lazy" />
              <p>Landing Pages <SiJavascript className="service__list__icon"/></p>
            </li>
            <li>
              <FaWordpressSimple
                className="service__list__icon"
                loading="lazy"
              />
              <p>Custom WP Themes and plugins</p>
            </li>
          </ul>
        </article>
        {/*End Web DevelopmentCard */}
        {/*Begin WebDevelopment Content Creation Card */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaResearchgate className="service__list__icon" loading="lazy" />
              <a
                href="https://www.researchgate.net/profile/Omar-Abdelrahman-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Research Gate
              </a>
            </li>
            <li>
              <FaDeviantart className="service__list__icon" loading="lazy" />
              <a
                href="https://www.deviantart.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deviant Art.
              </a>
            </li>
            <li>
              <FaYoutube className="service__list__icon" loading="lazy" />
              <a
                href="https://www.youtube.com/channel/UCT36vWlpobEtZiIAJKVoPGw/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Andogedu
              </a>
            </li>
          </ul>
        </article>
        {/*End WebDevelopment Design Card */}
      </div>
    </section>
  );
};

export default Services;
