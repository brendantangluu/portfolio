import { useState, useEffect, useContext } from 'react'
import Loading from '../components/Loading';
import {motion as m} from "framer-motion";
import { Link } from 'react-router-dom'


function Hero({restBase}){
    const restPath = restBase + 'pages/18?break=cache'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            }else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    console.log(restData)
    
    return(
        <>
        { isLoaded ?
            <m.section 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{delay: 0.5, duration: 0.75, ease: "linear"}}
            id = "desktop-hero-mobile-top-section"
            className='h-dvh bg-[#18181b]'>
                <header>
                    <section id = "intro-hero" className='grid grid-rows-12 justify-center items-center text-white'>
                        {restData.acf &&(
                            <>
                                <m.h1 animate = {{opacity: 1}} initial={{opacity:0}} transition={{delay:0.6, duration: 0.5}} className='text-5xl row-start-4'>{restData.acf.name}</m.h1>
                                <m.h2 animate = {{opacity: 1}} initial={{opacity:0}} transition={{delay:0.8, duration: 0.5}} className='uppercase pt-4 row-start-5'>{restData.acf.job_title}</m.h2>
                                <m.p animate = {{opacity: 1}} initial={{opacity:0}} transition={{delay:1, duration: 0.5}} className='pt-4 pb-10 italic row-start-6'>{restData.acf.tagline}</m.p>
                                <m.button animate = {{opacity: 1}} initial={{opacity:0}} transition={{delay:1.2, duration: 0.5}} className='row-start-8 text-3xl uppercase bg-white text-black w-28 p-2 rounded-lg font-bold animate-pulse'>
                                    <Link to ={"/home"}>
                                        Start
                                    </Link>
                                </m.button>
                            </>
                        )}
                        
                    </section>
                </header>
            </m.section>
            : 
            <Loading /> 
        }
        </>
    )
}

export default Hero