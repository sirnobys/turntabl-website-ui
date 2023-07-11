import React from 'react'
import classNames from 'classnames';
import { motion } from "framer-motion"

import './Carousel.scss'
import { images } from '../../constants';
import { Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

export class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 6000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const length = this.props?.slides?.length;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
        <div className="slider__slides" >
          {this.props.slides?.map((slide, index) => (
            <div
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
              key={slide.description}
            >
              <div className="slider__slide-content">
                <h1 className="slider__slide-heading alt-header-font" > {slide.title.split(',').map((l, index) => <span className=' captions' key={index}>{l}</span>)}</h1>
                <h3 className="slider__slide-subheading text-disruption captions body-font">{slide.country || slide.description}</h3>
                <h2 className="slider__slide-subheading">
                  {/* {slide.description.split('').map((l, index) => <span key={index}>{l}</span>)} */}
                </h2>
                <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale:1.3
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  <p className="slider__slide-readmore text-pixel-black" >
                    <Navigate to="/" />
                    <Link to={slide.link} ><Button size='small' className='btn button-disruption button-full-rounded'>{slide.text}</Button></Link>
                  </p>
                </motion.div>

              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner" style={{ opacity: .8, backgroundImage: `url(${slide.img})` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
  }
}

export const slides = [
  {
    title: 'Upoming Events',
    description: 'Get up to speed and prepare',
    img: images.IMG_9308,
    link: '/events?status=upcoming',
    text: 'Check out!'
  },
  {
    title: 'Current Events',
    description: 'Accelerating seasons of events',
    img: images.home,
    link: '/events?status=current',
    text: 'Check out!'

  },
  {
    title: 'Blog',
    description: 'Articles fostering our brand',
    img: images.people,
    text: 'Read more!',
    link: '/blog'
  },
];
