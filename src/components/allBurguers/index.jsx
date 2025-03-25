// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext } from "react"
import productsJson from "../../json/products.json"
import { Food, Price, Title} from "../productsStyle/style"
import { AppContext } from "../../context/App.context"

const AllBurguers = () => {
    const { burguer, setBurguer } = useContext(AppContext)

    useEffect(() => {
        const products = productsJson.data[0].burguersTraditional

        setBurguer(products)
    }, [setBurguer])
    return (
        <div>
            <Title>Lanches Tradicionais</Title>
            {burguer.length > 0 ? (
                burguer.map((burgue) => {
                    return (
                        <div key={burgue.id}>
                            <Food>
                                <img src={burgue.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3>{burgue.name}</h3>
                                    <p >{burgue.ingredients}</p>
                                    <Price>R$ {burgue.price}</Price>
                                    {/* <Order href={burgue.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></Order> */}
                                    <button type="button">Adicionar ao pedido</button>
                                </div>
                            </Food>
                        </div>
                    )
                })
            ) : (
                <p>Cardápio não encontrado</p>
            )}
        </div>
    )
}

export { AllBurguers }