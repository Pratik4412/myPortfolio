import React, {useRef} from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import  emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5glqa6n', 'template_8x9y7ph', form.current, 'qGhNNKofhIBzmSfj8')
    
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>pratikdhere2019@gmail.com</h5>
            <a href="mailto:pratikdhere2019@gmail.com" target="_blank">Send a message</a>

          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://twitter.com/home" target="_blank">Send a message</a>

          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 7507326462</h5>
            <a href="https://api.whatsapp.com/send?phone=7507326462" target="_blank">Send a message</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact