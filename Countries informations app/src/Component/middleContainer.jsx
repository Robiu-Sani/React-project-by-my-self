import Calender from "./calender";
import TimeAndDate from "./timeAndDate";
import Style from '../cssFile/middleContainer.module.css';

export default function MiddleContainer(){
    return(
        <div className={Style.middleContainer}>
            <TimeAndDate />
            <Calender />
        </div>

    )
}