import styled from "styled-components";

export const PriceAndOrder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        padding: 10px 0;

        @media(max-width: 500px){
           font-size: 14px;
           padding: 4px 0;
        }
    }
`

export const Order = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    background-color: #FF961B;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    font-weight: 400;

    i{
        background-color: #FF961B;
    }

    @media(max-width: 500px){
        width: 40px;
        height: 30px;
    }
`

export const Food = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;

    @media(max-width: 500px){
        justify-content: center;
    }

    img{
        width: 100px; 
        height: 100px;
        object-fit: cover;
        border-radius: 4px;

        @media(max-width: 500px){
            width: 90px; 
            height: 90px;
        }
    }

    div{
        margin-left: 10px;
    }

    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        @media(max-width: 500px){
            font-size: 14px;
        }
    }

    p{
        font-size: 12px;
        color: #9D9D9D;
        padding: 6px 0;

        @media(max-width: 500px){
            padding: 2px 0;
            font-size: 10px;
            width: 245px;
        }
    }
`

