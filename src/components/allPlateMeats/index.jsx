import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder, Order } from "../productsStyle/style"

const AllPlateMeats = () => {
    const [plateMeats, setPlateMeats] = useState([])

    useEffect(() => {
        const products = productsJson.data[0]["plate-meats"]

        setPlateMeats(products)
    }, [])
    return (
        <div>
            {plateMeats.length > 0 ? (
                plateMeats.map((meat, index) => {
                    return (
                        <div key={index}>
                            <Food>
                                <img src={meat.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3>{meat.name}</h3>
                                    <p>{meat.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R$ {meat.price}</h2>
                                        <Order href={meat.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></Order>
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

export { AllPlateMeats }