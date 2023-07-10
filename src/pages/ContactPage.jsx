import React, { useEffect } from 'react';
import { Footer, Nav } from '../components';
import { Box, Grid, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/joy/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactForm from '../components/forms/ContactForm';

export const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)

    },[])
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
                            py: {xs:2,sm:7}
                        }}>
                            <ChatIcon />
                            <div>
                                <Typography className='body-font' sx={{ fontWeight: "bold" }}>Chat to us</Typography>
                                <Typography className='body-font'>Our friendly team is here to help</Typography>
                                <Typography className='body-font'>info@turntabl.io</Typography>
                            </div>

                        </Box>

                        {/* <Box sx={{
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

                        </Box> */}

                        <Box sx={{
                            gap: 5,
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "left"
                        }}>
                            <PlaceIcon />
                            <div>
                                <Typography className='body-font' sx={{ fontWeight: "bold" }}>Visit us</Typography>
                                <Typography className='body-font'>Come say hello at our offices</Typography>
                                <Typography className='body-font'>4th & 5th floor, Advantage Place Mayor Road Ridge West, Accra</Typography>
                                <Typography className='body-font'>1st & 2nd floor, Sonnidom House Mile 7, Achimota</Typography>
                            </div>

                        </Box>

                        <Box sx={{
                            gap: 1,
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            pt: 5
                        }}>
                            <div>
                                <IconButton size="sm" variant="plain" color="neutral">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton size="sm" variant="plain" color="neutral">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton size="sm" variant="plain" color="neutral">
                                    <YouTubeIcon />
                                </IconButton>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Box borderRadius={4} sx={{
                            px: { xs: 2, sm: 5 },
                            py: { xs: 2, sm: 5 },
                            background: '#b0b0ff',
                            minHeight: '40vh',
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                        }}>

                            <ContactForm />


                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )

}