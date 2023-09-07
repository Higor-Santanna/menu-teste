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

        @media(max-width: 414px){
            font-size: 20px;
        }
    }

    img{
        width: 32px;
        height: 32px;
        border-radius: 4px;

        @media(max-width: 414px){
            width: 30px;
            height: 30px;
        }
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

    @media(max-width: 414px){
            font-size: 15px;
        }
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
        @media(max-width: 414px){
            font-size: 12px;
        }
    }
`
export const ListServices = styled.ul`
    margin: 0 0 17px 4px;
`

export const RemoveStore = styled.li`
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #9e9e9e;
    margin-bottom: 4px;
    border-radius: 4px;
    padding: 0 5px;
    

    div{
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        display: flex;
        align-items: center;
        gap: 5px;

        @media(max-width: 414px){
            font-size: 12px;
        }
    }

    i{
        color: #FF961B; 
        @media(max-width: 414px){
            font-size: 14px;
        }
    }
`

export const Delivery = styled.li`
    border-radius: 4px;
    border: 1px solid #9e9e9e;
`

export const MotoDelivery = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    height: 35px;
    border-radius: 4px;
    border-bottom: 1px solid #9e9e9e;

    div{
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        @media(max-width: 414px){
            font-size: 12px;
        }
    }

    i{
        color: #FF961B;
        @media(max-width: 414px){
            font-size: 14px;
        }
    }
`

export const DeliveryTime = styled.div`
    background-color: #c7c7c7;
    display: flex;
    align-items: center;
    height: 25px;
    gap: 5px;
    padding: 0 5px;
    border-radius: 4px;

    i{
        color: #000;
        background-color: #c7c7c7;
        @media(max-width: 414px){
            font-size: 12px;
        }
    }

    p{
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        background-color: #c7c7c7;
        display: flex;
        gap: 3px;
        @media(max-width: 414px){
            font-size: 11px;
        }
    }
`

export const Strong = styled.div`
    background-color: #c7c7c7;
    font-weight: 700;
`

export const OpeningHours = styled.ul`
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 8px;
        font-size: 14px;
        font-weight: 400;

        @media(max-width: 414px){
            font-size: 12px;
        }
    }

    div{
        display: flex;
        align-items: center;
        gap: 4px;
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: #9e9e9e;
`