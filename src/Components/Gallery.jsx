import React from 'react';
import one from "../assets/images/venue-gallery/1.jpg"
import two from "../assets/images/venue-gallery/2.jpg"
import three from "../assets/images/venue-gallery/3.jpg"
import four from "../assets/images/venue-gallery/4.jpg"
import five from "../assets/images/venue-gallery/5.jpg"
import six from "../assets/images/venue-gallery/6.jpg"
import seven from "../assets/images/venue-gallery/7.jpg"
import eight from "../assets/images/venue-gallery/8.jpg"


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Gallery() {
    return (
        <section id="gallery" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Gallery</h2>
                    <p>Check our gallery from the recent events</p>
                </div>
            </div>

            <div className="gallery-wrapper">
                <button className="left-btn">&#10094;</button>
                <div className="owl-carousel gallery-carousel">
                    <a href={one} className="venobox" data-gall="gallery-carousel"><img src={one} alt="" /></a>
                    <a href={two} className="venobox" data-gall="gallery-carousel"><img src={two} alt="" /></a>
                    <a href={three} className="venobox" data-gall="gallery-carousel"><img src={three} alt="" /></a>
                    <a href={four} className="venobox" data-gall="gallery-carousel"><img src={four} alt="" /></a>
                    <a href={five} className="venobox" data-gall="gallery-carousel"><img src={five} alt="" /></a>
                    <a href={six} className="venobox" data-gall="gallery-carousel"><img src={six} alt="" /></a>
                    <a href={seven} className="venobox" data-gall="gallery-carousel"><img src={seven} alt="" /></a>
                    <a href={eight} className="venobox" data-gall="gallery-carousel"><img src={eight} alt="" /></a>
                </div>
                <button className="right-btn">&#10095;</button>
            </div>

        </section>
    )
}

export default Gallery
