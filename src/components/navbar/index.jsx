import React from "react";
import { List, MenuAndSearch, FoodAndDrink } from "./style";

const Navbar = () => {
    return(
        <List>
            <MenuAndSearch>
                <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            </MenuAndSearch>
            <MenuAndSearch>
                <a href=""><i class="fa-solid fa-bars"></i></a>
            </MenuAndSearch>
            <FoodAndDrink>
                <a href="/">Petiscos</a>
            </FoodAndDrink>
            <FoodAndDrink>
                <a href="/drinks">Bebidas</a>
            </FoodAndDrink>
            <FoodAndDrink>
                <a href="/burguers">Lanches</a>
            </FoodAndDrink>
            <FoodAndDrink>
                <a href="/portions">Porções</a>
            </FoodAndDrink>
            <FoodAndDrink>
                <a href="/plate-meats">Carnes na Chapa</a>
            </FoodAndDrink>
        </List>
    )
}

export { Navbar }