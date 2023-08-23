import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"

const AllSnacks = () => {
    const [snack, setSnacks] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].snacks
        console.log(products)

        setSnacks(products)
    }, [])
    return (
        <div key={snack}>
            {snack.length > 0 ? (
                snack.map((snac) => {
                    return (
                        <>
                            <div>
                                <img src={snac.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={snac.id}>{snac.name}</h3>
                                    <p key={snac.id}>{snac.ingredients}</p>
                                    <h2>{snac.price}</h2>
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

export { AllSnacks }