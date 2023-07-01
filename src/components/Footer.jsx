import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Twitter, YouTube, LinkedIn } from '@mui/icons-material';

import { images } from '../constants';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-ceil">
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} md={5} lg={5}>
                        <span><img width="50%" src={images.logo} /></span>
                        <div className='social-media'>
                            <span><YouTube className='icons' /></span>
                            <span><Twitter className='icons' /></span>
                            <span><LinkedIn className='icons' /></span>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <span>Info</span>
                        <div className="layout-y">
                            <span>Home</span>
                            <span>About Us</span>
                            <span>Client</span>
                            <span>Contact</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <div>Location</div>
                        <div>
                            5th floor, Advantage Place
                            Mayor Road
                            Ridge West, Accra
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="footer-floor">
                <Grid container spacing={1} alignItems={''}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <span className="layout-x">
                            <span>Home</span>
                            <span>About Us</span>
                            <span>Privacy</span>
                            <span>Terms Of Service</span>
                        </span>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <span>Copyright © 2023, All Right Reserved</span>
                    </Grid>

                </Grid>
                {/* <div className="layout-x">
                    <span>Copyright © 2023, All Right Reserved <span className="text-disruption">Turntabl</span></span>
                    <span className="layout-x">
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Privacy</span>
                        <span>Terms Of Service</span>
                    </span>
                </div> */}
            </div>
        </div>
    )
}
export default Footer;