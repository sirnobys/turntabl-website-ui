import React, { useEffect, useState } from 'react';
import { ContentCard, Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images, links } from '../constants';
import { Box, Chip, Grid, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import { useNavigate } from 'react-router-dom';
import LoadingProgress from '../components/LoadingProgress';

export const EventsPage = () => {
    const [events_, setEvents_] = useState([]);
    const [events, setEvents] = useState([]);
    const [load, setLoad] = useState(true)
    const currentUrlParams = new URLSearchParams(window.location.search);
    const [eventStatus, setEventStatus] = useState(currentUrlParams.get("status") ?? "current")
    const navigate = useNavigate()

    let baseUrl = links.BASE_URL

    useEffect(()=>{
        window.scrollTo(0, 0)

    },[])
    useEffect(() => {
        const fetchEvents = () => {
            setLoad(true)
            fetch(`${baseUrl}/api/v1/events`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setLoad(false)
                    setEvents(data.result)
                    setEvents_(data.result)
                    setSelectedFromUrl(data.result)
                }).catch((e) => {
                    setLoad(false)
                })
        }
        fetchEvents();
    }, [eventStatus])

    const eventTypes = [
        { name: 'Current Events', status: 'current', icon: <EventAvailableIcon /> },
        { name: 'Upcoming Events', status: 'upcoming', icon: <EventIcon /> },
    ]

    const handleEventStatus = (event) => {
        setEventStatus(event.status)
        currentUrlParams.set('status', event.status)
        navigate('?' + currentUrlParams.toString())
        const filter = events_.filter(e => (e.status == event.status))
        setEvents(filter)
    }

    const setSelectedFromUrl = (events) => {
        const filter = events.filter(e => (e.status == eventStatus))
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
                            {!load && eventStatus} events
                        </Grid>
                    }

                    <Grid item xs={12} lg={12} pt={6}>
                        <img width="200px" src={images.thumb} alt='thumb' />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Typography className='mondwest' sx={{ fontSize: { xs: '30px', sm: '60px', } }}>
                            Leading Global Talent<br />
                            to your software
                            solutions
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )

}