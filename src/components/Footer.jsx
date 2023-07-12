import React, { useState } from 'react';
import { Button, Divider, Grid, Link, TextField } from '@mui/material';
import { Twitter, YouTube, LinkedIn } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import { Box } from "@mui/material";
import { CircularProgress, IconButton } from '@mui/joy';
import { useNavigate } from 'react-router';

import { images } from '../constants';
import { links } from '../constants';
import SnackbarNotification from "./SnackbarNotification";
import LoadingProgress from "./LoadingProgress";


const Footer = () => {
    const [email, setEmail] = useState("");
    const [load, setLoad] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState({ text: '', type: '' });

    const navigate = useNavigate();
    let baseUrl = 'http://localhost:5000';

    const handleNewsletterSubscription = (e) => {
        e.preventDefault()
        setLoad(true)
        console.log(email)
        fetch(`${baseUrl}/api/v1/newsletters/subscriber/${email}`, {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                setEmail('');
                setNotificationMessage({ text: 'subscribed successfully!', type: 'success' })
                setLoad(false)
            })
            .catch(error => {
                setLoad(false)
                // Handle any errors
            });
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div id='footer'>
            <div className="footer-ceil">
                {!load && notificationMessage.text !== "" ? <SnackbarNotification message={notificationMessage} /> : ''}
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={12} md={4} lg={4} pb={2}>
                        <span className='logo' onClick={() => navigate('/')}><img width="50%" src={images.logo} alt='turntabl logo' /></span>
                        <div className='news-letter'>
                            <form onSubmit={handleNewsletterSubscription} className='layout-x'>
                                <TextField required className='body-font' placeholder='enter email' size='small' label="Subscribe to news letter" value={email} onChange={handleChange} />
                                <Button
                                type="submit"
                                    className='btn button-pixel-black'
                                    variant='contained'
                                    endIcon={load?<CircularProgress color='neutral' size='sm' thickness={1} /> :<SendIcon />}
                                    // onClick={handleNewsletterSubscription}
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </div>

                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} >
                        <span className='text-grey'>Company</span>
                        <div className="layout-y">
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/')]} > <Link className="text-pixel-black body-font" underline='none'>Home</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/about-us')]} > <Link className="text-pixel-black body-font" underline='none'>About Us</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/services')]} > <Link className="text-pixel-black body-font" underline='none'>Services</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/careers')]} > <Link className="text-pixel-black body-font" underline='none'>Careers</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/events')]} > <Link className="text-pixel-black body-font" underline='none'>Events</Link></Button>
                                <Button variant="text" className="text-pixel-black" onClick={() => [navigate('/blog')]} > <Link className="text-pixel-black body-font" underline='none'>Blog</Link></Button>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={1} lg={2}>
                        <span className='text-grey'>Socials</span>
                        <div className='social-media'>
                            <div className="layout-y">
                                <span className='layout-x'>
                                    <IconButton onClick={() => window.open(links.YOUTUBE, '_blank')} size="xs" variant="plain" color="neutral">
                                        <YouTube className='icons' />&nbsp;
                                        <span className='body-font'>Youtube</span>
                                    </IconButton>
                                </span>
                                <span className='layout-x'>
                                    <IconButton onClick={() => window.open(links.TWITTER, '_blank')} size="xs" variant="plain" color="neutral">
                                        <Twitter className='icons' />&nbsp;
                                        <span className='body-font'>Twitter</span>
                                    </IconButton>
                                </span>
                                <span className='layout-x'>
                                    <IconButton onClick={() => window.open(links.LINKEDIN, '_blank')} size="xs" variant="plain" color="neutral">
                                        <LinkedIn className='icons' />&nbsp;
                                        <span className='body-font'>LinkedIn</span>
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
                            <div>
                                2nd floor, Sonnidom House Mile 7, Achimota
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
                            <Box
                                component="a"
                                href=""
                                target='_blank'
                                rel='noreferrer'
                                className='text-grey'
                                sx={{
                                    textDecoration: 'none'
                                }}
                            >Privacy</Box>
                            <Box
                                component="a"
                                href=""
                                target='_blank'
                                rel='noreferrer'
                                className='text-grey'
                                sx={{
                                    textDecoration: 'none'
                                }}
                            >Terms Of Service</Box>
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