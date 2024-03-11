import {useState, useEffect, useContext} from 'react'
import Loading from './Loading'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
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
import { svgComponents } from './Stack';


function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

function FeaturedProjects({restBase, isDarkMode, lightMode, darkMode, lightModeSvg, darkModeSvg}){
    const restPath = restBase + 'featured_projects?_embed&acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    
    const [open, setOpen] = useState(null);

    const handleOpen = (id) => {
        setOpen(open === id ? null : id);
    };


    const globe = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill={isDarkMode ? darkModeSvg : lightModeSvg}><path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z"/></svg>

    const github = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill= {isDarkMode ? darkModeSvg : lightModeSvg }>
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>


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
        {isLoaded ?
            <>
            {/* Carousel made with Material Tailwind https://www.material-tailwind.com/docs/react/carousel */}
                {restData.map(item => (
                    <Accordion className = {`rounded-lg border mb-2 p-2 ${isDarkMode ? "border-white" : "border-[#18181b]"}`} key={item.id} open={open === item.id} icon={<Icon id={item.id} open={open} />}>
                            <AccordionHeader className = {`${isDarkMode ? 'text-white border-white' : 'text-[#18181b] border-b-[#18181b]' } hover:text-gray-500 uppercase font-black`} onClick={() => handleOpen(item.id)}>
                                    <h3>{item.title.rendered}</h3>
                                    {/* <img className = "ml-24 w-28 opacity-0 hover:opacity-100 hover:transition-all" src={item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text} /> */}
                            </AccordionHeader>
                        <AccordionBody className = {`${isDarkMode ? darkMode : lightMode}`}>
                            <img className = "mb-4 mx-auto rounded-lg desktop:w-[600px]" src={item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text}/>
                            <div className='px-2'>
                                {/* Social Links */}
                                <div className="flex items-center space-x-2 py-4">
                                    {item.acf.social_links && item.acf.social_links.map((link) => (
                                        <>
                                            {/* Include SVG for btech.codes link */}
                                            {link.links.includes("github") ? (
                                                <a key = {link.id} href={link.links}>
                                                    {github}
                                                </a>
                                            ) : (
                                            /* Render the link for non-btech.codes links */
                                                <a key = {link.id} href={link.links} className="">
                                                    {globe}
                                                </a>
                                            )}
                                        </>
                                    ))}
                                </div>
                                <h3 className='md:text-xl'>{item.acf.overview_heading}</h3>
                                <p className='md:text-xl'>{item.acf.overview}</p>
                                
                                {/* loop and display tools used */}
                                {item.acf.tools_used && (
                                    <div className='flex'>
                                        {item.acf.tools_used.map((tool, index) => (
                                            <p className = {`mr-2 my-4 p-1 px-2 rounded-lg font-bold border md:text-xl ${isDarkMode ? `border-white ${lightMode}` : `border-black ${darkMode}`}`} key={index}>{tool}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {item.acf['sub-tabs'] && item.acf['sub-tabs'].filter(subTab => subTab.heading_tab !== "").length > 0 && (
                                <Tabs className = "mt-4" value={item.acf['sub-tabs'].map(subTab => subTab.heading_tab)}>
                                    <TabsHeader
                                        className={`rounded-none border-b border-blue-gray-50 bg-transparent p-0`}
                                        indicatorProps={{
                                        className:
                                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                                        }}
                                    >
                                        {item.acf['sub-tabs'].map((subTab) => (
                                            subTab.heading_tab !== "" && (
                                                <Tab className = {`text-sm md:text-xl ${isDarkMode ? "text-white" : "text-black"}`} key={subTab.heading_tab.id} value={subTab.heading_tab}>
                                                    {subTab.heading_tab}
                                                </Tab>
                                            )
                                        ))}
                                    </TabsHeader>
                                    <TabsBody
                                        animate={{
                                            initial: { x: 250 },
                                            mount: { x: 0 },
                                            unmount: { x: 250 },
                                        }}>
                                        {item.acf['sub-tabs'].map((subTab) => (
                                            <TabPanel className = {isDarkMode ? darkMode : lightMode} key={subTab.information_description} value={subTab.heading_tab}>
                                            {subTab.additional_heading_tabs && subTab.additional_heading_tabs.additional_tabs.length != 0 ? (
                                                <Tabs>
                                                    <TabsHeader>
                                                    {Object.keys(subTab.additional_heading_tabs).map((key, index) => (
                                                        <Tab key={index} value={subTab.additional_heading_tabs[key].additional_tabs}>
                                                            {subTab.additional_heading_tabs[key].additional_tabs}
                                                        </Tab>
                                                    ))}

                                                    </TabsHeader>
                                                    <TabsBody>
                                                        {/* Render the body of additional tabs here */}
                                                    </TabsBody>
                                                </Tabs>
                                            ) : (
                                                <>
                                                    <h4 className='py-4 md:text-xl'>{subTab.information_sub_heading}</h4>
                                                    <img src={subTab.project_images.url} alt={subTab.project_images.alt} />
                                                    {subTab.additional_heading_tabs.additional_tabs.length === 0 && (
                                                        <p className='md:text-xl'>{subTab.information_description}</p>
                                                    )}
                                                </>
                                            )}
                                            </TabPanel>
                                        ))}
                                    </TabsBody>
                                </Tabs>
                            )}
                        </AccordionBody>
                    </Accordion>
                ))}
            </>
        : 
            <Loading />
        }
        </>
    )
}

export default FeaturedProjects;