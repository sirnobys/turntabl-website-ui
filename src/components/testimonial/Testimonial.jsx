import './Testimonial.scss'

const Testimonial = () => {
    return (
        <div className="main">
            <div className="testimonials">
                <input type="radio" name="testimonial" id="input-testimonial1"  defaultChecked/>
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