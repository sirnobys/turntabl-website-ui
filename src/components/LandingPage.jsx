import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from './Nav';
import { Button, Grid } from '@mui/material';
import { Slider, slides } from './carousel/Carousel';
import { Testimonial } from './testimonial/Testimonial';
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion"

import pc from "../images/geek.jpg"
import smile from "../images/smile.png"
import service from "../images/service.jpg"
import home from "../images/home.jpg"
import thumb from "../images/thumb.png"
import citi from "../images/trusted/citi.png"
import ms from "../images/trusted/MS.jpg"
import fidelity from "../images/trusted/fidelity.jpg"
import finos from "../images/trusted/finos.jpg"

// const animate = () => (

// )

export const LandingPage = (props) => {
    return (
        <div>

            <div className='body'>
                <Grid container spacing={2} alignItems={'center'} paddingBottom={10}>
                    <Grid item xs={12} lg={6}>
                        <div className='section'>
                            <div className='text'>
                                <span className='leading'>Next level of Software Engineering</span>
                                <span className='end'>Picturesque of Ultimate excellence on show<img width={16} src={smile} alt='smile'/> </span>
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
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.9 }}
                        >
                            <span><img width="30%" src={smile} alt='smile'/></span>
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

                <div>
                    some text to motivate you
                </div>

                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} lg={6}>
                        <div className='section'>
                            <div className='text'>
                                <span className='leading'>
                                    World class IT solutions delivered to a global client base</span>
                                <span className='end'>We build the best product design & engineering teams <img width={16} src={smile} alt='smile'/> </span>
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
                            <span><img width="50%" src={thumb} alt='thumb'/></span>
                        </motion.div>
                    </Grid>
                </Grid>

                <div className='layout-y call-to-action'>
                    <span className='text-grey'>Hire us for your next venture <img width={30} src={smile} alt='smile' /></span>
                    <Button className='btn button-disruption button-full-rounded'>Say Hi</Button>
                </div>
                <div className='clients'>
                    <span>Trusted By</span>
                    <span className='layout-x'>
                        <div className="slider-logo">
                            <div className="slide-track">
                                <div className="slide">
                                    <motion.div
                                        animate={{
                                            rotate: [20, -20, 20, -20, 20, -20, 0]
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.9 }}
                                    >
                                        <img src={citi} height="100" width="100" alt="citi" />
                                    </motion.div>

                                </div>
                                <div className="slide">
                                    <motion.div
                                        animate={{
                                            rotate: [20, -20, 20, -20, 20, -20, 0]
                                        }}
                                        whileHover={{ scale: 1.2, rotate: [20, -20, 20, -20, 20, -20, 0] }}
                                        whileTap={{ scale: 1.9 }}
                                    >
                                        <img src={ms} height="100" width="100" alt="" />
                                    </motion.div>
                                </div>
                                <div className="slide">
                                    <motion.div
                                        animate={{
                                            rotate: [20, -200, 20, -200, 20, -20, 0]
                                        }}
                                        whileHover={{ scale: 1.9 }}
                                        whileTap={{ rotate: [20, -200, 20, -200, 20, -20, 0], scale: 1.9 }}
                                    >
                                        <img src={fidelity} height="100" width="100" alt="fidelity" />
                                    </motion.div>
                                </div>
                                <div className="slide">
                                    <motion.div
                                        animate={{
                                            rotate: [20, -200, 20, -20, 20, -20, 0]
                                        }}
                                        whileHover={{ scale: 1.2, rotate: [20, -20, 20, -20, 20, -20, 0] }}
                                        whileTap={{ scale: 1.9 }}
                                    >
                                        <img src={finos} height="100" width="100" alt="" />
                                    </motion.div>
                                </div>
                                {/* <div className="slide">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                                </div>
                                <div className="slide">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                                </div> */}
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
        </div>
    )
}