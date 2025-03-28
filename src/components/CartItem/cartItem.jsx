import { useContext } from "react";
import { AppContext } from "../../context/App.context";

const CartItem = () => {
    const { cartItems } = useContext(AppContext)

    return (
        <>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt="Imagem do lanche" />
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.ingredients}</p>
                                <p>R$ {item.price}</p>
                            </div>
                            <button type="button">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p> Carrinho está vazio </p>
            )}
        </>
    )
};

export { CartItem }