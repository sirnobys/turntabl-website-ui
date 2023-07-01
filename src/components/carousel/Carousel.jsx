import React from 'react'
import classNames from 'classnames';

import './Carousel.scss'
import { images } from '../../constants';

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
              key={slide.city}
            >
              <div className="slider__slide-content">
              <h1 className="slider__slide-heading" > {slide.title.split(',').map((l, index) => <span className=' captions' key={index}>{l}</span>)}</h1>
                <h3 className="slider__slide-subheading text-disruption captions">{slide.country || slide.city}</h3>
                <h2 className="slider__slide-subheading">
                  {/* {slide.city.split('').map((l, index) => <span key={index}>{l}</span>)} */}
                </h2>
                <p className="slider__slide-readmore text-pixel-black" style={{background:'white',padding:5, fontWeight:'bold'}}>read more</p>
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
    title: 'Coming Events',
    city: 'Presenting occasions this fall',
    // country: 'France',
    img: images.IMG_9308,
  },
  {
    title: 'Current Events',
    city: 'Ongoing seasons of events',
    img: images.home,
  },
  {
    title: 'Blog',
    city: 'Articles by our very own hands',
    // country: 'Czech Republic',
    img: images.people,
  },
];
