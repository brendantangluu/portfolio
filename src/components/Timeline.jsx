import {useState, useEffect, useContext} from 'react'
import { Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Collapse,
    Button,
    Card,
    CardBody,} from "@material-tailwind/react";

function ProjectTimeline ({restBase, isDarkMode, lightMode, darkMode}){
    const restPath = restBase + 'legacy?_embed'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    
    const [open, setOpen] = useState(null);

    const handleOpen = (id) => {
        setOpen(open === id ? null : id);
    };

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
            {restData && restData.map((item, index) => (
                <Timeline>
                    <TimelineItem>
                    {index !== restData.length - 1 && <TimelineConnector />}
                        <TimelineHeader className="h-3">
                            <TimelineIcon className={isDarkMode ? lightMode : darkMode} />
                            <Typography variant="h2" className="leading-none text-base uppercase">
                                {item.title.rendered}
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography className="font-normal mb-2">
                                {item.acf.date}
                            </Typography>
                            <img className = "rounded-lg" src={item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text} />
                            <Button className = {`mt-4 transition-all hover:animate-pulse ${isDarkMode ? lightMode : darkMode}`} onClick={() => handleOpen(item.id)}>View Details</Button>
                            <Collapse open={open === item.id}>
                            <Card key={item.id} className="my-4 mx-auto">
                                <CardBody className={`space-y-2 ${isDarkMode ? lightMode : darkMode} rounded-xl`}>
                                    <div className='flex flex-wrap justify-center'>
                                        {item.acf.tools_used.map((tool, index) => (
                                            <p className = {`text-center mr-2 my-2 p-1 px-2 rounded-lg font-bold border ${isDarkMode ? `${darkMode}` : `${lightMode}`}`} key={index}>{tool}</p>
                                        ))}
                                    </div>
                                    <h2 className='text-base'>{item.acf.overview_heading}</h2>
                                    <p>{item.acf.overview}</p>
                                    <h2 className='text-base'>{item.acf.project_information_[0].information_heading}</h2>
                                    <p>{item.acf.project_information_[0].information_description}</p>
                                </CardBody>
                                </Card>
                            </Collapse>
                        </TimelineBody>
                    </TimelineItem>
                </Timeline>
            ))}
        </>
    )
}

export default ProjectTimeline;