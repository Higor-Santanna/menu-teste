// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import productsJson from "../../json/products.json"
import { AppContext } from "../../context/App.context";
import { SearchButton, SearchForm, SearchInput } from "./styleSearchBar";

const SearchBar = () => {
    const { setBurguer } = useContext(AppContext);
    const [ searchValue, setSearchValue ] = useState('');

    const categories = productsJson.data[0]
    const allProducts = Object.values(categories).flat();

    const handleSearch = ( event ) => { event.preventDefault()};

    const handleChange = ({ target }) => {
        const value = target.value.toLowerCase();
        setSearchValue(value);

        if (value.trim() === "") {
            setBurguer(allProducts); // Se estiver vazio, mostra todos os produtos
        } else {
            const filteredProducts = allProducts.filter((product) =>
                product.name.toLowerCase().includes(value)
            );
            setBurguer(filteredProducts);
        }
    };

    return (
        <>
            <SearchForm onSubmit={handleSearch}>
                <SearchInput 
                    type="search"
                    value={searchValue} 
                    placeholder="Buscar lanches" 
                    onChange={ handleChange } 
                    required/>

                <SearchButton type="submit"><i className="fa-solid fa-magnifying-glass"></i></SearchButton>
            </SearchForm>
        </>
    );
};

export { SearchBar }