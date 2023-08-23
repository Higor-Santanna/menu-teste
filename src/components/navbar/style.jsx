import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    
    li{
        font-weight: 600;
        font-size: 16px;
    }

    li:first-child{
        margin-left: 22px;
    }
`

export const MenuAndSearch = styled.li`
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FoodAndDrink = styled.li`
    width: 145px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`