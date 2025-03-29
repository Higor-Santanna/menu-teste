import styled from "styled-components";

export const CartDiv = styled.div`
    width: 100%;
    max-width: 330px;
    background-color: white;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: ${({ isVisible }) => (isVisible ? "translateX(0)" : "translateX(110%)")};
    transition: transform 400ms ease;
    box-shadow: ${({ isVisible }) => (isVisible ? "-5px 0px 10px rgba(0, 0, 0, 0.2)" : "none")};
    z-index: 100;
    flex-grow: 1;
    overflow: auto;
`

export const Div = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    padding: 35px 0 15px;
    border-top: 1px solid #ddd;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
`;

export const CloseButton = styled.button`
    display: flex;
    justify-content: right;
    margin: 5px 0 10px;
    color: #850101;
    font-size: 1.4rem;
    border: none;
    background: none;
    cursor: pointer;
`