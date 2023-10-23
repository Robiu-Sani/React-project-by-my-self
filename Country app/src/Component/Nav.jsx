import {  useState } from 'react';
import Style from '../cssFile/Nav.module.css';
import Logo from '../image/logo.png';
import profile from '../image/profile.jpg';

export default function Nav({getSearchValow}){

    const [search, setSearch] = useState()

    const onHandleChange = (e) => {
        e.preventDefault();
        const scarchText = e.target.value;
        setSearch( scarchText );
        getSearchValow( scarchText );
    }
    

    return(
        <nav className={Style.nav}>
            <div className={Style.navleft}>
                <img src={Logo} alt="" />
                <h1>logo</h1>
            </div>
            <div className={Style.navCenter}>
                <input value={search} onChange={onHandleChange} type="search" placeholder="Search here" className={Style.search} />
            </div>
            <div className={Style.navRight}>
                <img src={profile} alt="" />
                <h1>#</h1>
            </div>
        </nav>
    )
}