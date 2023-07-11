import React, { useEffect } from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Grid, Typography } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ServicesCard from '../components/ServicesCard';
import { motion } from "framer-motion"

export const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
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
                <Banner bgImage={images.service_header} image={images.pc} page={'Services'} intro={intro()} />
                <Grid container spacing={0} alignItems={'center'}>
                    {services.map((e, idx) => (
                        <Grid item xs={12} sm={6} md={6} paddingTop={4}>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                                key={idx}
                                align="center">
                                <ServicesCard title={e.title} description={e.description} icon={e.icon} />
                            </motion.div>
                        </Grid>
                    ))}

                    <Grid item xs={12} lg={12} pt={6}>
                        <Typography className='alt-header-font text-grey' sx={{ fontSize: { xs: '30px', sm: '60px', pb: 5} }}>
                            Leading Global Talent to your software solutions
                        </Typography>
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                        >
                            <span ><img width="500px" src={images.services} /></span>
                        </motion.div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )

}