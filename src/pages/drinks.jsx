import React from "react"
import { AllDrinks } from "../components/allDrinks"
import { Menu } from "../components/menu"
import { Navbar } from "../components/navbar"

const Drinks = () => {
    return(
        <>
            <Menu />
            <Navbar />
            <AllDrinks />
        </>
    )
}

export { Drinks }