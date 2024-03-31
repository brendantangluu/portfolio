import { useState, useEffect } from 'react';
import Loading from './Loading';

function Hobbies({ restBase, isDarkMode, lightMode, darkMode }) {
    const restPath = restBase + 'hobbies?_embed&acf_format=standard&orderby=id&order=asc';
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

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
                <div className={`mb-4 p-2 rounded-lg ${isDarkMode ? lightMode : darkMode}`}>
                    {restData.length > 0 && restData[0].acf && restData[0].acf.hobbies && (
                        <div className='flex flex-wrap justify-evenly'>
                            {restData[0].acf.hobbies.map((hobby, index) => {
                                return (
                                    <div key={index} className={`flex space-x-2 mr-2 my-4 p-1 px-2 rounded-lg font-bold border ${isDarkMode ? `border-white ${darkMode}` : `border-black ${lightMode}`}`}>
                                        <p>{hobby.hobby}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </>
        :
        <Loading/>
        }
        </>
    );
}

export default Hobbies;
