import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Javascript</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Javascript Introduction</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>javascript variables</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>javascript Objects </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>javascript Functions</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>javascript Dom Intro </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web API Intro</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>javascript Ajax Intro</p>
            </li>
          </ul>
        </article>
           {/*END FOR FAVASCRIPT*/}
        <article className='service'>
          <div className="service_head">
            <h3>React.JS</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>JSX(Javascript syntex extention)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Single Page Applications</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Fragments</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Types of Component</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Hoocks</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>API Fetching</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Form Handling</p>
            </li>
          </ul>
        </article>
           {/*END FOR react.js*/}
        <article className='service'>
          <div className="service_head">
            <h3>Bankend Concept</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Express.JS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Node.js</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mongoose Atlas</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Blocking & Non-Bloking</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>CRUD operations</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Postman</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>MongoDb</p>
            </li>
          </ul>
        </article>
           {/*END FOR react.js*/}
      </div>
    </section>
  )
}

export default Services