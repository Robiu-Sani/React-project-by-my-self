import { useState } from 'react';
import { useEffect } from 'react';
import Style from '../cssFile/main.module.css'
import LeftMenu from "./LeftMenu";
import MainBody from "./mainBody";

const url = 'https://restcountries.com/v3.1/all'

export default function Main(){

    const [countries , setCountries] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);
    const [filterCountry , setFilterCountry] = useState(countries)

    const fatchData = async (url) => {
        setIsLoading(true);

        try{
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setFilterCountry(data);
            setIsLoading(false);
            setError(null);
        }catch(error){
            setIsLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fatchData(url); 
    },[ ]);

    const getSearchValue = (value) => {
        let searchName = value.toLowerCase();
        const newCountry = countries.filter((e) => {
            const countryName = e.name.common.toLowerCase();
            return countryName.startsWith(searchName);
        });
        setFilterCountry(newCountry)
    }

    return(
        <div className={Style.mainbody}>
            {isLoading && <h1 style={{width:'100%', height:'100vh', display:'flex',justifyContent:'center',alignItems:'center',color:'#fff',fontSize:'70px'}}>Loading...</h1>}
            {error && <h2>{error.message}</h2>}
            <LeftMenu />
            {countries && <MainBody countries={filterCountry} getSearchValue={getSearchValue} />}
        </div>
    )
}