// eslint-disable-next-line no-unused-vars
import React, {useContext} from "react";
import { CartItem } from "../CartItem/cartItem";
import { AppContext } from "../../context/App.context";

const Cart = () => {
    const { cartItems } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc
    }, 0);

    const checkout = () => {
        if (cartItems.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        const formattedItems = cartItems
            .map(item => `${item.name} - R$ ${item.price.toFixed(2)}`)
            .join("\n");

        const message = encodeURIComponent(
            `Olá, gostaria de fazer um pedido:\n\n${formattedItems}\n\nTotal: R$ ${totalPrice.toFixed(2)}`
        );

        const whatsappUrl = `https://wa.me/5527999092983?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return(
        <>
            <CartItem></CartItem>
            <div>
                <p>Total: {totalPrice}</p>
                <button onClick={checkout}>Finalizar Compra</button>
            </div>
        </>
    )
};

export { Cart }