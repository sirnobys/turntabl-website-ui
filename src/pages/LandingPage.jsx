import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import { motion } from "framer-motion"

import { Slider, slides, Testimonial, Nav, Footer } from '../components';
import { images } from '../constants';
import Clients from '../components/Clients';


const clients = [
    { name: 'Morgan Stanley', location: 'London, UK', image: images.MS },
    { name: 'Citi Bank', location: 'London, UK', image: images.citi },
    { name: 'Fidelity', location: 'Accra, Ghana', image: images.fidelity },
    { name: 'Finos', location: 'London, UK', image: images.finos },
]

export const LandingPage = () => {
    console.log(window.location);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate()
    return (
        <div id='page-container'>
            <Nav />
            <div id="content-wrap">
                <Box style={{
                    minHeight:"100vh"
                }}>
                    <Grid
                        container
                        spacing={1}
                        alignItems={'center'}
                        paddingBottom={10}
                        sx={{
                            pt: 1
                        }}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className='section'>
                                <div className='text'>
                                    <Typography className='leading alt-header-font'>Hello!
                                        &nbsp;<img width={"35px"} src={images.smile} alt='turntabl smile'/>
                                    </Typography>
                                    <Typography className='leading alt-header-font'>Software: Reinvented</Typography>
                                    <span className='end'>
                                        We’ll be a focal point for the tech scene in Ghana, and we’ll help to build the next generation of Ghanaian engineers.
                                        <img width={16} src={images.smile} alt='turntabl smile'/></span>
                                    <span>
                                        <Button onClick={() => navigate('/about-us')} className='btn button-welcoming button-full-rounded' variant="contained">Learn more</Button>
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <motion.div
                                animate={{
                                    rotate: [5, -5, 5, 0],
                                    // scale: 1.2
                                }}
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.7 }}
                                transition={{ duration: 0.5, type: "tween" }}
                            >
                                <span ><img width="90%" src={images.pair} alt='turntabl pair'/></span>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Box>


                <div className='slider'>
                    <div className='slider-content'>
                        <Slider slides={slides} />
                    </div>
                </div>

                <div className='text-clear-white mission' style={{ padding: '80px', background: 'black', transition: 'all 0.3s ease-in-out' }}>
                    <motion.div
                        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='layout-x'><span className="text-insightful alt-header-font" style={{ fontSize: "40px" }}>Next Level of Software Engineering</span></div>
                    <Typography sx={{fontSize:'20px'}} className='body-font'>
                        We offer a unique proposition in the software development market with our unparalleled talent pool of developers
                    </Typography>
                    </motion.div>
                </div>

                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} lg={6}>
                        <div className='section'>
                            <motion.div
                                className='text'
                                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className='leading alt-header-font'>
                                    World class IT solutions delivered to a global client base</span>
                                <span className='end'>We’ve got a strong focus on technical excellence.<br />
                                    Everyone on our annual graduate intake goes through an intensive two-month training program. When they’re done, we’re ready to work.
                                    <img width={16} src={images.smile} alt='turntabl smile'/> </span>
                                <span>
                                    <Button onClick={() => navigate('/services')} className='btn button-welcoming button-full-rounded' variant="contained">Learn more</Button>
                                </span>
                            </motion.div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <motion.div
                            whileInView={{ opacity: [0, 0, 1] }}
                            transition={{ type: "spring", stiffness: 100, duration: 3 }}
                        >
                            <span><img style={{ borderRadius: 40, padding: 20 }} width="90%" src={images.service} alt='services'/></span>
                        </motion.div>
                    </Grid>
                </Grid>

                <motion.div
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='layout-y call-to-action'>
                    <span className='text-grey alt-header-font'>We're excited to begin this journey<img width={30} src={images.smile} alt='turntabl smile'/></span>
                    <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "tween" }}
                        style={{ paddingTop: 15 }}
                    >
                        <img width={"90%"} src={images.pair_2} alt='turntabl home'/>
                    </motion.div>
                    <Button onClick={() => navigate('/contact')} className='btn button-disruption button-full-rounded' variant="contained">Say hi</Button>
                </motion.div>
                <motion.div
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='clients'
                >
                    <span className='alt-header-font'>Trusted By</span>
                    <span className='layout-x'>
                        <Grid container spacing={0} alignItems={'center'} mb={10}>
                            {clients.map((e, i) => (
                                <Grid key={i} item xs={12} sm={6} md={3} paddingTop={4}>
                                    <motion.div
                                        animate={{
                                            rotate: [5, -2, 0]
                                        }}
                                        whileHover={{ scale: 1.1, rotate: [0, -1, -2] }}
                                        whileTap={{ scale: 1.3 }}
                                    >
                                        <div align="center">
                                            {Clients(e.name, e.image, e.location)}
                                        </div>
                                    </motion.div>
                                </Grid>
                            ))
                            }
                        </Grid>
                    </span>
                </motion.div>
                <motion.div
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='testimony'
                >
                    <div className='intro text-grey alt-header-font'>What Do Our Clients Say About Us?</div>
                    <span className=''>
                        <Testimonial />
                    </span>
                </motion.div>
            </div>
            <Footer />
        </div >
    )
}