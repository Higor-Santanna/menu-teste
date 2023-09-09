import { openingHours } from "../../hooks/openAndClose";
import styled from "styled-components";

const CloseAndOpen = () => {
    const { isOpen } = openingHours();

    return (
        <>
            {
                isOpen ? <OpenClose>
                            <OpenTime>
                                <i className="fa-regular fa-circle-dot"></i>
                            </OpenTime>
                            <p>Aberto</p>
                            <i className="fa-regular fa-clock"></i>
                        </OpenClose> : 
                        <OpenClose>
                            <CloseTime>
                                <i className="fa-regular fa-circle-dot"></i>
                            </CloseTime>
                            <p>Fechado</p>
                            <i className="fa-regular fa-clock"></i>  
                        </OpenClose> 
            }
        </>
    )
}

const OpenClose = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 133px;
    height: 25px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    gap: 5px;
    border: 1px solid #9e9e9e;
`

const OpenTime = styled.div`
    color: #3CAF47;
` 

const CloseTime = styled.div`
    color: #ff1212;
` 

export { CloseAndOpen }