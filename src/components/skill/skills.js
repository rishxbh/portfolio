import React from 'react'
import './skills.css';
import java from '../../assets/java.png'
import uidesign from '../../assets/website-design.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">My Skills</span>
        <span className="skillDesc">I am full stack developer with year of skills and experience in developing backend and frontend services</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={java} alt="java" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Java Backend Development</h2>
                    <p>Development and management of REST Api Service using Java and Spring</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={uidesign} alt="webdesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>MERN Frontend Development</h2>
                    <p>Creating and developing user interfaces using React.js</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills