import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, Order, PriceAndOrder } from "../productsStyle/style"

const AllSnacks = () => {
    const [snack, setSnacks] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].snacks
        
        setSnacks(products)
    }, [])
    return (
        <div>
            {snack.length > 0 ? (
                snack.map((snac, index) => {
                    return (
                        <div key={index}>
                            <Food>
                                <img src={snac.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 >{snac.name}</h3>
                                    <p >{snac.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R${snac.price}</h2>
                                        <Order href={snac.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></Order>
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

export { AllSnacks }