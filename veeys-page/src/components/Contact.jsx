import React from 'react'
import { Grid, ImgContainer } from '../styles/Contributions'
import { Flex, Form, Image, Text } from '../styles/Home'
import { Background } from '../styles/Launch'
import design from "../Images/Design is life.png";
import arrow from "../Images/Vector (1).png";
import darkArrow from "../Images/Vector (2).png";
import contactImg from "../Images/Memoji Girls 11-29.png";
import { useGlobalContext } from '../context';

const Contact = () => {
    const {borderStyles, darkTheme} = useGlobalContext();
  return (
    <Background>
        <Grid margin="12% 0% 0% 0%" marginLG="5% 0% 0% 0%" marginSM="10% 0% 0% 0%" marginSMM="12% 0% 0% 0%">
            <Text padding=" 0% 0% 0% 10%">
                <h3 >Do you have any idea?<br /> lets create the future</h3>
                <Image top="-8%" left="37%" topLG="13%" leftLG="45%" topMD="2%" leftMD="38%" topSM="8%" leftSM="50%"> <img src={design} alt="" /> </Image>
            </Text>

            <Flex  width="100%" justify="space-between" padding="0% 13% 5% 10%" fdSM="column">
                <Form >
                    <div style={borderStyles}>
                        <label htmlFor= "name">Name</label>
                        <input type="text" name="Name" id="name"></input>
                    </div>
                    <div style={borderStyles}>
                        <label htmlFor= "email">Email</label>
                        <input type="email" name="Email" id="email"></input>
                    </div>
                    <div style={borderStyles}>
                        <label htmlFor= "message">Message</label>
                        <input type="text" name="Message" id="message"></input>
                    </div>
                   
                    <h5>SEND <span><img src={darkTheme ? darkArrow : arrow} alt="" className='arrow'/></span></h5>
                </Form> 
                <ImgContainer >
                    <img src={contactImg} alt="" width="300px" height="300px" />
                </ImgContainer>
            </Flex>
        </Grid>

    </Background>
  )
}

export default Contact