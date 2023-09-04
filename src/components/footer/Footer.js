import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">
        PRATIK
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#abput">About</a>
        </li>
        <li>
          <a href="#expeirience">Expeirience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/profile.php?id=100087141513617&mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/Pratik_Dhere_1?t=QIkIWuoi54vIrsOfAJIilw&s=09"
          target="_blank"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://instagram.com/pratik_dhere_patil?utm_source=qr&igshid=OGU0MmVlOWVjOQ=="
          target="_blank"
        >
          <FiInstagram />
        </a>
      </div>


      <div className="footer_copyright">
        <small>PRATIK Portfolio &copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
