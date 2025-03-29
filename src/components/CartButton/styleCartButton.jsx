import styled from "styled-components";

export const ButtonCart = styled.button`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
    margin-left: 40px;
    color: #b87d00;
`

export const CartStatus = styled.span`
    background-color: red;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    font-size: 11px;
    font-weight: 600;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`