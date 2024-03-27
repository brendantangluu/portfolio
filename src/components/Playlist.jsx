import {useEffect, useState} from 'react';


function Playlist ({isDarkMode}){

    const iframe = {
        borderRadius: '12px'
    }
    return(
        <iframe
            style={iframe}
            src={`https://open.spotify.com/embed/playlist/37i9dQZF1EP6YuccBxUcC1?utm_source=generator&theme=${isDarkMode ? "1" : "0"}`}
            width="100%"
            height="152"
            frameBorder="0"
            title="Brendan's Spotify daylist."
            loading="eager"
        ></iframe>
    )
}

export default Playlist;