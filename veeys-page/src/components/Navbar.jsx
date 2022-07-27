import React from 'react'
import { Button, Nav, NavLinks, Section, Ul} from '../styles/Launch';
import {Link} from 'react-router-dom';
import image from '../Images/Group 17.png'
import light from "../Images/Light mode.png"
import line from "../Images/Line 17.png"
import line1 from "../Images/Line 17 (1).png"
import { useGlobalContext, useUpdatedContext } from '../context'
import { Flex } from '../styles/Home';



const Navbar = () => {
    const {toggleTheme, toggleNav, setShowMenu} = useUpdatedContext();
    const {themeStyles, darkTheme, border, showMenu} = useGlobalContext()

  return (
        <Nav display={`${showMenu ? "grid" :"flex"}`}  bb={`${darkTheme ? "1px solid #fff" : "1px solid #000"}`} bc={`${darkTheme ? "#010F0A" : "#fff"}`}>
            <h3>Victoria <span style={darkTheme ? themeStyles : {color:`green`}}>.</span></h3>

            <NavLinks  display={`${showMenu ? "flex" :"none"}`} >
                <Ul onClick={() => setShowMenu(false)}>
                    <li ><Link to="/" style={themeStyles} className='links'>Home </Link></li>
                    <li><Link to="contributions" style={themeStyles} className='links'>Contributions</Link></li>
                    <li><Link to="volunteer" style={themeStyles} className='links'>Volunteer</Link></li>
                    <li><Link to="community" style={themeStyles} className='links'>Community</Link></li>
                    <li><Link to="contact" style={themeStyles} className='links'>Contact Me</Link></li>
                    <button style={border}><Link to=" " style={themeStyles} className='links'>My Resume</Link></button>
                </Ul>
            </NavLinks>
            <Button onClick={toggleNav} style={border} color={darkTheme ? `#fff` : `#000`} visible={`${showMenu ? `none` : `visible`}`} marginMD="0% 5% 0% 0%">{showMenu ? "Close" : "Menu"}</Button>
            <img src={darkTheme ?line1 : line} alt="" class="line" />
            <Section style={themeStyles}  position={`${ showMenu ? "absolute" : "relative"}`} paddingSM={showMenu ? `0% 0% 0% 28%` : `0% 7% 0% 0%`}>
                    <a href=" " onClick={toggleTheme}>  <img src={`${darkTheme ? light : image}`} alt=" " height="50vh"/> </a>
            </Section>
        </Nav>
  )
}

export default Navbar