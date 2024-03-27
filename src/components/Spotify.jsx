import {useEffect, useState} from 'react';
import axios from 'axios';

function Spotify(){
    const CLIENT_ID = '9b936ea8f3184cbfae1569da8f4fb4b8';
    const REDIRECT_URI = 'https://localhost:5173';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';

    const [token, setToken] = useState ('');

    useEffect(() =>{
        const hash = window.location.hash
        let token = window.localStorage.getItem("token");

        if(!token && hash){
            token = hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1]
            console.log(token);
        }

    }, [])

    return(
        <>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>login</a>
        </>
    )
}

// #access_token=BQBwWIwRi04K6C9FkIP1kq6BL3x7ETqcY3EC_Di6Fnpgzrpk5I9um10CRm6kfwAyKV1XtPw5caGXyzyrb6kdPj7mdsv-XF3m3Xbl6El11SuoilVmw6dxrVUIyFk-aUCwfL-dIRNFbYtnK6QiGGm36wQ9b3xfAwjOcibqcBj783UhfX8nfq0TRtqR-OSOWjRZlEs

// &token_type=Bearer&expires_in=3600

export default Spotify;