import React, { useRef , useState } from 'react'
import './contact.css'
import instagram from '../../assets/instagram.png'
import mail from '../../assets/mail.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form =useRef();
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const success = useRef();
  const danger = useRef();
  const submit = (e) => {
    e.preventDefault();
    if(inputName === '' || inputEmail === '' || inputMessage === '') {
      danger.current.style.display = 'block';
    } else {
      danger.current.style.display = 'none';
      sendEmail(e);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6z27xqg8', 'template_dbc3b3e4', form.current, 'kwqhPOXd4kY4zLyYs_')
      .then((result) => {
        success.current.style.display = 'block'
        setInputName('')
        setInputEmail('')
        setInputMessage('')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // setInputName = ''
      // setInputEmail = ''
      // setInputMessage = ''
  };
  return (
    <section id="contact">
        <h1 className="title">Contact Me</h1>
        <span className="desc">Please fill out the form to discuss any work opportunity</span>
        <form action="" className="form" ref={form} onSubmit={submit}>
            <input onChange={e => setInputName(e.target.value)} type="text" value={inputName} placeholder='Your Name' className='name' name='from_name'/>
            <input onChange={e => setInputEmail(e.target.value)}type="email" value={inputEmail} placeholder='Your Email' className='mail' name='from_email'/>
            <textarea onChange={e => setInputMessage(e.target.value)} placeholder='Message' rows="5" value={inputMessage} className='msg' name='message'></textarea>
            <button className="submit" type='submit' value='Send'>Submit</button>
            <div className="message">
              <div ref={success} className="success">Form Submitted Successfully, Thank You</div>
              <div ref= {danger} className="danger">Fields can't be empty</div>
            </div>
            <div className="links">
                <a href='mailto:rishabh112000@gmail.com' target='#' ><img src={mail} alt="email" srcset="" className='link'/></a>
                <a href='https://www.linkedin.com/in/rishabh-mehta-96203297/' target='#'><img src={linkedin} alt="linkedin" srcset="" className='link'/></a>
                <a href='https://www.instagram.com/rishabhhmehta/' target='#'><img src={instagram} alt="instagram" srcset="" className='link'/></a>
                <img src={twitter} alt="twitter" srcset="" className='link'/>
            </div>
        </form>
    </section>
  )
}

export default Contact