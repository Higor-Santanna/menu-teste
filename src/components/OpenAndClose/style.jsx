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
    transform: translateY(-180px);

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