import Style from '../cssFile/Nav.module.css';
import Logo from '../image/logo.png';
import profile from '../image/profile.jpg';

export default function Nav(){
    return(
        <nav className={Style.nav}>
            <div className={Style.navleft}>
                <img src={Logo} alt="" />
                <h1>logo</h1>
            </div>
            <div className={Style.navCenter}>
                <input type="search" placeholder="Search here" className={Style.search} />
            </div>
            <div className={Style.navRight}>
                <img src={profile} alt="" />
                <h1>#</h1>
            </div>
        </nav>
    )
}