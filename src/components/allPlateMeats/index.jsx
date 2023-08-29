import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder, Order } from "../productsStyle/style"

const AllPlateMeats = () => {
    const [plateMeats, setPlateMeats] = useState([])

    useEffect(() => {
        const products = productsJson.data[0]["plate-meats"]
        console.log(products)

        setPlateMeats(products)
    }, [])
    return (
        <div>
            {plateMeats.length > 0 ? (
                plateMeats.map((meat) => {
                    return (
                        <>
                            <Food>
                                <img src={meat.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={meat.id}>{meat.name}</h3>
                                    <p key={meat.id}>{meat.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R$ {meat.price}</h2>
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

export { AllPlateMeats }