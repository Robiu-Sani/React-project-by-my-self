import { useState } from 'react';
import Style from '../cssFile/topbar.module.css';

export default function Search({getSearchValue}){
    const [searchValue , setSearchValue] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
        getSearchValue(searchValue)
    }

    return(
        <div className={Style.search}>
            <input type="text" onChange={handleChange} value={searchValue} placeholder="search here" />
        </div>
    )
}