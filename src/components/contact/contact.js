import React, { useRef } from 'react'
import './contact.css'
import instagram from '../../assets/instagram.png'
import mail from '../../assets/mail.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6z7xqg8', 'template_dc3b3e4', form.current, '2s2GwhSny0C9cB_N-nXkL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
        <h1 className="title">Contact Me</h1>
        <span className="desc">Please fill out the form to discuss any work opportunity</span>
        <form action="" className="form" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Your Name' className='name' name='from_name'/>
            <input type="email" placeholder='Your Email' className='mail' name='from_email'/>
            <textarea placeholder='Message' rows="5" className='msg' name='message'></textarea>
            <button className="submit" type='submit' value='Send'>Submit</button>
            <div className="links">
                <img src={mail} alt="email" srcset="" className='link'/>
                <a href='https://www.linkedin.com/in/rishabh-mehta-96203297/' target='#'><img src={linkedin} alt="linkedin" srcset="" className='link'/></a>
                <a href='https://www.instagram.com/rishabhhmehta/' target='#'><img src={instagram} alt="instagram" srcset="" className='link'/></a>
                <img src={twitter} alt="twitter" srcset="" className='link'/>
            </div>
        </form>
    </section>
  )
}

export default Contact