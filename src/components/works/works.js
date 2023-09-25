import React from 'react'
import './works.css'
import car from '../../assets/car.png'
import ecom from '../../assets/ecom.jpg'
import library from '../../assets/library.jpg'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="workTitle">My Work</h2>
        <div className='workImgs'>
            <img src={car} alt="car" className='workImg'/>
            <img src={ecom} alt="ecom" className='workImg'/>
            <img src={library} alt="library" className='workImg'/>
        </div>
        <div><a href='https://www.github.com/rishxbh' target='#'><button className="btn"><i class="fa fa-github"></i> Github</button></a></div>
    </section>
  )
}

export default Works