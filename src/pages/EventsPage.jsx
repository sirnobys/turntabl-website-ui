import React, { useEffect, useState } from 'react';
import { ContentCard, Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images, links } from '../constants';
import { Box, Chip, Grid } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import { useNavigate } from 'react-router-dom';
import LoadingProgress from '../components/LoadingProgress';
import { motion } from "framer-motion"

export const EventsPage = () => {
    const [events_, setEvents_] = useState([]);
    const [events, setEvents] = useState([]);
    const [load, setLoad] = useState(true)
    const currentUrlParams = new URLSearchParams(window.location.search);
    const [eventStatus, setEventStatus] = useState(currentUrlParams.get("status") ?? "current")
    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    useEffect(() => {
        const fetchEvents = () => {
            setLoad(true)
            fetch(`${links.BASE_URL}/api/v1/events`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setLoad(false)
                    setEvents(data.result)
                    setEvents_(data.result)
                    // setSelectedFromUrl(data.result)
                    const filter = data?.result?.filter(e => (e.status === eventStatus))
                    setEvents(filter)
                }).catch((e) => {
                    setLoad(false)
                })
        }
        fetchEvents();
    }, [eventStatus,])

    const eventTypes = [
        { name: 'Current Events', status: 'current', icon: <EventAvailableIcon /> },
        { name: 'Upcoming Events', status: 'upcoming', icon: <EventIcon /> },
    ]

    const handleEventStatus = (event) => {
        setEventStatus(event.status)
        currentUrlParams.set('status', event.status)
        navigate('?' + currentUrlParams.toString())
        const filter = events_.filter(e => (e.status === event.status))
        setEvents(filter)
    }



    const intro = () => <span>Get up to speed with our blasts!<br /> Discover what we are celebrating, our benevolence and contributions</span>
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.event_alt_2} image={images.pc} page={'Events'} intro={intro()} />
                <Box sx={{
                    mt: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    textAlign: 'center',
                    gap: 3
                }}>
                    {eventTypes.map((event, idx) => (
                        <Chip
                            className='body-font'
                            sx={{
                                backgroundColor: event.status.toLocaleLowerCase() === eventStatus.toLocaleLowerCase() ? "#b0b0ff" : '#fff',
                                color: "black",
                                border: event.status.toLocaleLowerCase() === eventStatus.toLocaleLowerCase() ? "1px solid #b0b0ff" : "1px solid #b0b0ff"
                            }}
                            icon={event.icon}
                            label={event.name}
                            onClick={() => { handleEventStatus(event) }} />
                    ))}
                </Box>
                <Grid container textAlign={'center'}>

                    {!load && events?.length !== 0 ? events.map((event) => (
                        <Grid px={3} item xs={12} sm={6} md={3} paddingTop={4}>
                            <div align="center">
                                <ContentCard
                                    key={event.id}
                                    id={event.id}
                                    name={event.name}
                                    image={event.image}
                                    description={event.description}
                                    status={event.status}
                                    link={event.link}
                                    date={event.date_created}
                                    userView={true}
                                />
                            </div>
                        </Grid>
                    )) : load ?
                        <Grid item xs={12} sm={12} md={12} paddingTop={4}>
                            <LoadingProgress />
                        </Grid> :
                        <Grid item xs={12} sm={12} md={12} paddingTop={4}>
                            No {!load && eventStatus} events
                        </Grid>
                    }

                    <Grid hidden={events?.length!==0} item xs={12} lg={12} pt={6}>
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                        >
                            <span ><img width="500px" src={images.party} alt="evens"/></span>
                        </motion.div>

                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )

}