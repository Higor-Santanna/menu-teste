import React, { useState, useEffect } from "react"
import productsJson from "../../json/products.json"

const AllPlateMeats = () => {
    const [plateMeats, setPlateMeats] = useState([])

    useEffect(() => {
        const products = productsJson.data[0]["plate-meats"]
        console.log(products)

        setPlateMeats(products)
    }, [])
    return (
        <div key={plateMeats}>
            {plateMeats.length > 0 ? (
                plateMeats.map((meat) => {
                    return (
                        <>
                            <div>
                                <img src={meat.image} border='0' alt='hamburguer' />
                                <div>
                                    <h3 key={meat.id}>{meat.name}</h3>
                                    <p key={meat.id}>{meat.ingredients}</p>
                                    <h2>{meat.price}</h2>
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

export { AllPlateMeats }