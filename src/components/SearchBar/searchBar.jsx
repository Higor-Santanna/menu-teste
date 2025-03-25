// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import productsJson from "../../json/products.json"
import { AppContext } from "../../context/App.context";

const SearchBar = () => {
    const { setBurguer } = useContext(AppContext);
    const [ searchValue, setSearchValue ] = useState('');

    const handleSearch = ( event ) => {
        event.preventDefault();
        
        const categories = productsJson.data[0]
        const allProducts = Object.values(categories).flat();

        const results = allProducts.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))

        setBurguer(results)
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <input 
                    type="search"
                    value={searchValue} 
                    placeholder="Buscar lanches" 
                    onChange={ ({ target }) => setSearchValue(target.value) } 
                    required/>

                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </>
    );
};

export { SearchBar }