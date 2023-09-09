import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder, Order } from "../productsStyle/style"

const AllDrinks = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].drinks
        
        setDrinks(products)
    }, [])
    return (
        <div>
            {drinks.length > 0 ? (
                drinks.map((drink, index) => {
                    return (
                        <div key={index}>
                            <Food>
                                <img src={drink.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 >{drink.name}</h3>
                                    <p >{drink.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R$ {drink.price}</h2>
                                        <Order href={drink.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></Order>
                                    </PriceAndOrder>
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

export { AllDrinks }