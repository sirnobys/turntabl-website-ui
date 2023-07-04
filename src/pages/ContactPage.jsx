import React from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Grid, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/joy/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactForm from '../components/forms/ContactForm';

export const Contact = () => {

    const intro = "We Provide Innovative Software Engineering Solutions To Businesses All Over The World."
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Grid container spacing={2} padding={5}>
                    <Grid item xs={12} lg={4} sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left"
                    }}>

                        <Box sx={{
                            gap: 5,
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "left",
                        }}>
                            <ChatIcon />
                            <div>
                                <Typography className="mondwest" sx={{ fontWeight: "bold" }}>Chat to us</Typography>
                                <Typography className="mondwest">Our friendly team is here to help</Typography>
                                <Typography className="mondwest">info@turntabl.io</Typography>
                            </div>

                        </Box>

                        <Box sx={{
                            gap: 5,
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "left",
                            py: 5

                        }}>
                            <CallIcon />
                            <div>
                                <Typography className="mondwest" sx={{ fontWeight: "bold" }}>Chat to us</Typography>
                                <Typography className="mondwest">Our friendly team is here to help</Typography>
                                <Typography className="mondwest">info@turntabl.io</Typography>
                            </div>

                        </Box>

                        <Box sx={{
                            gap: 5,
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "left"
                        }}>
                            <PlaceIcon />
                            <div>
                                <Typography className="mondwest" sx={{ fontWeight: "bold" }}>Visit us</Typography>
                                <Typography className="mondwest">Come say hello at our offices</Typography>
                                <Typography className="mondwest">4th & 5th floor, Advantage Place Mayor Road Ridge West, Accra</Typography>
                                <Typography className="mondwest">1st & 2nd floor, Sonnidom House Mile 7, Achimota</Typography>
                            </div>

                        </Box>

                        <Box sx={{
                            gap: 1,
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "left",
                            pt: 5
                        }}>
                            <IconButton size="sm" variant="plain" color="neutral">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton size="sm" variant="plain" color="neutral">
                                <LinkedInIcon />
                            </IconButton>

                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Box borderRadius={4} sx={{
                            px: { xs: 2, sm: 5 },
                            py: { xs: 2, sm: 5 },
                            background: '#bdff00',
                            minHeight: '80vh',
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center", 
                        }}>
                           
                        <ContactForm/>


                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )

}