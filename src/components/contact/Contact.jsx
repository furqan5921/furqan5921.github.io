import React from 'react'
import  "./contact.css"
import {IoMdMail} from "react-icons/io"
import {SiMessenger} from "react-icons/si"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200
});
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xlweux7', 'template_1b13euq', form.current, 'BQjt4DP3z8PNCZFzZ')
    e.target.reset()
  };
  return (
    <section id='contact' data-aos={"flip-right"}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoMdMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>furqanali5921@gmail.com</h5>
            <a target={"_blank"} href="https://mail.google.com/mail/?view=cm&fs=1&to=furqanali5921@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Mohammad Furqan</h5>
            <a target={"_blank"} href="https://m.me/furqan.insaner">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+919516222196</h5>
            <a target={"_blank"} href="https://api.whatsapp.com/send?phone=+919516222196">Send a Message</a>

          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
