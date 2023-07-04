import React from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';

export const AboutUs = () => {
const intro = "We Provide Innovative Software Engineering Solutions To BusinessesAll Over The World."
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner image={images.people} page={'About Us'} intro={intro} />
        
            </div>
            <Footer />
        </div>
    )

}