import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder, Order } from "../productsStyle/style"

const AllBurguers = () => {
    const [burguer, setBurguer] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].burguers

        setBurguer(products)
    }, [])
    return (
        <div>
            {burguer.length > 0 ? (
                burguer.map((burgue, index) => {
                    return (
                        <div key={index}>
                            <Food>
                                <img src={burgue.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3>{burgue.name}</h3>
                                    <p >{burgue.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R$ {burgue.price}</h2>
                                        <Order href={burgue.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></Order>
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

export { AllBurguers }