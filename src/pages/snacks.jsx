import React from "react"
import { AllSnacks } from "../components/allSnacks"
import { Menu } from "../components/menu"
import { Navbar } from "../components/navbar"

const Snacks = () => {
    return(
        <>
            <Menu />
            <Navbar />
            <AllSnacks />
        </>
    )
}

export { Snacks }