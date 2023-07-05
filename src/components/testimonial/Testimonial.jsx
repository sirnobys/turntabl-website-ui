import { Grid, useMediaQuery } from '@mui/material';
import './Testimonial.scss'
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

function TestimonialCard(name, role, message) {

    return (
        <Card
            sx={{
                width: 300,
                maxWidth: '100%',
                boxShadow: 'sm',
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                <Chip
                    size="sm"
                    variant="soft"
                    color="primary"
                    sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                >
                   {role}
                </Chip>
                <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 1, mb: 0.5 }}>
                    {name}
                </Typography>
                <Typography level="body2" sx={{}}>
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
    const matches = useMediaQuery('(min-width:800px)');
    const testimonials = [
        { name: 'Mike Annan', role: 'Engineer', message: 'I love this piece' },
        { name: 'Mike Annan', role: 'Engineer', message: 'I love this piece' },
        { name: 'Mike Annan', role: 'Engineer', message: 'I love this piece' },
        { name: 'Mike Annan', role: 'Engineer', message: 'I love this piece' }

    ]
    if (matches) {
        return (

            <div>
                <Grid container spacing={0} alignItems={'center'}>
                    {testimonials.map(e => (
                        <Grid item xs={12} sm={6} md={3} paddingTop={4}>
                            <div align="center">
                                {TestimonialCard(e.name, e.role, e.message)}
                            </div>
                        </Grid>
                    ))
                    }
                </Grid>
            </div>
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