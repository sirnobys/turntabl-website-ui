import React from 'react';
import { ContentCard, Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Grid, Typography } from '@mui/material';
import CoreValues from '../components/CoreValues';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Team from '../components/Team';
import ServicesCard from '../components/ServicesCard';

export const EventsPage = () => {
    const services = [
        {
            title: 'Development',
            description: `We can assist you in growing your group. Our personnel are adaptable and resourceful. We chew through JIRAs just as easily as we develop your UX or next generation microservice layer.escriptio`,
            icon: <LocalLibraryIcon sx={{ fontSize: 70, color: '#b0b0ff' }} />
        },
        {
            title: 'Project Management', description: `We cooperate with you throughout the project
        lifecycle in small, committed teams.
        From inception and definition to delivery,
        production and maintenance - our style is clean lines, efficient code, empowered users.`, icon: <HandshakeIcon sx={{ fontSize: 70, color: '#b0b0ff' }} />
        },
        {
            title: 'Partnerships',
            description: `Partner with turntabl today and design low-cost, high-quality technology ethically and sustainably.`,
            icon: <LightbulbIcon sx={{ fontSize: 70, color: '#b0b0ff' }} />
        },
        {
            title: 'Software Consulancy', description: `We listen to your issues first.
        After that, you get industry-leading services
        from a professional solutions team.`,
            icon: <CheckCircleOutlineIcon sx={{ fontSize: 70, color: '#b0b0ff' }} />
        }

    ]

    const intro = () => <span>Whatever software your business requires,<br /> we are able to design and develop a bespoke solution tailored specifically to your needs.</span>
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.event_alt} image={images.pc} page={'Events'} intro={intro()} />
                <Grid container spacing={0} alignItems={'center'}>
                    {services.map((event) => (
                        <Grid item xs={12} sm={6} md={6} paddingTop={4}>
                            <div align="center">
                                <ContentCard
                                    key={event.id}
                                    id={event.id}
                                    name={event.name}
                                    image={event.image}
                                    description={event.description}
                                    status={event.status}
                                    link={event.link}
                                />
                            </div>
                        </Grid>
                    ))}

                    <Grid item xs={12} lg={12} pt={6}>
                        <img width="200px" src={images.thumb} />
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