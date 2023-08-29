import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"
import { Food, PriceAndOrder , Order } from "../productsStyle/style"

const AllSnacks = () => {
    const [snack, setSnacks] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].snacks
        console.log(products)

        setSnacks(products)
    }, [])
    return (
        <div>
            {snack.length > 0 ? (
                snack.map((snac) => {
                    return (
                        <>
                            <Food>
                                <img src={snac.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={snac.id}>{snac.name}</h3>
                                    <p key={snac.id}>{snac.ingredients}</p>
                                    <PriceAndOrder>
                                        <h2>R${snac.price}</h2>
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

export { AllSnacks }