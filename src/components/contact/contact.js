import React from 'react'
import './contact.css'
import instagram from '../../assets/instagram.png'
import mail from '../../assets/mail.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'

const Contact = () => {
  return (
    <section id="contact">
        <h1 className="title">Contact Me</h1>
        <span className="desc">Please fill out the form to discuss any work oppotunity</span>
        <form action="" className="form">
            <input type="text" placeholder='Your Name' className='name' />
            <input type="email" placeholder='Your Email' className='mail' />
            <textarea name="message" placeholder='Message' rows="5" className='msg'></textarea>
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