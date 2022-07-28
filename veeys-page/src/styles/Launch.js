import styled from 'styled-components';



export const Background = styled.div `
    height: 100vh;
    place-items: ${(props) => props.place};
    display: ${(props) => props.display};
    width: ${(props) => props.width}; 
    overflow: hidden;
    h1{
        font-size: 8rem;
        margin-bottom: 10%;
    }

    @media screen and (min-width 1500px){
        place-items:center;
    }

    @media screen and (max-width: 1024px){
        place-items:center;
    }

    @media screen and (max-width: 960px){
        height:${(props) => props.heightSM};
        width: ${(props) => props.widthSM};
        
    }
`

export const Nav = styled.header`
    position: fixed;
    z-index: 2;
    display:${(props) => props.display};
    font-family: 'Work Sans', sans-serif;
    width: 100%;
    height: 20vh;
    padding: 0% 0% 0% 10%;
    box-sizing: border-box;
    border-bottom: ${(props) => props.bb};
    

    h3{
        font-family: 'Vollkorn', serif; 
        font-size: 1.8rem;
        width: 30%;
        align-self:center;

        span{
            font-size: 3rem;
            color: #00754B;
            margin-left: 2%;
        }
    }

    @media screen and (max-width: 960px){  
        h3{
            width: 100%;
            align-self:center;
            padding-left: 5%;
        }
        background-color: ${(props) => props.bc};
        height: auto;
        width: 100%; 
    }

    @media screen and (max-width: 800px){
        background-color: ${(props) => props.bc};
        height: auto;
        width: 100%;
        padding: 0%;
    }
    
    @media screen and (max-width: 480px){
        background-color: ${(props) => props.bc};
        height: auto;
    }
    
`

export const NavLinks = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 1200px){
        width: 120%;
     }

    @media screen and (max-width: 960px){
       display:${(props) => props.display};
       width: 100%; 
       height: 30vh;
    }

`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 20vh;
    width: 100%;

    button{
        padding: 0.5rem 1rem;
        background-color: transparent;
    }

    li{
        list-style-type: none;
    }

    @media screen and (max-width: 960px){
        flex-direction: column; 
        height: 50vh;
        justify-content: space-between;
        padding: 0%;

        button{
            paddding: 0.5rem 4.5rem;
        }
     }
}

`
export const Section = styled.div`
    width: 35%;
    place-items:center;
    display:grid;
    // border-bottom: ${(props) => props.bb};

    @media screen and (max-width: 1200px){
        width: 20%;
    }

    @media screen and (max-width: 960px){
        position: ${(props) => props.position};
        width: 25%;
        top: 3%;
        right: 0%;
        padding-right: 10%;
        padding-left: 8%;
    }

    @media screen and (max-width: 600px){
        padding: ${(props) => props.paddingSM};
        margin: ${(props) => props.marginSM};
        width: 55%;
    }

`

export const Button = styled.button`
    padding: 0.3rem 1rem;
    height: 10vh;
    align-self: center;
    background-color: transparent;
    color: ${(props) => props.color};
    visibility: hidden;

    @media screen and (max-width: 960px){
        visibility: ${(props) => props.visible};
        width: ${(props) => props.widthMD};
        margin: ${(props) => props.marginMD};
    }

    @media screen and (max-width: 600px){
        width: ${(props) => props.widthSM};
        margin: ${(props) => props.marginSM};
    }
`