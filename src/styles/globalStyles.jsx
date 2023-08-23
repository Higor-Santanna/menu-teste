import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    background-color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    touch-action: manipulation;
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
    color: black;
}

`