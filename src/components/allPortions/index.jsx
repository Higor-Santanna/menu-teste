import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"

const AllPortions = () => {
    const [portions, setPortions] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].portions
        console.log(products)

        setPortions(products)
    }, [])
    return (
        <div key={portions}>
            {portions.length > 0 ? (
                portions.map((portion) => {
                    return (
                        <>
                            <div>
                                <img src={portion.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={portion}>{portion.name}</h3>
                                    <p key={portion}>{portion.ingredients}</p>
                                    <h2 key={portion}>R$ {portion.price}</h2>
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

export { AllPortions }