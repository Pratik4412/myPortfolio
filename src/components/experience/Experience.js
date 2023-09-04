import React from "react";
import "./experiences.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Whats Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {/* START OF FRONTEND */}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Boostrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>React.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Ajux.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        {/* START OF BACKEND */}

        <div className="experience_backend">
          <h3>Backend Decelopment</h3>
          <div className="experience_content">
            <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Express.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Fire-Base</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>Ajex</h4>
                <small className="text-light">Experienced</small>
            </article> */}
          </div>
          {/* END OF BACKEND */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
