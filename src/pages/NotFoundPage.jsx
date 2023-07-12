import React, { useEffect } from 'react';
import { Footer, Nav } from '../components';
import { Grid } from '@mui/material';
import { images } from '../constants';

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