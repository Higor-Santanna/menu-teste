import styled from "styled-components";

export const MenuCapa = styled.div` 
    img{
        width: 100%;
        object-fit: cover;
    }

    div{
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        margin-right: 5px;
    }   
`

export const MenuNameLogo = styled.div`
    display: flex;
    gap: 15px;

    img{
        width: 64px;
        height: 64px;
        margin-left: 22px;
        border-radius: 4px;
    }

    h2{
        font-size: 20px;
        font-weight: 800;

        @media(max-width: 375px){
            font-size: 18px;
        }
    }

    a{
        font-size: 20px;
        margin: 1px 6px;
    }
`

export const MenuDeliveryTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    padding: 8px 12px;
    margin: 15px 22px;
`

export const DivModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
    }

    button{
        border: none;
        font-size: 14px;
        cursor: pointer;
        color: #000;
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: #9e9e9e;
`