
import { useEffect } from 'react';
import { useState } from 'react';
import Style from '../cssFile/timeAndDate.module.css';

export default function TimeAndDate(){

    const [time ,setTime] = useState(0)
    const [date ,setDate] = useState(0)

    useEffect(() => {
        const clear = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date().toLocaleDateString());
        }, 1000);

        return(() => clearInterval(clear));
    },[])

    return(
        <div className={Style.dateAndCalender}>
                <div className={Style.time}>
                    <h1>{time}</h1>
                </div>
                <div className={Style.timeButtom}>
                    <h3>{date}</h3>
                </div>
                <p>This time is showing by your device time. </p>
            </div>
    )
}