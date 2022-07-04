import React from "react";
import "./experience.css";
import {
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  
} from "react-icons/fa";
import {
  SiMysql,
  SiGraphql,
  SiSemanticuireact,
  SiTailwindcss,
  SiJavascript,
  SiVirtualbox,
  SiLinux,
  SiKalilinux,
  SiPhpmyadmin,
  SiFirebase
} from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills have i accquired?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* Experience with frontend card */}

        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details__icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCss3Alt className="experience__details__icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details__icon" />
              <div>
                <h4>TailWind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiSemanticuireact className="experience__details__icon" />
              <div>
                <h4>Semantic UI React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <FaSass className="experience__details__icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          
          </div>
        </div>
        {/* End of Experience with frontend card */}

        {/* Experience with Backend card Start */}

        <div className="experience__backend">
          <div className="experience__content">
            <h3>Back End Development</h3>
            <br />
            <article className="experience__details">
              <FaNodeJs className="experience__details__icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiGraphql className="experience__details__icon" />
              <div>
                <h4>GraphQl</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details__icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <SiPhpmyadmin className="experience__details__icon" />
              <div>
                <h4>PhpMyadmin</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <SiFirebase className="experience__details__icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Experience with Backend card */}

        {/* Experience Securitycard Start */}

        <div className="experience__backend">
          <div className="experience__content">
            <h3>Security and Ethical Hacking</h3>
            <br />
            <article className="experience__details">
              <SiVirtualbox className="experience__details__icon" />
              <div>
                <h4>VirtualBox and VMWarePlayer</h4>
                <small className="text-light">Intermediate</small>
                <p>
                  MsfVenom <br />
                  Metasploitable2,3 <br />
                  Hackintosh and dmg to iso formats <br />
                  Private networks
                </p>
              </div>
            </article>

            <article className="experience__details">
              <SiLinux className="experience__details__icon" />
              <div>
                <h4>Linux </h4>
                <small className="text-light">Proficient</small>
                <p>
                  Arch (Manjaro and PureArch) <br />
                  Debian (Kali and Ubuntu)
                </p>
              </div>
            </article>

            <article className="experience__details">
              <VscTerminalCmd className="experience__details__icon" />
              <div>
                <h4>CMD Prompt</h4>
                <small className="text-light">Intermediate</small>
                <p>
                  Netstat
                  <br />
                  Networking cmds
                  <br />
                </p>
              </div>
            </article>

            <article className="experience__details">
              <SiKalilinux className="experience__details__icon" />
              <div>
                <h4>Kali Tools</h4>
                <small className="text-light">Web Analysis Tools</small>
                <p>
                  Nitko
                  <br />
                  Dmitry
                  <br />
                  Nmap
                  <br />
                  burpsuite
                  <br />
                  wpscan
                  <br />
                  ddos with bootloaders and msfvenom Networking cmds
                </p>
              </div>
            </article>
          </div>
        </div>
        {/* End of Security  card */}
      </div>
    </section>
  );
};

export default Experience;
