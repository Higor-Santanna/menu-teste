import { useContext } from "react";
import { AppContext } from "../../context/App.context";
import { ItemCart, ItemImg, ItemPrice, ItemButton, ItemDiv, ItemTitle, EmptyCart } from "./styleCartItem";

const CartItem = () => {
    const { cartItems } = useContext(AppContext)

    return (
        <>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <ItemCart key={index}>
                            <ItemImg src={item.image} alt="Imagem do lanche" />
                            <ItemDiv>
                                <ItemTitle>{item.name}</ItemTitle>
                                <ItemPrice>R$ {item.price}</ItemPrice>

                                <ItemButton type="button">
                                    <i className="fa-solid fa-trash"></i>
                                </ItemButton>
                            </ItemDiv>
                        </ItemCart>
                    ))}
                </ul>
            ) : (
                <EmptyCart> Carrinho está vazio </EmptyCart>
            )}
        </>
    )
};

export { CartItem }