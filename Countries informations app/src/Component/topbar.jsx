import Style from '../cssFile/topbar.module.css'
import Search from './search'

export default function Topbar({getSearchValue}){
    return(
        <div className={Style.topContainer}>
        <h1>name is here </h1>
        <Search getSearchValue={getSearchValue}/>
        <div className={Style.topContainerRight}>
            <a href="#">there is click </a><span>/</span>
            <a href="#"> there is click</a>
        </div>
    </div>

    )
}