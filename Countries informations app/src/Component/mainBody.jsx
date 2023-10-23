import ButtomContainer from "./buttomContainer";
import MiddleContainer from "./middleContainer";
import Topbar from "./topbar";
import Style from '../cssFile/mainbody.module.css';

export default function main({countries ,getSearchValue}){

    return(
        <div className={Style.mainContainer}>
            <Topbar getSearchValue={getSearchValue} />
            <MiddleContainer />
            <ButtomContainer countries={countries} />
    </div>
    )
}