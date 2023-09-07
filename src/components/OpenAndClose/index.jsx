import { openingHours } from "../../hooks/openAndClose"
import { CloseTime, OpenClose, OpenTime} from "./style";

const OpenAndClose = () => {
    const { isOpen } = openingHours();

    return (
        <>
            {
                isOpen ? <OpenClose>
                            <OpenTime>
                                <i class="fa-regular fa-circle-dot"></i>
                            </OpenTime>
                            <p>Aberto</p>
                            <i class="fa-regular fa-clock"></i>
                        </OpenClose> : 
                        <OpenClose>
                            <CloseTime>
                                <i class="fa-regular fa-circle-dot"></i>
                            </CloseTime>
                            <p>Fechado</p>
                            <i class="fa-regular fa-clock"></i>  
                        </OpenClose> 
            }
        </>
    )
}

export { OpenAndClose }