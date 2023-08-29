import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder, Order } from "../productsStyle/style"

const AllBurguers = () => {
    const [burguer, setBurguer] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].burguers
        console.log(products)

        setBurguer(products)
    }, [])
    return (
        <div>
            {burguer.length > 0 ? (
                burguer.map((burgue) => {
                    return (
                        <>
                            <Food>
                                <img src={burgue.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={burgue.id}>{burgue.name}</h3>
                                    <p key={burgue.id}>{burgue.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R$ {burgue.price}</h2>
                                        <Order href=""><i class="fa-brands fa-whatsapp"></i></Order>
                                    </PriceAndOrder>
                                </div>
                            </Food>
                        </>
                    )
                })
            ) : (
                <p>Cardápio não encontrado</p>
            )}
        </div>
    )
}

export { AllBurguers }