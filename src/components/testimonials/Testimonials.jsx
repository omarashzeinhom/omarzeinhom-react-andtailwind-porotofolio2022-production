import "./testimonials.css";
import React from "react";
// Import Swiper React components
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <>
      <Swiper
        effect={""}
        grabCursor={true}
        pagination={true}
        modules={[Pagination]}
        className="testimonials__swiper"
      >
        <section id="testimonials">
          <h5>Testimonials </h5>
          <h2>from Local Clients</h2>

          <div className="container testimonials__container">
            {testimonialsdata.map(
              ({ id, image, name, upworktestimonials, comment, title }) => {
                return (
                  <SwiperSlide
                    color="red"
                    key={id}
                    className="testimonials__swiper__slide"
                  >
                    <article className="testimonials__item">
                      <div className="testimonials__avatars">
                        <img src={image} alt={name} loading="lazy" />
                      </div>
                      <h5 className="client__name">{name}</h5>
                      <h4 className="client__title">{title}</h4>
                      <small>{comment}</small>

                      <div className="testimonials__item__cta">
                        <button
                          href={upworktestimonials}
                          className="swiper__button"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Upwork Verification
                        </button>
                      </div>
                    </article>
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </section>
      </Swiper>
    </>
  );
};

export default Testimonials;

const testimonialsdata = [
  {
    id: 1,
    name: "Ashraf Youssef",
    title: "Owner TrophyHouse EG",
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641527/personal_portofolio_assets_2022/testimonials_avatars/ay_testimonial_1_zjshan.webp",
    comment:
      '"Omar has worked on our new website from scratch, finding modern solutions and usally updating the security and website itself"',
    upworktestimonials: "www.upwork.com",
  },
  {
    id: 2,
    name: "Youssef Alaa",
    title: "CEO and Owner of the OutSourcing Company",
    image:
      "https://res.cloudinary.com/dxgqvvg0z/image/upload/v1653641527/personal_portofolio_assets_2022/testimonials_avatars/ya_testimonial_3_mwn9sf.webp",
    comment:
      '"Omar assited in my websites design , implementation and assited the lead developer in styling , functionality and various other comments in PHP."',
    upworktestimonials: "",
  },
];
