import React from 'react'
import { Grid, H2, Paragraph } from '../styles/Contributions'
import { Flex, Image } from '../styles/Home'
import { Background } from '../styles/Launch'
import { TimeLine } from '../styles/Volunteer'
import chevron from '../Images/Vector.png'
import chevron1 from '../Images/Vector1.png'
import design from "../Images/Design is life.png"
import { useGlobalContext, useUpdatedContext } from '../context'


const Volunteer = () => {
    const {darkTheme, content} = useGlobalContext();
    const {toggleContent} = useUpdatedContext();
  return (
    <Background display="grid" place='start'>
        <Grid margin="0% 0% 0% 0%" marginLG="3% 0% 0% 0%" marginSM="5% 0% 0% 3%" marginSMM="-5% 0% 0% 3%">
            <Image display="none" displaySM="block" top="10%" left="75%" topSM="32%" leftSM="70%"> <img src={design} alt="" heightSM="200px"/> </Image>
            <Flex padding="0% 10%" paddingLG="0% 7%" marginMD="10% 0% 0% 0%" marginSM="15% 0% 0% 0%" marginSMM="40% 0% 0% 0%">
                <div>
                    <H2>Volunteer</H2>
                <Paragraph font="1.5rem" margin="-8% 1% 0% 1%" marginSMM="-5% 0% 0% 5%" fontSM="0.8rem" >Volunteer Services</Paragraph>
                </div>
               
                <Paragraph font="0.8rem" displaySM="none" ta="right"  width="100%" margin="3% 1% 0% 1%"
                marginLG="4% 1% 0% 1%" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae, dolor <br /> tincidunt diam eu, magna. Pretium tellus platea eget morbi sed lobortis cursus. A<br /> velit sed amet orci. Volutpat, risus, et tellus, id dictum.</Paragraph>
                <Paragraph display="none" displaySM="block" font="0.8rem" ta="right"  width="100%" margin="15% 1% 0% 1%" marginSM="17% 1% 0% 1%">Lorem ipsum dolor sit amet.</Paragraph>
            </Flex>
            <TimeLine>
                <div heightSMM="auto">
                    <Flex width='100%'  marginSM="0% 0% 5% 0%" justify="space-between" borderBottom={`${darkTheme ? "3px solid #fff" : "3px solid #0000004D" }`} margin="3% 0% 0% 0%">
                        <h3>2022-Present</h3>
                        <span><img onClick={toggleContent} src={content ? chevron1 : chevron} alt="" /></span>
                    </Flex>
                    <Paragraph display={`${content ? `grid` : `none`}`}  fw="600">Crowd control unit</Paragraph>
                    <Paragraph display={`${content ? `grid` : `none`}`} fw="600">Untitled design conference 2022.May 7th, 2021.See Pictures.</Paragraph>
                </div>
               
                <div heightSMM="auto">
                    <Flex width='100%' justify="space-between" borderBottom={`${darkTheme ? "3px solid #fff" : "3px solid #0000004D" }`}>
                        <h3>2021</h3>
                        <span><img src={content ? chevron1 : chevron} alt="" /></span>
                    </Flex>
                </div>
            </TimeLine>

        </Grid>

    </Background>
  )
}

export default Volunteer