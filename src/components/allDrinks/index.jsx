import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food } from "../productsStyle/style"

const AllDrinks = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].drinks
        console.log(products)

        setDrinks(products)
    }, [])
    return (
        <div key={drinks}>
            {drinks.length > 0 ? (
                drinks.map((drink) => {
                    return (
                        <>
                            <Food>
                                <img src={drink.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={drink}>{drink.name}</h3>
                                    <p key={drink}>{drink.ingredients}</p>
                                    <h2 key={drink}>R$ {drink.price}</h2>
                                </div>
                            </Food>
                            <a href=""><i class="fa-brands fa-whatsapp"></i>Pedir</a>
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