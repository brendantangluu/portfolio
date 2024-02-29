import {useState, useEffect, useContext} from 'react'
import Loading from './Loading'
import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";

function Timeline ({restBase, isDarkMode, lightMode, darkMode}){
    const restPath = restBase + 'timeline?_embed'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const carouselDark = 'black'
    const carouselLight = 'white'


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            }else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

    return(
        <>
        
        </>
    )
}

export default Timeline;