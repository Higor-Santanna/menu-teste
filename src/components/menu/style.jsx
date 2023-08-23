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

export const ButtonOpenClosed = styled.div`
    a{
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
    }

    i, p{
        background-color: #DCD4CC;
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