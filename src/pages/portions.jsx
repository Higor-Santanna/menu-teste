import React from "react"
import { AllPortions } from "../components/allPortions"
import { Menu } from "../components/menu"
import { Navbar } from "../components/navbar"

const Portions = () => {
    return(
        <>
            <Menu />
            <Navbar />
            <AllPortions />
        </>
    )
}

export { Portions }