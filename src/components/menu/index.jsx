import capa from "../../assets/burguerDesktop.png"
import logo from "../../assets/logo.png"
import { MenuCapa, MenuNameLogo, MenuDeliveryTime, ButtonOpenClosed } from "./style"

const Menu = () => {
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
                    <h2>Smaniotto's Beer e Cia</h2>
                    <div>
                        <a href="">
                            <i class="fa-solid fa-circle-info"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
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