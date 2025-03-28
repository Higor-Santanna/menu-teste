// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import productsJson from "../../json/products.json"
import { AppContext } from "../../context/App.context";

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
            <form onSubmit={handleSearch}>
                <input 
                    type="search"
                    value={searchValue} 
                    placeholder="Buscar lanches" 
                    onChange={ handleChange } 
                    required/>

                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </>
    );
};

export { SearchBar }