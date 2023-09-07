import React from "react";
import logo from "../../assets/logo.png"
import { OpenAndClose, NameAndSoon, Whatsapp, Location, ListServices, Caption, DeliveryTime, OpeningHours, Line, Delivery, RemoveStore, MotoDelivery, Strong } from "./style";
import { DaysOfWeek } from "../daysOfWeek";
import { CloseAndOpen } from "./closeAndOpen";

const Modall = () => {
    return (
        <>
            <OpenAndClose>
                <CloseAndOpen></CloseAndOpen>
            </OpenAndClose>

            <NameAndSoon>
                <h2>Burguer e Cia</h2>
                <img src={logo}></img>
            </NameAndSoon>

            <Whatsapp href="">
                <i class="fa-brands fa-whatsapp"></i>
            </Whatsapp>

            <Line />

            <Caption>Endereço</Caption>
            <Location href="">
                <i class="fa-solid fa-location-dot"></i>
                <p>BR-101, 13729 - Pedro Canário, ES, 29970-000, Brasil</p>
            </Location>

            <Caption>Modos de entrega</Caption>
            <ListServices>
                <RemoveStore>
                    <div>
                        <i class="fa-solid fa-shop"></i>
                        <p>Retirar na Loja</p>
                    </div>
                    <i class="fa-solid fa-check"></i>
                </RemoveStore>
                <Delivery>
                    <MotoDelivery>
                        <div>
                            <i class="fa-solid fa-motorcycle"></i>
                            <p>Delivery</p>
                        </div>
                        <i class="fa-solid fa-check"></i>
                    </MotoDelivery>
    
                    <DeliveryTime>
                        <i class="fa-regular fa-clock"></i>
                        <p>Tempo de entrega <Strong>
                            40 - 70min.</Strong></p>
                    </DeliveryTime>
                </Delivery>
            </ListServices>

            <Caption>Horário de funcionamento</Caption>
            <OpeningHours>
                <DaysOfWeek></DaysOfWeek>
            </OpeningHours>
        </>
    )

}

export { Modall }