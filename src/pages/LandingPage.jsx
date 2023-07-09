import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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

export const LandingPage = (props) => {
    const navigate = useNavigate()
    return (
        <div id='page-container'>
            <Nav />
            <div id="content-wrap">
                <div style={{ height: '100vh' }}>
                    <Grid container spacing={2} alignItems={'center'} paddingBottom={10}>
                        <Grid item xs={12} lg={6}>
                            <div className='section'>
                                <div className='text'>
                                    <span className='leading alt-header-font'>Next level of Software Engineering</span>
                                    <span className='end'>
                                        We’ll be a focal point for the tech scene in Ghana, and we’ll help to build the next generation of Ghanaian engineers.
                                        <img width={16} src={images.smile} /></span>
                                    <span>
                                        <Button onClick={() => navigate('/about-us')} className='btn button-welcoming button-full-rounded' variant="contained">Learn more</Button>
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <motion.div
                                animate={{
                                    rotate: [5, -5, 5, 0],
                                    // scale: 1.2
                                }}
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.7 }}
                            >
                                <span ><img width="90%" src={images.geek} /></span>
                            </motion.div>
                        </Grid>
                    </Grid>
                </div>


                <div className='slider'>
                    <div className='slider-content'>
                        <Slider slides={slides} />
                    </div>
                </div>

                <div className='text-clear-white mission' style={{  padding: '80px', background: 'black' }}>
                    <div className='layout-x'><span className="text-insightful alt-header-font" style={{ fontSize: "40px" }}>MISSION</span><img width="70px" src={images.thumb} /></div>
                    Our mission is to make a difference in the world of digital technology and more
                    specifically, in Ghana and the emerging skills of a digitally enabled workforce, and the
                    world.
                </div>

                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} lg={6}>
                        <div className='section'>
                            <div className='text'>
                                <span className='leading alt-header-font'>
                                    World class IT solutions delivered to a global client base</span>
                                <span className='end'>We’ve got a strong focus on technical excellence.<br />
                                    Everyone on our annual graduate intake goes through an intensive two-month training program. When they’re done, we’re ready to work.
                                    <img width={16} src={images.smile} /> </span>
                                <span>
                                    <Button onClick={() => navigate('/services')} className='btn button-welcoming button-full-rounded' variant="contained">Learn more</Button>
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <motion.div
                            animate={{
                                rotate: [5, -2, 0]
                            }}
                            whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                            whileTap={{ scale: 1.2 }}
                        >
                            <span><img style={{ borderRadius: 40, padding: 20 }} width="70%" src={images.service} /></span>
                        </motion.div>
                    </Grid>
                </Grid>

                <div className='layout-y call-to-action'>
                    <span className='text-grey alt-header-font'>We’re excited to begin this journey<img width={30} src={images.smile} /></span>
                    <Button onClick={()=>navigate('/contact')} className='btn button-welcoming button-full-rounded' variant="contained">Say hi</Button>
                </div>
                <div className='clients'>
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
                </div>
                <div className='testimony'>
                    <div className='intro text-grey alt-header-font'>What Do Our Clients Say About Us?</div>
                    <span className=''>
                        <Testimonial />
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}