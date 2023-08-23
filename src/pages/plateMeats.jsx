import React from "react"
import { AllPlateMeats } from "../components/allPlateMeats"
import { Menu } from "../components/menu"
import { Navbar } from "../components/navbar"

const PlateMeats = () => {
    return(
        <>
            <Menu />
            <Navbar />
            <AllPlateMeats />
        </>
    )
}

export { PlateMeats }