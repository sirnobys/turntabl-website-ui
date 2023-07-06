import { Button, Divider, Grid, Link, TextField } from '@mui/material';
import React from 'react';
import { Twitter, YouTube, LinkedIn } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';

import { images } from '../constants';
import { links } from '../constants';
import { IconButton } from '@mui/joy';
import { useNavigate } from 'react-router';


const Footer = () => {
    const navigate = useNavigate()
    return (
        <div id='footer'>
            <div className="footer-ceil">
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} lg={4} pb={2}>
                        <span className='logo' onClick={() => navigate('/')}><img width="50%" src={images.logo} alt='turntabl logo' /></span>
                        <div className='news-letter'>
                            <span className='layout-x'>
                                <TextField placeholder='enter email' size='small' label="Subscribe to news letter" />
                                <Button className='btn button-pixel-black' variant='contained' endIcon={<SendIcon />}>Subscribe</Button>
                            </span>
                        </div>

                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} >
                        <span className='text-grey'>Company</span>
                        <div className="layout-y">
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/')]} > <Link className="text-grey" underline='none'>Home</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/about-us')]} > <Link className="text-grey" underline='none'>About Us</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/services')]} > <Link className="text-grey" underline='none'>Services</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/careers')]} > <Link className="text-grey" underline='none'>Careers</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/events')]} > <Link className="text-grey" underline='none'>Events</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/blog')]} > <Link className="text-grey" underline='none'>Blog</Link></Button>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                        <span className='text-grey'>Socials</span>
                        <div className='social-media'>
                            <div className="layout-y">
                                <span className='layout-x'>
                                    <IconButton onClick={() => window.open(links.YOUTUBE, '_blank')} size="xs" variant="plain" color="neutral">
                                        <YouTube className='icons' />&nbsp;
                                        <span>Youtube</span>
                                    </IconButton>
                                </span>
                                <span className='layout-x'>
                                    <IconButton onClick={() => window.open(links.TWITTER, '_blank')} size="xs" variant="plain" color="neutral">
                                        <Twitter className='icons' />&nbsp;
                                        <span>Twitter</span>
                                    </IconButton>
                                </span>
                                <span className='layout-x'>
                                    <IconButton onClick={() => window.open(links.LINKEDIN, '_blank')} size="xs" variant="plain" color="neutral">
                                        <LinkedIn className='icons' />&nbsp;
                                        <span>LinkedIn</span>
                                    </IconButton>
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
            <div className="footer-floor">
                <Grid container spacing={1} alignItems={''}>
                    <Divider sx={{ padding: '10px', width: '100%' }} />
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
            </div>
        </div>
    )
}
export default Footer;