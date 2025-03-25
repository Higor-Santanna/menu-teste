import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    font-size: 21px;
    padding: 2px;
    background-color: #c7c7c7;
`

export const Price = styled.h4`
    font-weight: 600;
    font-size: 16px;

    @media(max-width: 500px){
        font-size: 13.5px;
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
    padding: 10px;

    @media(max-width: 500px){
        justify-content: center;
    }

    img{
        width: 130px; 
        height: 130px;
        object-fit: cover;
        border-radius: 4px;

        @media(max-width: 500px){
            width: 125px; 
            height: 125px;
        }
    }

    div{
        margin-left: 10px;
        width: 100%;
    }

    h3{
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;

        @media(max-width: 500px){
            font-size: 15px;
        }
    }

    p{
        font-size: 12px;
        color: #4b4b4b;
        padding: 6px 0;

        @media(max-width: 500px){
            padding: 2px 0;
            font-size: 11px;
            width: 255px;
        }

        @media(max-width: 384px){
            width: 245px;
        }

        @media(max-width: 375px){
            width: 215px;
        }

        @media(max-width: 320px){
            width: 180px;
        }
    }
`