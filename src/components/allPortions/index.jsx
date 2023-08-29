import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder, Order } from "../productsStyle/style"

const AllPortions = () => {
    const [portions, setPortions] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].portions
        console.log(products)

        setPortions(products)
    }, [])
    return (
        <div>
            {portions.length > 0 ? (
                portions.map((portion) => {
                    return (
                        <>
                            <Food>
                                <img src={portion.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={portion}>{portion.name}</h3>
                                    <p key={portion}>{portion.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R$ {portion.price}</h2>
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

export { AllPortions }