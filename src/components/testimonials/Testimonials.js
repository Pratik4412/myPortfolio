import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Felix-IT's",
    review:"Felix-It exceeded my expectations in every way. It not only deepened br my knowledge of full stack development but also equipped me with practical skills that I can apply in my career. I highly recommend this class to anyone looking to gain a strong foundation in full stack developer and engage in a dynamic and enriching learning journey.",
  },
  {
    avatar: AVTR2,
    name: "Niraj Joshi",
    review:"Sir Neeraj Joshi In the classroom, every day is a new adventure. He has an amazing talent for making even the most challenging subjects engaging and exciting. And they use a wide range of teaching methods, from interactive experiments to thought-provoking discussions, to ensure that every student understands the material.",
  },
  {
    avatar: AVTR3,
    name: "MERN Stack Developer",
    review:"The MERN Stack, which stands for MongoDB, Express, React, and Node.js, represents one of the most dynamic and powerful technology stacks in the field of web development today. It's the foundation of countless web applications and platforms that have transformed the way we live, work, and connect with each other.",
  },
  {
    avatar: AVTR4,
    name: "Fullstack Developer",
    review:"From the moment I delved into the realm of full stack development, it became evident that this field is the epitome of versatility. It allows you to seamlessly transition between the front end and back end of web development, providing a holistic understanding of the entire process this is the full stack development course. ",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from class</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      >
      {data.map(({avatar, name, review}, index) =>{
        return(
      <SwiperSlide key={index} className="testimonial">
        <div className="client_avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <h5 className="slient_name">{name}</h5>
        <small className="client_review">{review}</small>
      </SwiperSlide>
       )
      })
      }
      </Swiper>
    </section>
  );
};

export default Testimonials;
