import React, { useState } from "react"
import Modal from "react-modal"
import capa from "../../assets/burguerDesktop.png"
import logo from "../../assets/logo.png"
import { Modall } from "../modal"
import { MenuCapa, MenuNameLogo, MenuDeliveryTime, ButtonOpenClosed, DivModal } from "./style"
import "../../App.css"

const Menu = () => {
    const [ openModal, setOpenModal ] = useState(false)

    function modalClose(){
        setOpenModal(false)
    }

    function modalOpen(){
        setOpenModal(true)
    }

    return (
        <>
            <MenuCapa>
                <img src={capa} alt="capa"></img>
                <ButtonOpenClosed>
                    <a>
                        <i class="fa-regular fa-circle-dot"></i>
                        <p>Aberto</p>
                        <i class="fa-regular fa-clock"></i>
                    </a> 
                </ButtonOpenClosed>
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