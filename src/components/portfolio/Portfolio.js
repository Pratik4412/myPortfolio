import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import Certify from "../surtificates/Certify";



const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com/Pratik4412",
    demo: "https://bright-centaur-a69652.netlify.app"
  },  
  {
    id: 2,
    image: IMG2,
    title: "This is a portfolio item title",
    github: "https://github.com/Pratik4412",
    demo: "https://capable-twilight-1045a7.netlify.app"
  },
  {
    id: 3,
    image: IMG3,
    title: "This is a portfolio item title",
    github: "https://github.com/Pratik4412",
    demo: "https://boisterous-stardust-5b01eb.netlify.app"
  },
  {
    id: 4,
    image: IMG4,
    title: "This is a portfolio item title",
    github: "https://github.com/Pratik4412",
    demo: "https://rad-clafoutis-b554cc.netlify.app"
  },
  {
    id: 5,
    image: IMG5,
    title: "This is a portfolio item title",
    github: "https://github.com/Pratik4412",
    demo: "https://silly-tarsier-9b8573.netlify.app"
  },
  {
    id: 6,
    image: IMG6,
    title: "This is a portfolio item title",
    github: "https://github.com/Pratik4412",
    demo: "https://wonderful-madeleine-3a40b1.netlify.app"
  },
];
const Portfolio = () =>{
  
  return (
    <>
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">

        {data.map(({ id, image, title, github, demo }) => {
          return (
          <>
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_black">Github</a>
              <a href={demo} className="btn btn-primary" target="_black">Live Demo</a>
            </div>
          </article>
          </>
          )
        })
        }
      </div>
      <Certify/>
    </section>
    
    </>
    
  );
};



export default Portfolio;
