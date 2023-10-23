import Logo from "../image/logo.png" ;
import Style from '../cssFile/left.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse ,faClock, faMagnifyingGlass, faRightFromBracket, faEarthAmericas, faFlag, faCloud, faCircleInfo,faAddressBook} from '@fortawesome/free-solid-svg-icons'


export default function LeftMenu(){
    return(
        <div className={Style.leftBar}>
        <div className={Style.NameAndLogo}>
            <div className={Style.logo}>
                <img src={Logo} alt="logo is here" />
            </div>
            <h1 className={Style.name}>this is name</h1>
            <div className={Style.searchIcon}>
            <FontAwesomeIcon className={Style.icon} icon={faMagnifyingGlass} />
            </div>
        </div>
        <div className={Style.naveItem}>
            <p>home button is</p>
            <div className={Style.homeButton}>
                <h3><FontAwesomeIcon className={Style.icon} icon={faHouse} /><span>Home</span></h3>
            </div>
            <p>other item is</p>
            <ul>
                <li><FontAwesomeIcon className={Style.icon} icon={faClock} /><span>Time zoon</span></li>
                <li><FontAwesomeIcon className={Style.icon} icon={faEarthAmericas} /><span>Map</span></li>
                <li><FontAwesomeIcon className={Style.icon} icon={faFlag} /><span>Flag</span></li>
                <li><FontAwesomeIcon className={Style.icon} icon={faCloud} /><span>Weather</span></li>
                <li><FontAwesomeIcon className={Style.icon} icon={faCircleInfo} /><span>Information </span></li>
                <li><FontAwesomeIcon className={Style.icon} icon={faAddressBook} /><span>Contract </span></li>
            </ul>
        </div>
        <div className={Style.navBottom}>
            <div className={Style.buttonForOut}>
                <p>click for out</p>
                <FontAwesomeIcon className={Style.icon} icon={faRightFromBracket} />
            </div>
        </div>
    </div>

    )
}