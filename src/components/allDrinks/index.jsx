import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder, Order } from "../productsStyle/style"

const AllDrinks = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].drinks
        console.log(products)

        setDrinks(products)
    }, [])
    return (
        <div>
            {drinks.length > 0 ? (
                drinks.map((drink) => {
                    return (
                        <>
                            <Food>
                                <img src={drink.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={drink}>{drink.name}</h3>
                                    <p key={drink}>{drink.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R$ {drink.price}</h2>
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

export { AllDrinks }