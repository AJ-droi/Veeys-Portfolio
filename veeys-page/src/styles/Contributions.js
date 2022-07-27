import styled from "styled-components";



export const Grid = styled.div`
    display: grid;
    position: relative;
    width: 100%;
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};

    @media screen and (max-width: 1200px){
        margin: ${(props) => props.marginLG};
        overflow-x: scroll;
    }

    @media screen and (max-width:960px){
        margin: ${(props) => props.marginSM};
        width: ${(props) => props.widthSM};
        height: 100vh;
    }

    @media screen and (max-width:600px){
        margin: ${(props) => props.marginSMM};
        height: ${(props) => props.heightSMM};
    }

`

export const Box = styled.div`
    border: ${(props) => props.border};
    margin: ${(props) => props.margin};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    display: grid;
    padding: 2% 2%;
    font-family: 'Vollkorn', serif;
    background-color: transparent;
    
    h4{
        font-size: 2rem;
        font-weight: 600;
        color:#000;
        
    }

    h5{
        font-weight: 500;
        font-size:3rem;
        color:#00754B; 
    }

    span{
        margin-top: -8%;
        font-family: 'Work Sans', sans-serif;
    }

    @media screen and (max-width: 1200px){
        height: ${(props) => props.heightLG};
    }

    @media screen and (max-width: 960px){
        width: ${(props) => props.widthSM};
        height: ${(props) => props.heightSM};
        margin: 0% 1%;
    }

    @media screen and (max-width: 600px){
        height: ${(props) => props.heightSMM};
    }

`

export const Paragraph = styled.p`
    width: ${(props) => props.width};
    font-size: ${(props) => props.font};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border-top: ${(props) => props.bt};
    outline-offset: 10%;
    font-family: ${(props) => props.ff};
    font-weight: ${(props) => props.fw};
    text-align: ${(props) => props.ta};
    display: ${(props) => props.display};
    img{
        width: 2%;
    }

    @media screen and (max-width: 1200px){
        margin: ${(props) => props.marginLG} ;
        width: ${(props) => props.widthLG};
    }

    @media screen and (max-width: 960px){
        display: ${(props) => props.displaySM};
        margin: ${(props) => props.marginSM} ;
    }

    @media screen and (max-width: 600px){
        font-size: ${(props) => props.fontSM};
        margin: ${(props) => props.marginSMM};
    }
`

export const H2 = styled.h2`
    font-size: 5rem;
    font-family: 'Vollkorn', serif;
    opacity: 0.2;
    color: ${(props) => props.color};
    font-weight: 400;

    @media screen and (max-width: 600px){
        font-size: 2.5rem;
        margin: ${(props) => props.marginSMM} ;
    }
`

export const ImgContainer = styled.div`
    display: grid;
    justify-content: center;
    background-color:#BDD7D1;
    height: 300px;
    width: 300px;
    border-radius: 50%;

    @media screen and (max-width:960px){
        margin-left: 80%;
        height: 150px;
        width: 150px;
        img{
            height: 200px;
            width: auto;
            margin-left: 5%;
        }
    }

    @media screen and (max-width:600px){
        margin-left: 60%;
        
    }

    @media screen and (max-width:480px){
        margin-top: 0%;
    }
`