// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import propTypes from "prop-types"
import { AppContext } from "./App.context";

const Provider = ({ children }) => {
    const [burguer, setBurguer] = useState([]);
    const [cartItems, setCartItems] = useState([])

    const value = {
        burguer, 
        setBurguer,
        cartItems,
        setCartItems
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