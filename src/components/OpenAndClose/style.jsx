import styled from "styled-components";

export const OpenClose = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 133px;
    height: 30px;
    background-color: #DCD4CC;
    border-radius: 3px;
    font-weight: 600;
    font-size: 14px;
    gap: 5px;
    border: 1px solid black;
    margin-right: 5px;
    transform: translateY(-380px);

    @media(max-width: 1480px){
        transform: translateY(-280px); 
    }

    @media(max-width: 1100px){
        transform: translateY(-180px); 
    }

    @media(max-width: 690px){
        transform: translateY(-140px); 
    }

    @media(max-width: 550px){
        transform: translateY(-100px); 
    }

    @media(max-width: 425px){
        width: 115px;
        height: 25px;
        font-size: 13px; 
    }

    @media(max-width: 393px){
        transform: translateY(-95px); 
    }

    @media(max-width: 375px){
        width: 110px;
        height: 23px;
        transform: translateY(-90px); 
    }

    @media(max-width: 375px){
        transform: translateY(-80px); 
    }

    i, p{
        background-color: #DCD4CC;
    }
`

export const OpenTime = styled.div`
    color: #3CAF47;
` 

export const CloseTime = styled.div`
    color: #ff1212;
` 