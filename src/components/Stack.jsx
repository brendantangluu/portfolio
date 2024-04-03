import { useState, useEffect } from 'react';
import {
    SiTailwindcss,
    SiHtml5,
    SiReact,
    SiWordpress,
    SiGithub,
    SiJavascript,
    SiCss3,
    SiSass,
    SiPhp,
    SiAdobexd,
    SiFigma,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiTypescript,
    SiVuetify,
    SiNodedotjs,
    SiPython,
    SiBootstrap,
    SiNextdotjs
} from "react-icons/si";
import Loading from './Loading';

export const svgComponents = {
    tailwind: <SiTailwindcss />,
    html: <SiHtml5 />,
    react: <SiReact />,
    wordpress: <SiWordpress />,
    github: <SiGithub />,
    javascript: <SiJavascript />,
    css: <SiCss3 />,
    sass: <SiSass />,
    php: <SiPhp />,
    adobexd: <SiAdobexd />,
    figma: <SiFigma />,
    adobeillustrator: <SiAdobeillustrator />,
    adobephotoshop: <SiAdobephotoshop />,
    typescript: <SiTypescript />,
    vue: <SiVuetify />,
    node_js: <SiNodedotjs />,
    python: <SiPython />,
    bootstrap: <SiBootstrap />,
    next_js: <SiNextdotjs />
};

function Stack({ restBase, isDarkMode, lightMode, darkMode }) {
    const restPath = restBase + 'stack?_embed&acf_format=standard&orderby=id&order=asc';
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false)

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

    return (
        <>
        {isLoaded ? 
            <>
                <div className='md:grid grid-cols-2 gap-x-4'>
                    {restData.map((tech, index) => (
                        <article key={index} className={`${tech.title.rendered === "Web Development" ? "col-span-2" : ''} mb-4 p-2 py-4 rounded-lg ${isDarkMode ? lightMode : darkMode}`}>
                                <h2 className='text-center text-2xl mt-2 lg:text-xl xl:text:2xl'>{tech.title.rendered}</h2>
                                {tech.acf.stack && (
                                    <div className={`flex flex-wrap justify-center`}>
                                        {tech.acf.stack.map((tool, index) => {
                                            const toolName = tool.toLowerCase().replace(/\s/g, '').replace(/\./g, '_');
                                            return (
                                                <div key={index} className={`flex w-[170px] h-14 items-center justify-center space-x-2 m-4 rounded-lg font-bold border ${isDarkMode ? `border-white ${darkMode}` : `border-black ${lightMode}`}`}>
                                                    {svgComponents[toolName]}
                                                    <p>{tool}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                        </article>
                    ))}
                </div>
            </>
            :
                <Loading/>
        }
        </>
    );
}

export default Stack;
