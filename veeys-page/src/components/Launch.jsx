import React, { useContext } from 'react'
import { Background, Section} from '../styles/Launch'
import { ThemeProvider } from 'styled-components'
import { AppContext, useGlobalContext, useUpdatedContext } from '../context'
import { Flex, Image, Imagge } from '../styles/Home'
import image from '../Images/Group 17.png'
import light from "../Images/Light mode.png"
import design from "../Images/Design is life.png"


const Launch = () => {
  const {toggleTheme, toggleNav, setShowMenu} = useUpdatedContext();
  const {themeStyles, darkTheme, showMenu} = useGlobalContext()
  return (
    <Background  place="center" display="grid" width="100%" heightSM="100vh" >
      <Flex>
        <Image top="-11%" left="-3%" displaySM="none"> <img src={design} alt="" /> </Image>
        <Imagge top="5%" left="90%" topLG="3%" leftLG="88%" topSM="5%" leftSM="83%" >
          <a href=" " onClick={toggleTheme}> <img src={`${darkTheme ? light : image}`} alt=" " /> </a>
        </Imagge>
      </Flex>
      <h1>V</h1>
    </Background>
  )
}

export default Launch