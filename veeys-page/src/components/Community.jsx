import React from 'react'
import { Flex } from "../styles/Home";
import { Background } from "../styles/Launch";
import { Grid, Box, Paragraph, H2 } from "../styles/Contributions";
import images from "../Images/20220523_122808 1.png";
import { useGlobalContext } from '../context';
const Community = () => {
  const {darkTheme, themeStyles, width} = useGlobalContext();
  return (
    <div style={width}>
      <Background style={themeStyles} display="grid" place='start'>
        <Grid margin="11% 0% 0% 8%" marginLG="15% 0% 0% 12%" marginSM="15% 0% 0% 3%" marginSMM="28% 0% 0% 12%">
          <H2 marginSMM="0% 0% 0% 3%">Community</H2>
          <Flex  width="90%"widthLG="120%" widthSM="150%" widthSMM="300%" heightSM="80vh" marginSM="3% 0%" paddingLG="0% 15% 0% 0%">
            <Box margin="0%" border={`${darkTheme ? "2px solid #fff" : "2px solid #000"}`} height="50vh" width="32%" widthLG="35%" widthSM="30%" heightSM="55vh" heightSMM="50vh"  >
              <img src={images} alt="" width="50px" height="50px"  />
              <h4 style={darkTheme ? {color:`#fff`} : themeStyles}>
                FOF UYO<br />
              </h4>
              <span>Role: Member</span>
              <Paragraph font="0.8rem" bt={`${darkTheme ? "1px solid #fff" : "1px solid #000"}`} ff="'Work Sans', sans-serif;" fw="500" padding="4% 0% 0% 0%">
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Metus aliquam posuere ut.
              </Paragraph>
            </Box>
            <Box margin="0% 0.5%" border={`${darkTheme ? "2px solid #fff" : "2px solid #000"}`}  height="50vh" width="32%" widthLG="35%" widthSM="30%" heightSM="55vh" heightSMM="50vh">
              <img src={images} alt="" width="50px" height="50px" />   
              <h4 style={darkTheme ? {color:`#fff`} : themeStyles}>
                FOF UYO<br />
              </h4>
              <span>Role: Member</span>
              <Paragraph font="0.8rem" bt={`${darkTheme ? "1px solid #fff" : "1px solid #000"}`} ff="'Work Sans', sans-serif;" padding="4% 0% 0% 0%" fw="500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Metus aliquam posuere ut.
              </Paragraph>
            </Box>
            <Box margin="0%" border={`${darkTheme ? "2px solid #fff" : "2px solid #000"}`}  height="50vh" width="32%" widthLG="35%" widthSM="30%" heightSM="55vh" heightSMM="50vh">
              <img src={images} alt="" width="50px" height="50px" />
              <h4 style={darkTheme ? {color:`#fff`} : themeStyles}>
                FOF UYO<br />
              </h4>
              <span>Role: Member</span>
              <Paragraph font="0.8rem" bt={`${darkTheme ? "1px solid #fff" : "1px solid #000"}`} ff="'Work Sans', sans-serif;" padding="4% 0% 0% 0%" fw="500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Metus aliquam posuere ut.
              </Paragraph>
            </Box>
          </Flex>
        </Grid>
      </Background>
    </div>
    
  )
}

export default Community