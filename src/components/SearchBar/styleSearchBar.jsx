import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    background-color: #ffffff;
    width: 100%;
    height: 30px;
    max-width: 400px;
    justify-content: space-between;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #b87d00;
    border-radius: 5px;

    @media(max-width: 500px) {
        max-width: 300px;
    }
`

export const SearchInput = styled.input`
    display: flex;
    background-color: #ffffff;
    width: 100%;
    justify-content: space-between;
    border: none;
    margin-left: 7px;
    outline: none;
`

export const SearchButton = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-color: #b87d00;

    i{
        background-color: #b87d00;  
    }
`