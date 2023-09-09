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

            <Whatsapp href="https://wa.me/5527999092983?text=Ol%C3%A1%2C+quero+fazer+um+pedido..." target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
            </Whatsapp>

            <Line />

            <Caption>Endereço</Caption>
            <Location href="https://goo.gl/maps/UD7GcrenQ5m4jfRX7" target="_blank">
                <i className="fa-solid fa-location-dot"></i>
                <p>BR-101, 13729 - Pedro Canário, ES, 29970-000, Brasil</p>
            </Location>

            <Caption>Modos de entrega</Caption>
            <ListServices>
                <RemoveStore>
                    <div>
                        <i className="fa-solid fa-shop"></i>
                        <p>Retirar na Loja</p>
                    </div>
                    <i className="fa-solid fa-check"></i>
                </RemoveStore>
                <Delivery>
                    <MotoDelivery>
                        <div>
                            <i className="fa-solid fa-motorcycle"></i>
                            <p>Delivery</p>
                        </div>
                        <i className="fa-solid fa-check"></i>
                    </MotoDelivery>
    
                    <DeliveryTime>
                        <i className="fa-regular fa-clock"></i>
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