import React from 'react'
import './intro.css'
import btnImage from '../../assets/hireme.png'
import { Link } from 'react-scroll'
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Rishabh</span><br />Software Developer</span>
                <p className="introPara">Java Developer with a year of hands-on expertise in designing, developing, and optimizing Java-based applications. <br />Committed to continuous learning
                    and staying abreast of the latest technologies and best practices. <br /> I am
                    having an entry-level experience in Software Development with good
                    problem solving ability. <br /> Eager to learn and adapt upcoming opportunities.</p>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500}><button className="btn"><img src={btnImage} alt="Hire" className='btnImg' />Hire me</button></Link>
                <div className="me"></div>
            </div>
        </section>
    )
}

export default Intro