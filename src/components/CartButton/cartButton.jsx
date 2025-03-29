import { useContext } from "react";
import { AppContext } from "../../context/App.context";
import { ButtonCart, CartStatus } from "./styleCartButton";

const CartButton = () => {
    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

    return (
        <ButtonCart type="button" onClick={() => setIsCartVisible(!isCartVisible)}>
            <i className="fa-solid fa-cart-shopping"></i>
            <CartStatus>{cartItems.length}</CartStatus>
        </ButtonCart>
    );
};

export { CartButton }