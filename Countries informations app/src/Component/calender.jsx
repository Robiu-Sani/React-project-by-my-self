import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun } from '@fortawesome/free-solid-svg-icons'
import Style from '../cssFile/calender.module.css';


export default function Calender(){
    return(
        <div className={Style.timeAndWeather}>
                <div>
                <FontAwesomeIcon className={Style.weather} icon={faCloud}/>
                <FontAwesomeIcon className={Style.sun} icon={faSun}/>
                </div>
                <div className={Style.weatherdata}>
                    <span>Cloudy : 29 </span>
                    <span>Humidty : 45</span>
                    <span>Wind Speed : 78</span>
                </div>
                <div className={Style.weatherName}>
                    <h3>Weather from </h3>
                    <p>This is the weather bord , it changable.</p>
                </div>
            </div>
    )
}