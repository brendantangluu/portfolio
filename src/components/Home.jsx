import { useState, useEffect, useContext } from 'react'
import Loading from './Loading'
import FeaturedProjects from './FeaturedProjects'
import ThemeContext from '../DarkModeContext.jsx/ThemeContext'
import ProjectTimeline from './Timeline'
import Stack from './Stack'
import { GrProjects} from "react-icons/gr";
import { HiHome } from "react-icons/hi";
import { FaFolder } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import { MdMusicNote } from "react-icons/md";
import Hobbies from './Hobbies'
import {motion as m} from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

function Home({restBase}){

    const restPathCPT = restBase + 'types'
    const restPath = restBase + 'pages/18?break=cache'
    const [restData, setData] = useState([])
    const [restDataCPT, setDataCPT] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const [content, setContent] = useState("")
    const [activeTab, setActiveTab] = useState('') 
    const lightMode = "text-[#18181b] bg-white"
    const darkMode = "text-white bg-[#18181b]"
    const lightModeSvg = "black"
    const darkModeSvg = "white"
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const themeClass = isDarkMode ? darkMode : lightMode
    const svgMedia = useMediaQuery('(min-width: 1140px)');
    const sun = <svg className = "hover:fill-yellow-900 transition-all" xmlns="http://www.w3.org/2000/svg" width={svgMedia ? "45" : "32"} height={svgMedia ? "45" : "32"}  fill = {darkModeSvg} viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg>
    const moon = <svg className = "hover:fill-gray-700 transition-all" xmlns="http://www.w3.org/2000/svg" width={svgMedia ? "45" : "32"} height={svgMedia ? "45" : "32"} fill = {lightModeSvg} viewBox="0 0 24 24"><path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"/></svg>
    const github = <svg className={`transition-all ${isDarkMode ? 'hover:fill-gray-400' : 'hover:fill-gray-700'}`} xmlns="http://www.w3.org/2000/svg" width={svgMedia ? "50" : "38"} height={svgMedia ? "50" : "38"} viewBox="0 0 24 24" fill={!isDarkMode ? lightModeSvg : darkModeSvg}><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
    const linkedin = <svg className={`transition-all ${isDarkMode ? 'hover:fill-gray-400' : 'hover:fill-gray-700'}`} xmlns="http://www.w3.org/2000/svg" width={svgMedia ? "50" : "38"} height={svgMedia ? "50" : "38"} viewBox="0 0 24 24" fill={!isDarkMode ? lightModeSvg : darkModeSvg}><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
    const email = <svg className={`transition-all ${isDarkMode ? 'hover:fill-gray-400' : 'hover:fill-gray-700'}`} xmlns="http://www.w3.org/2000/svg" width={svgMedia ? "50" : "38"} height={svgMedia ? "50" : "38"} viewBox="0 0 24 24" fill={!isDarkMode ? lightModeSvg : darkModeSvg}><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            const responseCPT = await fetch(restPathCPT)
            if ( response.ok && responseCPT.ok ) {
                const data = await response.json()
                const dataCPT = await responseCPT.json()
                setData(data)
                setDataCPT(dataCPT)
                setLoadStatus(true)
                setContent(data.acf.about_me_description.replace(/\n/g, '<br />'));
            }else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath, restPathCPT])

    useEffect(() => {
        if (isLoaded && restDataCPT['featured-projects'] && restDataCPT['featured-projects'].name) {
            setActiveTab(restDataCPT['featured-projects'].name);
        }
    }, [restDataCPT]);


    return(
        <>
            { isLoaded ?
                <>
                    <m.div
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 0.75, ease: "easeOut"}}
                    className = {`transition-all duration-600 relative p-6 pt-10 lg:py-0 lg:px-8 ${!isDarkMode ? lightMode : darkMode}`}>
                        <button className = {`lg:hidden transition-all duration-600 p-2 mx-4 absolute right-0 z-50 ${themeClass}bg-transparent`} onClick = {toggleTheme}>
                            {isDarkMode ? sun : moon}
                        </button>    
                        <div className='lg:grid lg:grid-cols-2 lg:gap-10'>
                            <m.section
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            transition={{delay: 0.8, duration: 0.75, ease: "easeOut"}} 
                            id="sidebar-section" 
                            className="lg:flex-1 lg:sticky lg:top-0 lg:h-screen desktop:mx-auto desktop:w-[700px]">
                                <header>
                                    <button className = {`hidden lg:block transition-all duration-600 p-2 mx-4 absolute top-10 right-0 z-50 ${themeClass}bg-transparent`} onClick = {toggleTheme}>
                                        {isDarkMode ? sun : moon}
                                    </button>
                                    <section id = "intro-hero" className='pt-14'>
                                        <h1 className='text-5xl lg:text-4xl xl:text-5xl'>{restData.acf.name}</h1>
                                        <h2 className='uppercase pt-4 lg:text-xl xl:text-2xl'>{restData.acf.job_title}</h2>
                                        <p className='pt-4 pb-10 italic xl:text-xl'>{restData.acf.tagline}</p>
                                    </section>
                                    <section id="spotify">

                                    </section>
                                    <section id = "desktop-nav" className='pb-10 hidden lg:block'>
                                        <nav className='text-xl'>
                                            <ul className='space-y-4'>
                                                <li>
                                                    <a onClick = {() => setActiveTab(`${restDataCPT['featured-projects'].name}`)} className={`group flex items-center w-fit text-gray-500`} href="#featured-projects">
                                                        <div className={`h-1 rounded-xl w-12 group-hover:w-24 transition-all mr-2 ${activeTab === restDataCPT['featured-projects'].name ? `w-24 ${isDarkMode ? 'bg-white' : 'bg-black'}` : 'bg-gray-500'} ${ isDarkMode ? 'group-hover:bg-white' : 'group-hover:bg-black'}`}></div>
                                                        <p className={`${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black'} ${activeTab === restDataCPT['featured-projects'].name ? `${isDarkMode ? 'text-white' : 'text-black'}` : ''}`}>{restDataCPT['featured-projects'].name}</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a onClick = {() => setActiveTab(restDataCPT['legacy-projects'].name)} className={`group flex items-center w-fit text-gray-500`} href="#legacy">
                                                        <div className={`h-1 rounded-xl w-12 group-hover:w-24 transition-all mr-2 ${activeTab === restDataCPT['legacy-projects'].name ? `w-24 ${isDarkMode ? 'bg-white' : 'bg-black'}` : 'bg-gray-500'} ${ isDarkMode ? 'group-hover:bg-white' : 'group-hover:bg-black'}`}></div>
                                                        <p className={`${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black'} ${activeTab === restDataCPT['legacy-projects'].name ? `${isDarkMode ? 'text-white' : 'text-black'}` : ''}`}>{restDataCPT['legacy-projects'].name}</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a onClick = {() => setActiveTab(restDataCPT['stack'].name)} className={`group flex items-center w-fit text-gray-500`} href="#stack">
                                                        <div className={`h-1 rounded-xl w-12 group-hover:w-24 transition-all mr-2 ${activeTab === restDataCPT['stack'].name ? `w-24 ${isDarkMode ? 'bg-white' : 'bg-black'}` : 'bg-gray-500'} ${ isDarkMode ? 'group-hover:bg-white' : 'group-hover:bg-black'}`}></div>
                                                        <p className={`${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black'} ${activeTab === restDataCPT['stack'].name ? `${isDarkMode ? 'text-white' : 'text-black'}` : ''}`}>{restDataCPT['stack'].name}</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a onClick = {() => setActiveTab(restDataCPT['hobbies'].name)} className={`group flex items-center w-fit text-gray-500`} href="#hobbies">
                                                        <div className={`h-1 rounded-xl w-12 group-hover:w-24 transition-all mr-2 ${activeTab === restDataCPT['hobbies'].name ? `w-24 ${isDarkMode ? 'bg-white' : 'bg-black'}` : 'bg-gray-500'} ${ isDarkMode ? 'group-hover:bg-white' : 'group-hover:bg-black'}`}></div>
                                                        <p className={`${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black'} ${activeTab === restDataCPT['hobbies'].name ? `${isDarkMode ? 'text-white' : 'text-black'}` : ''}`}>{restDataCPT['hobbies'].name}</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>

                                    </section>
                                    <section id = "socials" className='flex pt-6 pb-12 lg:pt-10'>
                                        <a className = "pr-2" href={restData.acf.socials[0].github}>
                                            {github}
                                        </a>
                                        <a className = "pr-2" href={restData.acf.socials[0].linkedin}>
                                            {linkedin}
                                        </a>
                                        <a className = "pr-2" href={restData.acf.socials[0].email}>
                                            {email}
                                        </a>
                                    </section>
                                </header>
                            </m.section>
                            <m.section
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            transition={{delay: 1.0, duration: 0.75, ease: "easeOut"}} 
                            id="content" 
                            className="lg:flex-1 lg:overflow-y-auto lg:mt-8 desktop:mx-auto desktop:max-w-[700px]">
                                <section id = "featured-projects" className='py-6'>
                                    <h2 className='pb-4'>{restDataCPT['featured-projects'].name}</h2>
                                    <FeaturedProjects restBase = {restBase} isDarkMode = {isDarkMode} lightMode = {lightMode} darkMode = {darkMode} lightModeSvg = {lightModeSvg} darkModeSvg = {darkModeSvg}/>
                                </section>
                                <section id = "about-me" className='py-6'>
                                    <h2 className='pb-4'>{restData.acf.about_me_heading}</h2>
                                    <div className='xl:text-base' dangerouslySetInnerHTML={{ __html: content }} />
                                </section>
                                <section id = "legacy" className='py-6'>
                                    <h2 className='pb-6'>{restDataCPT['legacy-projects'].name}</h2>
                                    <ProjectTimeline restBase = {restBase} isDarkMode = {isDarkMode} lightMode = {lightMode} darkMode = {darkMode} />
                                </section>
                                <section id = "stack" className='py-6'>
                                    <h2 className='pb-4'>{restDataCPT['stack'].name}</h2>
                                    <Stack restBase = {restBase} isDarkMode = {isDarkMode} lightMode = {lightMode} darkMode = {darkMode}/>
                                </section>
                                <section id = "hobbies" className='pt-6 mb-16'>
                                    <h2 className='pb-4'>{restDataCPT['hobbies'].name}</h2>
                                    <Hobbies restBase = {restBase} isDarkMode = {isDarkMode} lightMode = {lightMode} darkMode = {darkMode}/>
                                </section>
                            </m.section>
                        </div>
                        <nav className={`fixed left-2.5 bottom-5 z-50 w-[300px] rounded-xl lg:hidden ${isDarkMode ? "bg-[#A3A3A3]" : "bg-[#18181b]"}`}>
                            <ul className='flex space-x-10 justify-center py-3'>
                                <li>
                                    <a href="#intro-hero">
                                        <HiHome size = {22} color={`${!isDarkMode ? "#A3A3A3" : "#18181b"}`}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#featured-projects">
                                        <GrProjects size = {22} color={`${!isDarkMode ? "#A3A3A3" : "#18181b"}`}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#legacy">
                                        <FaFolder size = {22} color={`${!isDarkMode ? "#A3A3A3" : "#18181b"}`}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#stack">
                                        <IoTimer size = {22} color={`${!isDarkMode ? "#A3A3A3" : "#18181b"}`}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#hobbies">
                                        <MdMusicNote size = {22} color={`${!isDarkMode ? "#A3A3A3" : "#18181b"}`}/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </m.div>
                </>
            : 
                <Loading /> 
            }
        </>
    )
}

export default Home