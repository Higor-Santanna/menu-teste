import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder, Order } from "../productsStyle/style"

const AllPortions = () => {
    const [portions, setPortions] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].portions
        
        setPortions(products)
    }, [])
    return (
        <div>
            {portions.length > 0 ? (
                portions.map((portion, index) => {
                    return (
                        <div key={index}>
                            <Food>
                                <img src={portion.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 >{portion.name}</h3>
                                    <p >{portion.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R$ {portion.price}</h2>
                                        <Order href={portion.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></Order>
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

export { AllPortions }