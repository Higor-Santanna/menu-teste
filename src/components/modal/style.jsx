import styled from "styled-components";

export const OpenAndClose = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    margin: 20px 0 5px 0;

    i{
        font-size: 14px;
    }

    p{
        font-size: 14px;
        font-weight: 600;
    }
`

export const NameAndSoon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h2{
        width: 100%;
        color: #000;
        font-size: 23px;
        font-weight: 700;
        line-height: 28px;
    }

    img{
        width: 32px;
        height: 32px;
        border-radius: 4px;
    }
`

export const Whatsapp = styled.a`
    i{
        width: 24px;
        height: 24px;
        font-size: 20px;
    }
`

export const Caption = styled.h3`
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    margin: 17px 0 8px 0;
`
export const Location = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 10px 4px;

    i{
        color: #FF961B;
    }

    p{
        font-size: 14px;
    }
`
export const ListServices = styled.ul`
    margin: 0 0 17px 4px;

    li{
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;
    }

    i{
        color: #FF961B 
    }
`

export const DeliveryTime = styled.li`
    i{
        color: #000;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }
`

export const OpeningHours = styled.ul`
    margin: 0 0 0 4px;

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 0;
        font-size: 14px;
        font-weight: 400;
    }

    div{
        display: flex;
        align-items: center;
        gap: 4px;
    }
`