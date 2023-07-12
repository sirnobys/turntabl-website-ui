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
import { images, links } from '../constants';

export const NotFoundPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Grid container spacing={2} padding={5}>
                    <Grid  item xs={12} sm={12} md={12} lg={12}>
                           <img width={"700px"} src={images.not_found} alt='page not found'/>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )

}