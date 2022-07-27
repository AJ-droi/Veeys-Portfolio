import React from "react";
import { Flex } from "../styles/Home";
import { Background } from "../styles/Launch";
import { Grid, Box, Paragraph, H2 } from "../styles/Contributions";
import arrow from "../Images/Vector (1).png";
import darkArrow from "../Images/Vector (2).png";
import { useGlobalContext } from "../context";

const Contributions = () => {
  const{themeStyles, boxValue, darkTheme} = useGlobalContext();
  return (
       <Background style={themeStyles} width="110%"   place='start'>
        <Grid margin="11% 0% 0% 8%" marginLG="15% 0% 0% 12%" marginSM="15% 0% 0% 3%" marginSMM="35% 0% 0% 12%" >
          <H2 marginSMM="0% 0% 0% 2%" color={`${darkTheme ? `#fff` : `#161313`}`}>Works</H2>
          <Paragraph font="1.5rem" margin="-3% 2% 0% 1%" marginSMM="-5% 0% 0% 3%">Selected Projects</Paragraph>

          <Flex justify="space-between" width="90%"widthLG="100%" widthSM="120%" widthSMM="300%" heightSM="80vh" marginSM="3% 0%" paddingLG="0% 20% 0% 0%">
            {boxValue.map((box, idx) => {
              const {id } = box;
              return (
                <Box key={id}  border="4px solid #00754B" height="50vh" width="32%" widthLG="35%" widthSM="30%" heightLG="45vh" heightSM="57vh" heightSMM="50vh" >
                  <h5>Oxigin <br /> App</h5>
                  <Paragraph font="0.6rem">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur ultrices <br /> nisi velit nisi mattis. Id sapien eu
                    dignissim cursus auctor fringilla viverra.
                    <br /> Volutpat urna feugiat nunc fames proin. Vel leo felis purus
                    a. At etiam id <br /> euismod cursus augue.
                  </Paragraph>
                  <Paragraph font="0.8rem" padding="2% 0%">
                    Casestudy
                    <span>
                      <img src={darkTheme ? darkArrow : arrow} alt="" className="arrow" />
                    </span>
                  </Paragraph>
                </Box>
              )
            })}
            {/* <Box onMouseOver={slider} className="show" border="4px solid #00754B" height="50vh" >
              <h5>
                Oxigin <br /> App
              </h5>
              <Paragraph font="0.6rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ultrices <br /> nisi velit nisi mattis. Id sapien eu
                dignissim cursus auctor fringilla viverra.
                <br /> Volutpat urna feugiat nunc fames proin. Vel leo felis purus
                a. At etiam id <br /> euismod cursus augue.
              </Paragraph>
              <Paragraph font="0.8rem" padding="2% 0%">
                Casestudy
                <span>
                  <img src={arrow} alt="" className="arrow" />
                </span>
              </Paragraph>
            </Box>
            <Box margin="0% 1%" border="4px solid #00754B" height="50vh" >
              <h5>
                Oxigin <br /> App
              </h5>
              <Paragraph font="0.6rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ultrices <br /> nisi velit nisi mattis. Id sapien eu
                dignissim cursus auctor fringilla viverra.
                <br /> Volutpat urna feugiat nunc fames proin. Vel leo felis purus
                a. At etiam id <br /> euismod cursus augue.
              </Paragraph>
              <Paragraph font="0.8rem" padding="2% 0%">
                Casestudy
                <span>
                  <img src={arrow} alt="" className="arrow" />
                </span>
              </Paragraph>
            </Box>
            <Box border="4px solid #00754B" height="50vh" >
              <h5>
                Oxigin <br /> App
              </h5>
              <Paragraph font="0.6rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ultrices <br /> nisi velit nisi mattis. Id sapien eu
                dignissim cursus auctor fringilla viverra.
                <br /> Volutpat urna feugiat nunc fames proin. Vel leo felis purus
                a. At etiam id <br /> euismod cursus augue.
              </Paragraph>
              <Paragraph font="0.8rem" padding="2% 0%">
                Casestudy
                <span>
                  <img src={arrow} alt="" className="arrow" />
                </span>
              </Paragraph>
            </Box> */}
          </Flex>
        </Grid>
      </Background>
   
  );
};

export default Contributions;
