import React from 'react';
import { Background} from '../styles/Launch';
import { Flex, Text, HomeImg,Scroll, Image } from '../styles/Home';
import arrow from "../Images/Vector (1).png";
import darkArrow from "../Images/Vector (2).png"
import girl from "../Images/Memoji Girls 11-13.png"
import design from "../Images/Design is life.png"
import { useGlobalContext } from '../context';
import homeImg from "../Images/Rectangle 2.png"
import darkHomeImg from "../Images/Rectangle 2 (1).png"


const Home = () => {
  const {darkTheme} = useGlobalContext();

  return (
      <Background  display='flex' place='center' heightSM="120vh">
          <Flex width='100%' justify='space-between' padding='10% 10% 0% 10%' paddingLG="15% 7% 0% 7%" paddingSM="15% 0% 0% 25%" paddingSMM="0% 0% 0% 15%" position="relative" fdSM="column" alignSM="start" >
            <Text>
              <h4>Hi, I am Victoria </h4>
              <Image topXL="44%" leftXL="43%" top="30%" left="43%" topLG="18%" leftLG="48%" topSM="12%" leftSM="55%" topSMM="7%" leftSMM="37%"> <img src={design} alt="" /> </Image>
              <p>
                I am a Product Designer (UI, UX).  I am passionate about <br />
                creating user-centered designs, gathering and translating<br />
                user data into design decisions and products.
              </p>
              <Flex justify='space-between' widthXL="70%" width="60%" position="relative" widthLG="60%" widthSM="70%" widthSMM="80%" >
                <h5>Resume <span><img src={darkTheme ? darkArrow : arrow} alt="" className='arrow' /></span></h5>
                <h5>Linkedin <span><img src={darkTheme ? darkArrow : arrow} alt="" className='arrow' /></span></h5>
                <h5>Behance <span><img src={darkTheme ? darkArrow : arrow} alt="" className='arrow' /></span></h5>
              </Flex>
            </Text>
            <HomeImg bc={`url(${darkTheme ? darkHomeImg : homeImg})`}>
              <img src={girl} alt='' />
            </HomeImg>
          </Flex>
          {/* <Scroll>Scroll<span><img src={darkTheme ? darkArrow : arrow} alt="" className='arrow'/></span> </Scroll> */}
      </Background>
  )
}

export default Home