import React from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Grid, Typography } from '@mui/material';

export const AboutUs = () => {
    const intro = "We Provide Innovative Software Engineering Solutions To Businesses All Over The World."
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.IMG_9005} image={images.pc} page={'About Us'} intro={intro} />
                <Grid container spacing={0} alignItems={'center'}>
                    <Grid item xs={12} lg={12}>
                        <div className='text-clear-white mission' style={{ fontSize: '30px', padding: '80px', background: 'black' }}>
                            <div className='layout-x'><span className="text-insightful" style={{ fontSize: "40px" }}>MISSION</span><img width="70px" src={images.thumb} /></div>
                            <Typography className='mondwest' sx={{ fontSize: { xs: '30px', sm: '30px', } }}>
                                Our mission is to make a difference in the world of digital technology and more
                                specifically, in Ghana and the emerging skills of a digitally enabled workforce, and the
                                world.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <div className='mission' style={{ fontSize: '30px', padding: '80px' }}>
                            <div className='layout-x'><span style={{ fontSize: "40px" }}>We Are Ghana’s
                                Technology
                                Leaders</span><img width="70px" src={images.thumb} /></div>
                            <Typography className='mondwest' sx={{ fontSize: { xs: '30px', sm: '30px', } }}>
                                We provide your company with the best engineering services.
                                Here, the most talented and creative experts work with the world’s leading organizations on initiatives that promote social change.
                                We thrive on advancing global collaboration, developing software, and overcoming obstacles.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )

}