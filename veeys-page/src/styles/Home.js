import styled from "styled-components";


export const Flex =styled.div`
    display: flex;
    flex-direction: ${(props) => props.fd};
    position: ${(props) => props.position};
    width: ${(props) => props.width};
    justify-content: ${(props) => props.justify };
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border-bottom: ${(props) => props.borderBottom};
    span{
        margin-top: 5%;
    }

    @media screen and (min-width: 1500px){
        width: ${(props) => props.widthXL};
        padding-right: ${(props) => props.prXL};
        justify-content: space-between;
        h5{
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 1200px){
        width: ${(props) => props.widthLG};
        padding: ${(props) => props.paddingLG};
        margin: ${(props) => props.marginMD};
    }

    @media screen and (max-width: 960px){
        flex-direction: ${(props) => props.fdSM};
        height: ${(props) => props.heightSM};
        // justify-content: ${(props) => props.justifySM };
        // align-items: ${(props) => props.alignSM};
        width: ${(props) => props.widthSM};
        margin: ${(props) => props.marginSM};
        padding: ${(props) => props.paddingSM};
       
        h5{
            img{
                width: 10%;
                margin-left: 4%;
            }
        }
        
    }

    @media screen and (max-width: 600px){
        width: ${(props) => props.widthSMM};
        margin: ${(props) => props.marginSMM};
        padding: ${(props) => props.paddingSMM};
    }

`

export const Text = styled.div`
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    align-self: center;

    h3{
        font-size: 3.0rem;
        font-weight: 500;
    }

    h4{
        font-size: 5rem;
        font-weight: 400;
    }

    h3,h4,h5{
        font-family: 'Vollkorn', serif;
    }

    p{
        font-family: 'Work Sans', serif;
        line-height: 1.5;
        padding-bottom: 3%;
    }

    @media screen and (min-width: 1500px){
        align-self: center;
        padding: ${(props) => props.paddingXL};
        h4{
            font-size: 7rem;
        }

        p{
            font-size:2rem;
        }
    }

    @media screen and (max-width: 1024px){
        padding: ${(props) => props.paddingSM};
        
    }

    @media screen and (max-width: 960px){
        margin-top: 8%;
        text-align: justfy;

        h3{
            font-size: 2rem;
        }

        h4{
            font-size: 3rem;
        }

        h5{
            font-size: 0.9rem;
        }

        p{
            padding-top: 5%;
        }

        @media screen and (max-width: 600px){
            margin-top: 25%;
            width: 90%;
            
            h3{
                font-size: 1.5rem;
            }

            br{
                display: none;
            }
        }


    }

`

export const Image = styled.div`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    display: ${(props) => props.display};
    height:${(props) => props.heightSM};
    img{
        height: 200px;
    }

    @media screen and (min-width: 1500px){
        top: ${(props) => props.topXL};
        left: ${(props) => props.leftXL};
    }

    @media screen and (max-width: 1200px){
        top: ${(props) => props.topLG};
        left: ${(props) => props.leftLG};
    }

    @media screen and (max-width: 960px){
        top: ${(props) => props.topMD};
        left: ${(props) => props.leftMD};
        display: ${(props) => props.displaySM};
        img{
            height: 200px;
        }
    }

    @media screen and (max-width: 769px){
        display: ${(props) =>props.displaySM};
        left: 35%;
        top: ${(props) => props.topSM};
        left: ${(props) => props.leftSM};
        img{
            height: 180px;
        }
    }

    @media screen and (max-width: 480px){
        top: ${(props) => props.topSMM};
        left: ${(props) => props.leftSMM};
    }

`

export const Imagge = styled.div`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    display: ${(props) => props.display};
    height:${(props) => props.heightSM};
    img{
        height: 60px;
    }

    @media screen and (max-width: 1200px){
        top: ${(props) => props.topLG};
        left: ${(props) => props.leftLG};
    }

    @media screen and (max-width: 960px){
        top: ${(props) => props.topMD};
        left: ${(props) => props.leftMD};
        display: ${(props) => props.displaySM};
        // img{
        //     height: 200px;
        // }
    }

    @media screen and (max-width: 769px){
        left: 35%;
        top: ${(props) => props.topSM};
        left: ${(props) => props.leftSM};
        // img{
        //     height: 180px;
        // }
    }

    @media screen and (max-width: 480px){
        top: ${(props) => props.topSMM};
        left: ${(props) => props.leftSMM};
    }

`

export const HomeImg = styled.div`
    display:grid;
    place-items: center;
    background-image: ${(props) => props.bc};
    background-size: 90% 80%;
    background-repeat: no-repeat;
    margin-top:5%;
    height: 50vh;
    img{
        height: 40vh;
        margin-top: 8%;
    }

    @media screen and (max-width:1024px){
        background-size: 100% 100%;
        width: 35%;

        img{
            margin-left: -20%;
        }
        
    }

    @media screen and (max-width:960px){
        width: 290px;
        height: 298px;
        margin-bottom: 8%;

        img{
            height: 70vh;
            margin-right: 8%;
        }
    }

    @media screen and (max-width:480px){
        img{
            height: 50vh;
            margin-left: -10%;
        }
    }

`

export const Scroll = styled.h6`
    transform: rotate(90deg);
    width: 5%;
    position:absolute;
    font-size:1rem;
    z-index:1;
    top: 90%;
    left: 93%;

    @media screen and (max-width:960px){
        width: 10%;
        top: 135%;
        left: 90%;
    }

    @media screen and (max-width:600px){
        width: 15%;
        top: 143%;
        left:83%;
       
    }
`

export const Form = styled.form`
    font-family: 'Vollkorn', serif;
    width: 60%;
    padding-top: 3%;

    h5 {
        padding-top: 5%;
        font-size: 0.9rem;
        span{
            margin-left: 1%;
            img{
                width: 2%;
                margin-bottom: 1%;
            }
        }
    }


    div{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #000;
        padding: 3% 0% 1% 0%;

        label{
            font-size: 0.9rem;
            font-weight: 500;
        }
    };

    input{
        width: 85%;
        border: none;
        padding: 0.5rem 2rem;
        background-color: transparent;
    };

    @media screen and (min-width:1500px){
        width: 50%;
    }

    @media screen and (max-width:1024px){
        h5{
            font-size: 0.9rem;
            img{
                width: 3%;
                margin-bottom: 1%;
            }
        }
    }

    @media screen and (max-width:960px){
        width: 100%;

        h5{
            font-size:0.8rem;

            img{
                width: 2%;
            }
        }
    }

    @media screen and (max-width:600px){
        h5{
            img{
                width:3%;
            }
        }
    }

`