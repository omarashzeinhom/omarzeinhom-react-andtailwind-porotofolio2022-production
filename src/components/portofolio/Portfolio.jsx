import React from "react";
import "./portfolio.css";



import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; import "swiper/swiper-bundle.min.css";
// Import Swiper styles
import { Pagination } from "swiper";







const Portfolio = () => {
  return (
    <>
    <section id="portfolio">
    <h5>My Recent work</h5>
      <h2>portfolio</h2>
     <Swiper
        slidesPerView={3}
        effect={"fade"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="portfolio__swiper"
      >
    
  
      <div className="container portfolio__container">
        {imgdata.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide>

            <article className="portfolio__item" key={id}>
              <div className="portfolio__item__image">
                <img src={image} alt={title} loading="lazy"/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item__cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
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
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653668024/personal_portofolio_assets_2022/portfolioitems/The_Shop_ScreenShot_oxty2t.webp",
    title: "The Shop Amazon Clone",
    github: "https://github.com/omarashzeinhom/theshop-",
    demo: "https://th3shop-8d8a3.web.app/",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653668024/personal_portofolio_assets_2022/portfolioitems/Graph_CMS_Blog_lgrlln.webp",
    title: " GraphQL Blog",
    github: "https://github.com/omarashzeinhom/Caferino_GraphQL_Blog ",
    demo: "https://dynamico-gaming.netlify.app",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653670112/personal_portofolio_assets_2022/portfolioitems/1.7_s6x3dp.png",
    title: "Trophy Houseeg",
    demo: "https://www.trophyhouseeg.com/",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653668024/personal_portofolio_assets_2022/portfolioitems/Friendly_Eats_sqptnu.webp",
    title: "Egyptian Eats Firebase",
    github: "https://github.com/omarashzeinhom/theshop-",
    demo: "https://egyptianeats-49729.web.app/",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641531/personal_portofolio_assets_2022/portfolioitems/graphql_portfolio_item_3_szope9.webp",
    title: "Landing Page",
    github: "https://github.com/omarashzeinhom/Dynamic-Landing-Page-Project",
    demo: "https://dynamiclandingpage-oaz.netlify.app/",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641532/personal_portofolio_assets_2022/portfolioitems/libros_portfolio_item_1_uhod5y.webp",
    title: "Libros NodeJS Book Tracking Web Application",
    github:
      "https://github.com/omarashzeinhom/Libros---Book-Tracking-JS-WebApp",
    demo: "https://libros-bookshelf-andgoedu.netlify.app",
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641536/personal_portofolio_assets_2022/portfolioitems/personal_portfolio_item_2_ao7ncs.webp",
    title: "Personal Portfolio",
    github:
      "https://github.com/omarashzeinhom/Omar-AbdelRahman-Portofolio-2022",
    demo: "https://omarabdelrahmanportfolio.netlify.app",
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641533/personal_portofolio_assets_2022/portfolioitems/aboutme_portfolio_item_5_u3zc4b.webp",
    title: "My First Ever portfolio",
    github: "https://github.com/omarashzeinhom/Curriculum-vitae",
    demo: "https://dribbble.com/shots/17719535-HTML5-CSS3-JS-About-Page-UI-UX",
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641537/personal_portofolio_assets_2022/portfolioitems/nodejs_weather_api_portfolio_item_6_rwqwx9.webp",
    title: "Weatherly NodeJS Weather Journaling Web Application",
    github: "https://github.com/omarashzeinhom/Rose-Weather-API-Project",
    demo: "https://dribbble.com/shots/17719546-Weatherly-UI-UX",
  },
  
  

];


