import React from 'react'
import { Background} from '../styles/Launch'
import { useGlobalContext, useUpdatedContext } from '../context'
import { Flex, Image, Imagge } from '../styles/Home'
import image from '../Images/Group 17.png'
import light from "../Images/Light mode.png"
import design from "../Images/Design is life.png"


const Launch = () => {
  const {toggleTheme} = useUpdatedContext();
  const {darkTheme} = useGlobalContext()
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