import styled from "styled-components";

export const TimeLine = styled.div`
    padding: 0% 10%;
    margin-top: 0%;
    h3{
        font-family: 'Vollkorn', serif;
        font-size: 4rem;
        font-weight: 500;
    }

    @media screen and (max-width: 1200px){
        padding: 0% 7%;
    }

    @media screen and (max-width: 769px){
        h3{
            font-size: 2.5rem;
        }
    }
`