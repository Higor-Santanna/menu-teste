import React from "react";
import logo from "../../assets/logo.png"
import { OpenAndClose, NameAndSoon, Whatsapp, Location, ListServices, Caption, DeliveryTime, OpeningHours } from "./style";

const Modall = () => {
    return (
        <>
            <OpenAndClose>
                <i class="fa-regular fa-circle-dot"></i>
                <p>Fechado</p>
                <i class="fa-regular fa-clock"></i>
            </OpenAndClose>

            <NameAndSoon>
                <h2>Burguer e Cia</h2>
                <img src={logo}></img>
            </NameAndSoon>

            <Whatsapp href="">
                <i class="fa-brands fa-whatsapp"></i>
            </Whatsapp>

            <Caption>Endereço</Caption>
            <Location href="">
                <i class="fa-solid fa-location-dot"></i>
                <p>BR-101, 13729 - Pedro Canário, ES, 29970-000, Brasil</p>
            </Location>

            <Caption>Modos de entrega</Caption>
            <ListServices>
                <li>
                    <i class="fa-solid fa-shop"></i>
                    <p>Retirar na Loja</p>
                </li>
                <li>
                    <i class="fa-solid fa-motorcycle"></i>
                    <p>Delivery</p>
                </li>
                <DeliveryTime>
                    <i class="fa-regular fa-clock"></i>
                    <p>Tempo de entrega em casa <strong>
                        40 - 70min.</strong></p>
                </DeliveryTime>
            </ListServices>

            <Caption>Horário de funcionamento</Caption>
            <OpeningHours>
                <li>
                    <p>Domingo</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:30</p>
                    </div>
                </li>
                <li>
                    <p>Segunda-feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>Fechado</p>
                    </div>
                </li>
                <li>
                    <p>Terça-feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>06:00 - 23:00</p>
                    </div>
                </li>
                <li>
                    <p>Quarta-Feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
                </li>
                <li>
                    <p>Quinta-Feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
                </li>
                <li>
                    <p>Sexta-Feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
                </li>
                <li>
                    <p>Sábado</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
                </li>
            </OpeningHours>
        </>
    )

}

export { Modall }