import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import capa from "../../assets/burguerDesktop.png"
import logo from "../../assets/logo.png"
import { Modall } from "../modal"
import { MenuCapa, MenuNameLogo, MenuDeliveryTime, DivModal, Line } from "./style"
import "../../App.css"
import { OpenAndClose } from "../OpenAndClose"

const Menu = () => {
    const [ openModal, setOpenModal ] = useState(false)

    const modalClose = () => {
        setOpenModal(false)
    }

    const modalOpen = () => {
        setOpenModal(true)
    }

    useEffect(() => {
        modalOpen();
        modalClose();
    }, [])

    return (
        <>
            <MenuCapa>
                <img src={capa} alt="capa"></img>
                <div>
                    <OpenAndClose />
                </div>
            </MenuCapa>
            <MenuNameLogo>
                <img src={logo} alt="Logo" />
                <div>
                    <h2>Burguer e Cia</h2>
                    <div>
                        <a onClick={modalOpen}>
                            <i class="fa-solid fa-circle-info"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                    <Modal isOpen={openModal}
                    onRequestClose={modalClose}
                    >
                        <DivModal>
                            <h3>Informação</h3>
                            <button onClick={modalClose}>
                                <i class="fa-solid fa-x"></i>  
                            </button>
                        </DivModal>
                        <Line />
                        <Modall></Modall>                    
                    </Modal>
                </div>
            </MenuNameLogo>
            <MenuDeliveryTime>
                <i class="fa-solid fa-motorcycle"></i>
                <p>40 - 70min.</p>
            </MenuDeliveryTime>
        </>
    )
}

export { Menu }