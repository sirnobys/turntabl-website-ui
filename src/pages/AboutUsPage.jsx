import React, { useEffect } from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Grid, Typography } from '@mui/material';
import CoreValues from '../components/CoreValues';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Team from '../components/Team';
import { motion } from "framer-motion"

export const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    const coreValues = [
        { value: 'Teaching & Learning', icon: <LocalLibraryIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Technical Excellence', icon: <LightbulbIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Delivery for Client', icon: <CheckCircleOutlineIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Accountability', icon: <HandshakeIcon sx={{ color: '#bdff00' }} /> }
    ]
    const team = [
        { name: 'Sam Moorhouse', bio: "", role: "CEO", image: images.IMG_9005, twitter: "", linkedIn: "" },
        { name: 'Inusah Ibrahim', bio: "", role: "Admin", image: images.team_frame_1, twitter: "", linkedIn: "" },
        { name: 'Sam Appiah', bio: "", role: "Engineer", image: "", twitter: "", linkedIn: "" },
        { name: 'Mike Annan', bio: "", role: "Engineer", image: "", twitter: "", linkedIn: "" },
    ]
    const intro = () => <span>  We Provide Innovative Software Engineering Solutions <br />To Businesses All Over The World.</span>
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.happy_faces} image={images.pc} page={'About Us'} intro={intro()} />
                <Grid container spacing={0} alignItems={'center'}>
                    <Grid item xs={12} lg={12}>
                        <motion.div
                            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                            transition={{ duration: 0.5 }}
                            className='layout-x'
                        >
                            <Box className='mission' sx={{ px: { xs: 2, sm: 10 }, py: { xs: 2, sm: 10 }, }}>
                                <Typography className='alt-header-font' >We Are Ghana's
                                    Technology Leaders
                                </Typography>
                                {/* <img width="60px" src={images.thumb} /> */}
                                <Typography className='body-font' >
                                    Turntabl is a technical partner that combines decades of Fortune 500 technology and training experience with a track record in Ghana. We provide highly motivated engineers managed by staff seasoned in western companies. We are based in London and Accra, Ghana.
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Box className='text-clear-white mission' sx={{ px: { xs: 2, sm: 10 }, py: { xs: 2, sm: 10 }, background: 'black' }}>
                            <motion.div
                                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className='layout-x'>
                                    <Typography className='alt-header-font text-insightful'>
                                        Mission
                                    </Typography>
                                    <img width="70px" src={images.thumb} alt='thumb' />
                                </div>
                                <Typography className='body-font' sx={{ fontSize: { xs: '16px', sm: '16px', } }}>
                                    Our mission is to make a difference in the world of digital technology and more
                                    specifically, in Ghana and the emerging skills of a digitally enabled workforce, and the
                                    world. <br />We are building an organisation that gives people high-quality learning, applied skills and
                                    a fulfilling career and to create a sustainable enterprise that people admire and respect.
                                </Typography>
                            </motion.div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Box className='mission' sx={{ px: { xs: 2, sm: 10 }, py: { xs: 2, sm: 10 }, }}>
                            <motion.div
                                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className='layout-x'>
                                    <Typography className='alt-header-font' >We Are Taking The World of Technology By Storm
                                    </Typography>
                                    {/* <img width="60px" src={images.thumb} /> */}
                                </div>
                                <Typography className='body-font' >
                                    We provide your company with the best engineering services.
                                    Here, the most talented and creative experts work with the world's leading organizations on initiatives that promote social change.
                                    We thrive on advancing global collaboration, developing software, and overcoming obstacles.
                                </Typography>
                            </motion.div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Box className='text-clear-white mission' sx={{ px: { xs: 2, sm: 10 }, py: { xs: 2, sm: 10 }, background: 'black' }}>
                            <motion.div
                                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className='layout-x'>
                                    <Typography className='alt-header-font text-insightful'>
                                        We Are Making A Difference
                                    </Typography>
                                    <img width="70px" src={images.thumb} alt='thumb' />
                                </div>
                                <Typography className='body-font' sx={{ fontSize: { xs: '16px', sm: '16px', } }}>
                                    We have set up Turntabl to make a difference in Ghana. It is our aim to develop a sustainable enterprise with a quality focus and a global outlook. We aim for Turntabl to provide all the employees, including ourselves, with a good wage. At the same time we want to make as much positive change as possible. Ultimately we intend to part with the company, giving it away so that its wealth creation can benefit Ghana to the fullest.
                                </Typography>
                            </motion.div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={12} paddingTop={3}>
                        <Typography className='alt-header-font' sx={{ fontSize: { xs: '30px', sm: '70px', } }}>Core Values</Typography>
                    </Grid>
                    {
                        coreValues.map((e, idx) => (
                            <Grid key={idx} item xs={12} sm={6} md={3} paddingTop={4}>
                                <motion.div
                                    whileInView={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5, type: 'tween' }}
                                    align="center"
                                >
                                    <CoreValues value={e.value} icon={e.icon} />
                                </motion.div>
                            </Grid>
                        ))
                    }
                    <Grid item xs={12} lg={12} paddingTop={15}>
                        <Typography className='alt-header-font' sx={{ fontSize: { xs: '30px', sm: '70px', } }}>Meet Our Leadership Team</Typography>
                    </Grid>
                    {
                        team.map((e, idx) => (
                            <Grid key={idx} item xs={12} sm={6} md={3} paddingTop={4}>
                                <motion.div
                                    whileInView={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5, type: 'tween' }}
                                    align="center"
                                >
                                    <Team name={e.name} image={e.image} role={e.role} bio={e.bio} linkedIn={e.linkedIn} twitter={e.twitter} />
                                </motion.div>
                            </Grid>
                        ))
                    }

                </Grid>
            </div>
            <Footer />
        </div>
    )

}