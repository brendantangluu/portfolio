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
    SiBootstrap
} from "react-icons/si";

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
    bootstrap: <SiBootstrap />
};

function Stack({ restBase, isDarkMode, lightMode, darkMode }) {
    const restPath = restBase + 'stack?_embed&acf_format=standard&orderby=id&order=asc';
    const [restData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(restPath);
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [restPath]);

    return (
        <>
            {restData.map((tech) => (
                <div className={`mb-4 p-4 rounded-lg ${isDarkMode ? lightMode : darkMode}`}>
                    <section>
                        <h2>{tech.title.rendered}</h2>
                        {tech.acf.stack && (
                            <div className='flex flex-wrap justify-evenly'>
                                {tech.acf.stack.map((tool, index) => {
                                    // Convert tool name to lowercase and remove whitespace and special characters
                                    const toolName = tool.toLowerCase().replace(/\s/g, '').replace(/\./g, '_');
                                    return (
                                        <div key={index} className={`flex w-[200px] h-12 items-center justify-center space-x-2 mr-2 my-4 p-1 px-2 rounded-lg font-bold border ${isDarkMode ? `border-white ${darkMode}` : `border-black ${lightMode}`}`}>
                                            {svgComponents[toolName]}
                                            <p>{tool}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>
                </div>
            ))}
        </>
    );
}

export default Stack;
