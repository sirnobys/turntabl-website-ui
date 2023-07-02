import { Button, Divider, Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { Twitter, YouTube, LinkedIn } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';

import { images } from '../constants';


const Footer = () => {
    return (
        <div id='footer'>
            <div className="footer-ceil">
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} lg={4}>
                        <span><img width="50%" src={images.logo} /></span>
                        <div className='news-letter'>
                            <span className='layout-x'>
                                <TextField placeholder='enter email' label="Subscribe to news letter" />
                                <Button className='btn button-disruption' endIcon={<SendIcon />}>Subscribe</Button>
                            </span>
                        </div>

                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <span className='text-grey'>Company</span>
                        <div className="layout-y">
                            <span>Home</span>
                            <span>About Us</span>
                            <span>Client</span>
                            <span>Contact</span>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                        <span className='text-grey'>Socials</span>
                        <div className='social-media'>
                            <div className="layout-y">
                                <span className='layout-x'>
                                    <YouTube className='icons' />
                                    <span>Youtube</span>
                                </span>
                                <span className='layout-x'>
                                    <Twitter className='icons' />
                                    <span>Twitter</span>
                                </span>
                                <span className='layout-x'>
                                    <LinkedIn className='icons' />
                                    <span>LinkedIn</span>
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <div className='text-grey'>Location</div>
                        <div className='layout-y'>
                            <div>
                                5th floor, Advantage Place
                                Mayor Road
                                Ridge West, Accra
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Divider/>
            {/* <div className="footer-floor">
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
            </div> */}
        </div>
    )
}
export default Footer;