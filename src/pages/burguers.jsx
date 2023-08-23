import { AllBurguers } from "../components/allBurguers"
import React from "react"
import { Menu } from "../components/menu"
import { Navbar } from "../components/navbar"

const Burguers = () => {
    return(
        <>
            <Menu />
            <Navbar />
            <AllBurguers />
        </>
    )
}

export { Burguers }