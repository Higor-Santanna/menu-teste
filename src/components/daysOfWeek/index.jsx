import { useState, useEffect } from "react"
import "./style.css"

const DaysOfWeek = () => {
    const [sundays, setSundays] = useState(false)
    const [mondays, setMondays] = useState(false)
    const [tuesdays, setTuesdays] = useState(false)
    const [wednesdays, setWednesdays] = useState(false)
    const [thursdays, setThursdays] = useState(false)
    const [fridays, setFridays] = useState(false)
    const [satudays, setSaturdays] = useState(false)

    const date = new Date();
    let day = date.getDay();
    
    const week = () => {
       switch (day) {
        case 0:
            setSundays(true);
            break;
        case 1:
            setMondays(true);
            break;
        case 2:
            setTuesdays(true);
            break;
        case 3:
            setWednesdays(true);
            break;
        case 4:
            setThursdays(true);
            break;
        case 5:
            setFridays(true);
            break;
        case 6:
            setSaturdays(true);
            break;
        default:
            break; 
       }
    }

    useEffect(() => {
        week()
    }, [day])

    return (
        <>
           <li className={sundays ? "highlighted" : ""}>
                    <p>Domingo</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:30</p>
                    </div>
                </li>
                <li className={mondays ? "highlighted" : ""}>
                    <p>Segunda-feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>Fechado</p>
                    </div>
                </li>
                <li className={tuesdays ? "highlighted" : ""}>
                    <p>Terça-feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
                </li>
                <li className={wednesdays ? "highlighted" : ""}>
                    <p>Quarta-Feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
                </li>
                <li className={thursdays ? "highlighted" : ""}>
                    <p>Quinta-Feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
                </li>
                <li className={fridays ? "highlighted" : ""}>
                    <p>Sexta-Feira</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
                </li>
                <li className={satudays ? "highlighted" : ""}>
                    <p>Sábado</p>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <p>18:00 - 23:00</p>
                    </div>
            </li>  
        </>
    )
}

export { DaysOfWeek }