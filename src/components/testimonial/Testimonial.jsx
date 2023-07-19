import { Grid, useMediaQuery } from '@mui/material';
import './Testimonial.scss'
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import { motion } from "framer-motion"
import { images } from '../../constants';

function TestimonialCard(name, role, message, img) {

    return (
        <Card
            sx={{
                width: 300,
                maxWidth: '100%',
                boxShadow: 'sm',
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar src={img} sx={{ '--Avatar-size': '9rem' }} />
                <Chip
                    className='body-font'
                    size="sm"
                    variant="soft"
                    color="primary"
                    sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                >
                    {role}
                </Chip>
                <Typography className='body-font' fontSize="lg" fontWeight="lg" sx={{ mt: 1, mb: 0.5 }}>
                    {name}
                </Typography>
                <Typography className='body-font' level="body2" sx={{}}>
                    {message}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 2,
                        '& > button': { borderRadius: '2rem' },
                    }}
                >

                </Box>
            </CardContent>
            <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                <CardActions buttonFlex="1">
                    {/* <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button>Message</Button>
            <Button>Connect</Button>
          </ButtonGroup> */}
                </CardActions>
            </CardOverflow>
        </Card>
    );
}

const Testimonial = () => {
    // const matches = useMediaQuery('(min-width:800px)');
    const testimonials = [
        { name: 'James Amo', role: 'Engineer', message: 'I love their tradition',image:"https://media.licdn.com/dms/image/D4D03AQFI253-4y0TuQ/profile-displayphoto-shrink_800_800/0/1668616144177?e=1695254400&v=beta&t=87oKrIzyqjRNMmC9UaIh6dCT8kvBFwcsJH369n-iTyc"  },
        { name: 'Elvis Amoako', role: 'Engineer', message: 'They are excellent', image:'https://media.licdn.com/dms/image/D4E03AQEHHOhFc7FRaQ/profile-displayphoto-shrink_800_800/0/1683065497615?e=1695254400&v=beta&t=JVSxiKKanatALaeCe2BVHD9WOtIlfbFjJahf2OfAoVs' },
        { name: 'Elon Musk', role: 'Engineer', message: 'Marvelous are their works', image:'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTk0_tLLzT8w2DC5UbKXOO1Gop4jZsQqUS0UusrEo1HXjxWxjq8fDibmOL0GvS9gU6gHNPlxIT0mo3e92w' },
        { name: 'Jeff Bezos', role: 'Engineer', message: 'None like them',image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QEaRXhpZgAASUkqAAgAAAADAA4BAgDPAAAAMgAAAJiCAgARAAAAAQEAABIBAwABAAAAAQAAAAAAAABMT05ET04sIEVOR0xBTkQgLSBBVUdVU1QgMzA6IEplZmYgQmV6b3MgYXR0ZW5kcyAiVGhlIExvcmQgT2YgVGhlIFJpbmdzOiBUaGUgUmluZ3MgT2YgUG93ZXIiIFdvcmxkIFByZW1pZXJlIGluIExlaWNlc3RlciBTcXVhcmUgb24gQXVndXN0IDMwLCAyMDIyIGluIExvbmRvbiwgRW5nbGFuZC4gKFBob3RvIGJ5IEdhcmV0aCBDYXR0ZXJtb2xlL0dldHR5IEltYWdlcykyMDIyIEdldHR5IEltYWdlc//tAUBQaG90b3Nob3AgMy4wADhCSU0EBAAAAAABIxwCUAARR2FyZXRoIENhdHRlcm1vbGUcAngAz0xPTkRPTiwgRU5HTEFORCAtIEFVR1VTVCAzMDogSmVmZiBCZXpvcyBhdHRlbmRzICJUaGUgTG9yZCBPZiBUaGUgUmluZ3M6IFRoZSBSaW5ncyBPZiBQb3dlciIgV29ybGQgUHJlbWllcmUgaW4gTGVpY2VzdGVyIFNxdWFyZSBvbiBBdWd1c3QgMzAsIDIwMjIgaW4gTG9uZG9uLCBFbmdsYW5kLiAoUGhvdG8gYnkgR2FyZXRoIENhdHRlcm1vbGUvR2V0dHkgSW1hZ2VzKRwCdAARMjAyMiBHZXR0eSBJbWFnZXMcAm4AHkdhcmV0aCBDYXR0ZXJtb2xlL0dldHR5IEltYWdlcwD/4QYJaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyMiBHZXR0eSBJbWFnZXMiIHBob3Rvc2hvcDpDcmVkaXQ9IkdhcmV0aCBDYXR0ZXJtb2xlL0dldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjE0MTkzODMyMjMiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+R2FyZXRoIENhdHRlcm1vbGU8L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjxkYzpkZXNjcmlwdGlvbj48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPkxPTkRPTiwgRU5HTEFORCAtIEFVR1VTVCAzMDogSmVmZiBCZXpvcyBhdHRlbmRzICZxdW90O1RoZSBMb3JkIE9mIFRoZSBSaW5nczogVGhlIFJpbmdzIE9mIFBvd2VyJnF1b3Q7IFdvcmxkIFByZW1pZXJlIGluIExlaWNlc3RlciBTcXVhcmUgb24gQXVndXN0IDMwLCAyMDIyIGluIExvbmRvbiwgRW5nbGFuZC4gKFBob3RvIGJ5IEdh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' }

    ]
    if (true) {
        return (

            <div>
                <Grid container spacing={0} alignItems={'center'}>
                    {testimonials.map((e,idx) => (
                        <Grid key={idx} item xs={12} sm={6} md={3} paddingTop={4}>

                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >
                                <div align="center">
                                    {TestimonialCard(e.name, e.role, e.message,e.image)}
                                </div>
                            </motion.div>
                        </Grid>

                    ))
                    }
                </Grid>
            </div >
        )
    }

    return (
        <div className="main">
            <div className="testimonials">
                <input type="radio" name="testimonial" id="input-testimonial1" defaultChecked />
                <input type="radio" name="testimonial" id="input-testimonial2" />
                <input type="radio" name="testimonial" id="input-testimonial3" />
                <input type="radio" name="testimonial" id="input-testimonial4" />
                <div className="testimonials-inner">
                    <div className="testimonial">
                        <div className="testimonial-photo">
                            <div className="photo-background"></div>
                            <div className="photo-author"></div>
                        </div>
                        <div className="testimonial-text">
                            <p>Wait a second... you're telling me this testimonials slider is powered solely by CSS? That's some next-level web wizardry! I'm sold! Give me that mind-blowing slider to my website!</p>
                        </div>
                        <div className="testimonial-author">Henry Schwengle</div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-photo">
                            <div className="photo-background"></div>
                            <div className="photo-author"></div>
                        </div>
                        <div className="testimonial-text">
                            <p>The older I get, the more I understand why roosters just scream to start the day.</p>
                        </div>
                        <div className="testimonial-author">Mr. George Robert</div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-photo">
                            <div className="photo-background"></div>
                            <div className="photo-author"></div>
                        </div>
                        <div className="testimonial-text">
                            <p>Two of my friends have never met each other. Before they spoke, I told both of them that the other is a bit deaf. They shouted at each other for a few minutes before they realized that I'm an asshole.</p>
                        </div>
                        <div className="testimonial-author">Doodle Wobblepants</div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-photo">
                            <div className="photo-background"></div>
                            <div className="photo-author"></div>
                        </div>
                        <div className="testimonial-text">
                            <p>Turning on your lights and sirens after losing a drag race is just poor sportsmanship, man.</p>
                        </div>
                        <div className="testimonial-author">John "Vroom" Cena</div>
                    </div>
                </div>
                <div className="testimonials-arrows">
                    <div className="arrow arrow-left">
                        <label htmlFor="input-testimonial1"></label>
                        <label htmlFor="input-testimonial2"></label>
                        <label htmlFor="input-testimonial3"></label>
                        <label htmlFor="input-testimonial4"></label>
                        <span></span>
                    </div>
                    <div className="arrow arrow-right">
                        <label htmlFor="input-testimonial1"></label>
                        <label htmlFor="input-testimonial2"></label>
                        <label htmlFor="input-testimonial3"></label>
                        <label htmlFor="input-testimonial4"></label>
                        <span></span>
                    </div>
                </div>
                <div className="testimonials-bullets">
                    <label htmlFor="input-testimonial1">
                        <div className="bullet">
                            <div>
                                <span></span>
                            </div>
                        </div>
                    </label>
                    <label htmlFor="input-testimonial2">
                        <div className="bullet">
                            <div>
                                <span></span>
                            </div>
                        </div>
                    </label>
                    <label htmlFor="input-testimonial3">
                        <div className="bullet">
                            <div>
                                <span></span>
                            </div>
                        </div>
                    </label>
                    <label htmlFor="input-testimonial4">
                        <div className="bullet">
                            <div>
                                <span></span>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;