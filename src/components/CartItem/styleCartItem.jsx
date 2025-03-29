import styled from "styled-components";

export const ItemCart = styled.li`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;
    position: relative;
`
export const ItemImg = styled.img`
    width: 70px;
`
export const ItemDiv = styled.div`
    padding: 0 10px;
`
export const ItemTitle = styled.h3`
    font-size: 0.95rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 8px;
`
export const ItemPrice = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
`
export const ItemButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    color: #eb2222;
    font-size: 1.2rem;
    border: none;
    background: none;
    cursor: pointer;
`
export const EmptyCart = styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 1.3rem;
`