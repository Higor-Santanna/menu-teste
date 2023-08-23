import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"

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
                            <div>
                                <img src={drink.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={drink}>{drink.name}</h3>
                                    <p key={drink}>{drink.ingredients}</p>
                                    <h2 key={drink}>{drink.price}</h2>
                                </div>
                                <a href=""><i class="fa-brands fa-whatsapp"></i>Pedir</a>
                            </div>
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