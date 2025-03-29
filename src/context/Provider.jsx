// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import propTypes from "prop-types"
import { AppContext } from "./App.context";

const Provider = ({ children }) => {
    const [burguer, setBurguer] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const addToCart = (product) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item )
            }

            return [...prevCart, { ...product, quantity: 1 }];
        })
    }

    const value = {
        burguer, 
        setBurguer,
        cartItems,
        setCartItems,
        addToCart,
        isCartVisible,
        setIsCartVisible
    }

    return(
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    )
}

export { Provider }

Provider.propTypes = {
    children: propTypes.any,
}.isRequired