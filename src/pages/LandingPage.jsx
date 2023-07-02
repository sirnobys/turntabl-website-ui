import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion"

import { Slider, slides, Testimonial, Nav, Footer } from '../components';
import { images } from '../constants';



export const LandingPage = (props) => {
    const theme = useTheme();
    console.log(theme.breakpoints.up('sm'));
    return (
        <div id='page-container'>
            <Nav />
                <div id="content-wrap">
                    <Grid container spacing={2} alignItems={'center'} paddingBottom={10}>
                        <Grid item xs={12} lg={6}>
                            <div className='section'>
                                <div className='text'>
                                    <span className='leading'>Next level of Software Engineering</span>
                                    <span className='end'>Picturesque of Ultimate excellence on show<img width={16} src={images.smile} /> </span>
                                    <span>
                                        <Button className='btn button-welcoming button-full-rounded' variant="contained">Learn more</Button>
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <motion.div
                                animate={{
                                    rotate: [20, -20, 20, -20, 20, -20, 0],
                                    // scale: 1.2
                                }}
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 1.2 }}
                            >
                                <span ><img  width="350px" src={images.geek} /></span>
                            </motion.div>
                        </Grid>
                    </Grid>

                    <div className='slider'>
                        {/* <div className='layout-x'>
        <span><Button className='btn button-welcoming button-partial-rounded' variant="text">Upcoming Events</Button></span>
        <span><Button className='btn button-inspiration button-partial-rounded' variant="contained">Current Events</Button></span>
        <span><Button className='btn button-insightful button-partial-rounded' variant="contained">Blogs</Button></span>
    </div> */}
                        <div className='slider-content'>
                            <Slider slides={slides} />
                        </div>
                    </div>

                    <div className='text-clear-white mission' style={{ fontSize: '30px', padding: '80px', background: 'black' }}>
                        <div className='layout-x'><span className="text-insightful" style={{ fontSize: "40px" }}>MISSION</span><img width="70px" src={images.thumb} /></div>
                        Our mission is to make a difference in the world of digital technology and more
                        specifically, in Ghana and the emerging skills of a digitally enabled workforce, and the
                        world.
                    </div>

                    <Grid container spacing={2} alignItems={'center'}>
                        <Grid item xs={12} lg={6}>
                            <div className='section'>
                                <div className='text'>
                                    <span className='leading'>
                                        World class IT solutions delivered to a global client base</span>
                                    <span className='end'>We build the best product design & engineering teams <img width={16} src={images.smile} /> </span>
                                    <span>
                                        <Button className='btn button-welcoming button-full-rounded' variant="contained">Learn more</Button>
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <motion.div
                                animate={{
                                    rotate: [20, -20, 20, -20, 20, -20, 0]
                                }}
                                whileHover={{ scale: 1.2, rotate: [0, 20, -20, 20, -20, 20, -20, 0] }}
                                whileTap={{ scale: 1.9 }}
                            >
                                <span><img style={{ borderRadius: 40,padding:20 }} width="70%" src={images.service} /></span>
                            </motion.div>
                        </Grid>
                    </Grid>

                    <div className='layout-y call-to-action'>
                        <span className='text-grey'>Hire us for your next venture <img width={30} src={images.smile} /></span>
                        <Button className='btn button-insightful button-full-rounded' variant="contained">Say Hi</Button>
                    </div>
                    <div className='clients'>
                        <span>Trusted By</span>
                        <span className='layout-x'>
                            <div class="slider-logo">
                                <div class="slide-track">
                                    <div class="slide">
                                        <motion.div
                                            animate={{
                                                rotate: [20, -20, 20, -20, 20, -20, 0]
                                            }}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 1.9 }}
                                        >
                                            <img src={images.citi} height="100" width="100" alt="" />
                                        </motion.div>

                                    </div>
                                    <div class="slide">
                                        <motion.div
                                            animate={{
                                                rotate: [20, -20, 20, -20, 20, -20, 0]
                                            }}
                                            whileHover={{ scale: 1.2, rotate: [20, -20, 20, -20, 20, -20, 0] }}
                                            whileTap={{ scale: 1.9 }}
                                        >
                                            <img src={images.MS} height="100" width="100" alt="" />
                                        </motion.div>
                                    </div>
                                    <div class="slide">
                                        <motion.div
                                            animate={{
                                                rotate: [20, -200, 20, -200, 20, -20, 0]
                                            }}
                                            whileHover={{ scale: 1.9 }}
                                            whileTap={{ rotate: [20, -200, 20, -200, 20, -20, 0], scale: 1.9 }}
                                        >
                                            <img src={images.fidelity} height="100" width="100" alt="" />
                                        </motion.div>
                                    </div>
                                    <div class="slide">
                                        <motion.div
                                            animate={{
                                                rotate: [20, -200, 20, -20, 20, -20, 0]
                                            }}
                                            whileHover={{ scale: 1.2, rotate: [20, -20, 20, -20, 20, -20, 0] }}
                                            whileTap={{ scale: 1.9 }}
                                        >
                                            <img src={images.finos} height="100" width="100" alt="" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className='testimony'>
                        <div className='intro text-grey'>What Do Our Clients Say About Us?</div>
                        <span className=''>
                            <Testimonial />
                        </span>
                    </div>
                </div>
            <Footer />
        </div>
    )
}