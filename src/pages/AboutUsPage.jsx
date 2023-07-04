import React from 'react';
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

export const AboutUs = () => {
    const coreValues = [
        { value: 'Teaching & Learning', icon: <LocalLibraryIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Technical Excellence', icon: <LightbulbIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Delivery for Client', icon: <CheckCircleOutlineIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Accountability', icon: <HandshakeIcon sx={{ color: '#bdff00' }} /> }
    ]
    const team = [
        { name: 'Sam Moorhouse', bio: "", role:"CEO", image: "", twitter: "", linkedIn: "" },
        { name: 'Inusah Ibrahim', bio: "", role:"Admin", image: "", twitter: "", linkedIn: "" },
        { name: 'Sam Appiah', bio: "", role:"Engineer", image: "", twitter: "", linkedIn: "" },
        { name: 'Mike Annan', bio: "", role:"Engineer", image: "", twitter: "", linkedIn: "" },
    ]
    const intro = "We Provide Innovative Software Engineering Solutions To Businesses All Over The World."
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.IMG_9005} image={images.pc} page={'About Us'} intro={intro} />
                <Grid container spacing={0} alignItems={'center'}>
                    <Grid item xs={12} lg={12}>
                        <Box className='text-clear-white mission' sx={{ px: { xs: 2, sm: 10 }, py: { xs: 2, sm: 10 }, background: 'black' }}>
                            <div className='layout-x'>
                                <Typography className='mondwest text-insightful' sx={{ fontSize: { xs: '60px', sm: '70px', } }}>
                                    Mission
                                </Typography>
                                <img width="70px" src={images.thumb} />
                            </div>
                            <Typography className='mondwest' sx={{ fontSize: { xs: '16px', sm: '16px', } }}>
                                Our mission is to make a difference in the world of digital technology and more
                                specifically, in Ghana and the emerging skills of a digitally enabled workforce, and the
                                world. <br />We are building an organisation that gives people high-quality learning, applied skills and
                                a fulfilling career and to create a sustainable enterprise that people admire and respect.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Box className='mission' sx={{ px: { xs: 2, sm: 10 }, py: { xs: 2, sm: 10 }, }}>

                            <div className='layout-x'>
                                <Typography className='mondwest' sx={{ fontSize: { xs: '30px', sm: '60px', } }}>We Are Ghana's
                                    Technology Leaders
                                </Typography>
                                {/* <img width="60px" src={images.thumb} /> */}
                            </div>
                            <Typography className='mondwest' sx={{ fontSize: { xs: '16px', sm: '16px', } }}>
                                We provide your company with the best engineering services.
                                Here, the most talented and creative experts work with the world's leading organizations on initiatives that promote social change.
                                We thrive on advancing global collaboration, developing software, and overcoming obstacles.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={12} paddingTop={3}>
                        <Typography className='mondwest' sx={{ fontSize: { xs: '30px', sm: '70px', } }}>Core Values</Typography>
                    </Grid>
                    {
                        coreValues.map((e) => (
                            <Grid item xs={12} sm={6} md={3} paddingTop={4}>
                                <div align="center">
                                    <CoreValues value={e.value} icon={e.icon} />
                                </div>
                            </Grid>
                        ))
                    }
                    <Grid item xs={12} lg={12} paddingTop={15}>
                        <Typography className='mondwest' sx={{ fontSize: { xs: '30px', sm: '70px', } }}>Meet Our Team</Typography>
                    </Grid>
                    {
                        team.map((e) => (
                            <Grid item xs={12} sm={6} md={3} paddingTop={4}>
                                <div align="center">
                                    <Team name={e.name} image={e.image} role={e.role} bio={e.bio} linkedIn={e.linkedIn} twitter={e.twitter}/>
                                </div>
                            </Grid>
                        ))
                    }

                </Grid>
            </div>
            <Footer />
        </div>
    )

}