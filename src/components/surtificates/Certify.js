import React from "react";
import "./surtificate.css"
import Img1 from "../../assets/certificate.png";
import Img2 from "../../assets/c-solo.png";
import Img3 from "../../assets/css-solo.png";
import Img4 from "../../assets/html-solo.jpg";
import Img5 from "../../assets/js-solo.png";
import Img6 from "../../assets/react-h.png";
import Img7 from "../../assets/js-i-h.png";
import Img8 from "../../assets/js-b-h.png";
import Img9 from "../../assets/css-h.png";

const data = [
  {
    id: 1,
    image: Img1,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.credential.net/55557374-0385-48bb-a6a5-ee17600b86b8#gs.5y2av3",
  },
  {
    id: 2,
    image: Img2,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.sololearn.com/certificates/CC-CVD9IBBZ",
  },
  {
    id: 3,
    image: Img3,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.sololearn.com/certificates/CC-2ESLCUQO",
  },
  {
    id: 4,
    image: Img4,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.sololearn.com/certificates/CC-KXOIQZPJ",
  },
  {
    id: 5,
    image: Img5,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.sololearn.com/certificates/CC-EJ2FNKEU",
  },
  {
    id: 6,
    image: Img6,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.hackerrank.com/certificates/a9afc4c38c5f",
  },
  {
    id: 7,
    image: Img7,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.hackerrank.com/certificates/e6558fb89273https://www.hackerrank.com/certificates/e6558fb89273",
  },
  {
    id: 8,
    image: Img8,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.hackerrank.com/certificates/cad6bc3dcd21",
  },
  {
    id: 9,
    image: Img9,
    title: "This is a portfolio item title",
    // github: "https://github.com/Prati88k4412",
    demo: "https://www.hackerrank.com/certificates/4b463a6f8f5e",
  },
];
const Certify = () => {
  return (
    <section id="certificate">
      <h2>Certifications</h2>
      <div className="container certificate_container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <>
              <article key={id} className="certificate_item">
                <div className="certificate_item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="certificate_item-cta">
                  {/* <a href={github} className="btn" target="_black">
                    Github
                  </a> */}
                  <a href={demo} className="btn btn-primary" target="_black">
                    Live Demo
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Certify;
