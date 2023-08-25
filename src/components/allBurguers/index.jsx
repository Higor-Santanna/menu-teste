import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, FoodMoreOrder, Order } from "../productsStyle/style"

const AllBurguers = () => {
    const [burguer, setBurguer] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].burguers
        console.log(products)

        setBurguer(products)
    }, [])
    return (
        <div key={burguer}>
            {burguer.length > 0 ? (
                burguer.map((burgue) => {
                    return (
                        <>
                            <FoodMoreOrder>
                                <Food>
                                    <img src={burgue.image} border='0' alt='hamburguer' />
                                    <div>
                                        <h3 key={burgue.id}>{burgue.name}</h3>
                                        <p key={burgue.id}>{burgue.ingredients}</p>
                                        <h2>R$ {burgue.price}</h2>
                                    </div>
                                </Food>
                                <Order href=""><i class="fa-brands fa-whatsapp"></i></Order>
                            </FoodMoreOrder>
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