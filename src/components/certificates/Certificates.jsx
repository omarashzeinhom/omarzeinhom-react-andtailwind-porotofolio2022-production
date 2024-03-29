import React from "react";
import "./certifcates.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { EffectCards } from "swiper";

const Certificates = () => {
  return (
<>
<section id="certificates">

<h5>Certifcates</h5>
      <h2>Verify them below</h2>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="certificate__swiper"
      >

    
     
      <div className="container certificates__container">
        {certificatedata.map(
          ({ id, imagecert, titlecert, verify, smalltxt }) => {
            return (
              <SwiperSlide         className="certificate__swiper__slide"
              >
              <article className="certificates__item" key={id}>
                <div className="certificates__item__image">
                  <img src={imagecert} alt={titlecert} loading="lazy" />
                </div>
                <h3>{titlecert}</h3>
                <small>
                  <em>{smalltxt}</em>
                </small>
                <div className="certificates__item__cta">
                  <a
                    href={verify}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify
                  </a>
                </div>
              </article>
              </SwiperSlide>
            );
          }
        )}
      </div>
    </Swiper>
    </section>

    </>

  );
};

export default Certificates;




const certificatedata = [
  {
    id: 1,
    imagecert: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658353800/personal_portofolio_assets_2022/certificateitems/optimized%20certifcate/udacity_nanodegree_cert_item_1_yrf9nh_aujicm.webp",
    titlecert: "Udacity Front End Web Development Professional Nano Degree",
    verify: "https://graduation.udacity.com/confirm/TKQDP47N",
    smalltxt: "TKQDP47N",
  },
  {
    id: 2,
    imagecert: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658353800/personal_portofolio_assets_2022/certificateitems/optimized%20certifcate/udacity_nanodegree_cert_item_2_andrse_nruyc9.webp",
    titlecert: "Udacity Web Development Challenger Track Nano Degree",
    verify: "https://graduation.udacity.com/confirm/UZKL42TA",
    smalltxt: "UZKL42TA",
  },
  {
    id: 3,
    imagecert: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658353800/personal_portofolio_assets_2022/certificateitems/optimized%20certifcate/cybrary_cert_item_3_ixkele_r77jkb.webp",
    titlecert: "Social Engineering and Manipulation",
    verify: "https://www.cybrary.it/info/verify-certificate/",
    smalltxt: "CC-d46f755c-f7ab-417c-aba0-fe008f196604",
  },
  {
    id: 4,
    imagecert: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641536/personal_portofolio_assets_2022/certificateitems/udemy_python_cert_item_4_catkfr.webp",
    titlecert: "Intro to Python",
    verify:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658353800/personal_portofolio_assets_2022/certificateitems/optimized%20certifcate/udemy_python_cert_item_4_catkfr_g3y8uw.webp",
    smalltxt: "UC-ZA24664P",
  },
  {
    id: 5,
    imagecert: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658353800/personal_portofolio_assets_2022/certificateitems/optimized%20certifcate/coursera_cert_item_5_adza0k_gq9jgu.webp",
    titlecert: "Coursera Ask Questions to Make Data-Driven Decisions",
    verify:
      "https://www.coursera.org/account/accomplishments/verify/GPBUT8MQ24VR",
    smalltxt: "GPBUT8MQ24VR",
  },
  {
    id: 6,
    imagecert:"https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658353800/personal_portofolio_assets_2022/certificateitems/optimized%20certifcate/coursera_cert_item_6_eatrdp_zzqu1t.webp",
    titlecert: "Foundations: Data, Data, Everywhere",
    verify:
      "https://www.coursera.org/account/accomplishments/verify/HXKRLNTRMZVK",
    smalltxt: "HXKRLNTRMZVK",
  },
];
