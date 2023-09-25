import React, { useState } from 'react'
import './NavBar.css'
// import R from '../../assets/RLogo.png'
import {Link} from 'react-scroll'
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);
  return (
        <nav className='navbar'>
            {/* <img src={R} alt='logo' className='logo'/> */}
            <h1 className='R'>R.</h1>
            <div className='menu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='menuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-30} duration={500} className='menuListItem'>Work</Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500}><button className="menuBtn" >
                <img src={contact} alt="contact" className='contactImg' />
                Contact Me
            </button>
            </Link>

            <img src={menu} alt="burger menu" className="menuBar" onClick={() => setShowMenu(!showMenu)} />
            {/* <h1 className='menuBar'>R.</h1> */}
            <div className='navMenu' style={{display : showMenu?'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-30} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Work</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-30} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Contact</Link>
            </div>

        </nav>
  )
}

export default NavBar