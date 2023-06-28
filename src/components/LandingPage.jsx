import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from './Nav';
import pc from "../images/geek.jpg"
import smile from "../images/smile.png"
import { Button } from '@mui/material';
import { Slider, slides } from './carousel/Carousel';
import { Testimonial } from './testimonial/Testimonial';

export const LandingPage = (props) => {
    return (
        <div>
            <Nav />
            <div className='body'>
                <div className='section'>
                    <div className='text'>
                        <span className='leading'>We build the best product design & engineering teams</span>
                        <span className='end'>We build the best product design & engineering teams <img width={16} src={smile} /> </span>
                        <span>
                            <Button className='btn button-welcoming button-full-rounded' variant="contained">Learn more</Button>
                        </span>
                    </div>
                    <span><img width={600} height={600} src={pc} /></span>
                </div>
                <div className='slider'>
                    <div className='layout-x'>
                        <span className='button-event-coming'><Button className='button' variant="text">Upcoming Events</Button></span>
                        <span><Button className='btn button-inspiration button-partial-rounded' variant="contained">Current Events</Button></span>
                        <span><Button className='btn button-insightful button-partial-rounded' variant="contained">Blogs</Button></span>
                    </div>
                    <div className='slider-content'>
                        <Slider slides={slides} />
                    </div>
                </div>

                <div>
                    some text to motivate you
                </div>

                <div className='section'>
                    <div className='text'>
                        <span className='leading'>We build the best product design & engineering teams</span>
                        <span className='end'>We build the best product design & engineering teams <img width={16} src={smile} /> </span>
                        <span>
                            <Button className='button' variant="contained">Learn more</Button>
                        </span>
                    </div>
                    <span><img width={600} height={600} src={pc} /></span>
                </div>

                <div className='layout-y call-to-action'>
                    <span className='text-grey'>Hire us for your next venture <img width={30} src={smile} /></span>
                    <Button className='btn button-disruption button-full-rounded'>Say Hi</Button>
                </div>
                <div className='clients'>
                    <span>Trusted By</span>
                    <span className='layout-x'>
                        <span>logos</span>
                        <span>logos</span>
                        <span>logos</span>
                        <span>logos</span>
                    </span>
                </div>
                <div className='testimony'>
                    <div className='intro text-grey'>What Do Our Clients Say About Us?</div>
                    <span className=''>
                        <Testimonial/>
                    </span>
                </div>
            </div>
        </div>
    )
}