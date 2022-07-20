import React from "react";
import "./portfolio.css";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Import Swiper styles
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent work</h5>
        <h2>portfolio</h2>
        <Swiper
          slidesPerView={3}
          effect={"fade"}
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          width="500"
          height="500"
          modules={[Pagination]}
          className="portfolio__swiper"
        >
          <div className="container portfolio__container">
            {imgdata.map(({ id, image, title, github, demo }) => {
              return (
                <SwiperSlide>
                  <article className="portfolio__item" key={id}>
                      <img src={image} alt={title} loading="lazy" className="portfolio__item__image" key={id}/>
                    <h3>{title}</h3>
                    <div className="portfolio__item__cta">
                      <a
                        href={github}
                        className="btn__portofolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        href={demo}
                        className="btn__portofolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Portfolio;

const imgdata = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/The_Shop_ScreenShot_oxty2t_drts5e.webp",
    title: "The Shop Amazon Clone",
    github: "https://th3shop-8d8a3.web.app/",
    demo: "https://th3shop-8d8a3.web.app/",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350973/personal_portofolio_assets_2022/optimized%20photos/Graph_CMS_Blog_lgrlln_1_1_shcipb.webp",
    title: " GraphQL Blog",
    github:
      "https://github.com/omarashzeinhom/GraphCMS-and-ReactJS-Gaming-blog-",
    demo: "https://dynamico-gaming.netlify.app",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350864/personal_portofolio_assets_2022/portfolioitems/trophyhouseeg-website-collage_fmllkm_1_c0wars.webp",
    title: "Trophy Houseeg",
    github: "https://www.gifthouseeg.org/",
    demo: "https://www.gifthouseeg.org/",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/UBER-CLONE-JS-OA_jr0uyf_btpzqm.webp",
    title: "UberCloneJS",
    demo: "https://wuber-clone-nextjs-and-firebase-app.vercel.app/login",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/UBER-CLONE-TS-O.A_se3ln3_cq49nu.webp",
    title: "UBER Clone Ionic TS",
    demo: "https://uber-clone-ionic6-react-typescript-production.vercel.app/login",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/Friendly_Eats_sqptnu_llxm6r.webp",
    title: "Egyptian Eats Firebase",
    github: "https://github.com/omarashzeinhom/theshop-",
    demo: "https://egyptianeats-49729.web.app/",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/graphql_portfolio_item_3_szope9_zlo9mx.webp",
    title: "Landing Page",
    github: "https://github.com/omarashzeinhom/Dynamic-Landing-Page-Project",
    demo: "https://dynamiclandingpage-oaz.netlify.app/",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/libros_portfolio_item_1_uhod5y_v2fzwe.webp",
    title: "Libros NodeJS Book Tracking Web Application",
    github:
      "https://github.com/omarashzeinhom/Libros---Book-Tracking-JS-WebApp",
    demo: "https://libros-bookshelf-andgoedu.netlify.app",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/personal_portfolio_item_2_ao7ncs_ojkaxj.webp",
    title: "Personal Portfolio",
    github:
      "https://github.com/omarashzeinhom/Omar-AbdelRahman-Portofolio-2022",
    demo: "https://omarabdelrahmanportfolio.netlify.app",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/aboutme_portfolio_item_5_u3zc4b_casywo.webp",
    title: "My First Ever portfolio",
    github: "https://github.com/omarashzeinhom/Curriculum-vitae",
    demo: "https://dribbble.com/shots/17719535-HTML5-CSS3-JS-About-Page-UI-UX",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1658350761/personal_portofolio_assets_2022/optimized%20photos/nodejs_weather_api_portfolio_item_6_rwqwx9_ufuugn.webp",
    title: "Weatherly NodeJS Weather Journaling Web Application",
    github: "https://github.com/omarashzeinhom/Rose-Weather-API-Project",
    demo: "https://dribbble.com/shots/17719546-Weatherly-UI-UX",
  },
];
