import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"

const AllBurguers = () => {
    const [burguer, setBurguer] = useState([])

    useEffect(() => {
        const products = productsJson.data[0].burguers
        console.log(products)

        setBurguer(products)
    }, [])
    return (
        <div key={burguer}>
            {burguer.length > 0 ? (
                burguer.map((burgue) => {
                    return (
                        <>
                            <div>
                                <img src={burgue.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={burgue.id}>{burgue.name}</h3>
                                    <p key={burgue.id}>{burgue.ingredients}</p>
                                    <h2>{burgue.price}</h2>
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

export { AllBurguers }