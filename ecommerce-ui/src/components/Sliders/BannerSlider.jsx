import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import "slick-carousel"; // Import slick-carousel JavaScript

const BannerSlider = () => {
  useEffect(() => {
    // Initialize the slick slider when the component mounts
    $('.slides').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      
    });
    // Cleanup on unmount
    return () => {
      $(".slick-slider").slick("unslick"); // Destroy the slick slider on unmount
    };
  }, []);

  return (
    <div className="homebannerslider px-20">
        <div className="slides">
            <div className="slider">
                <div className="image-section">
                    <img src="src/images/Vesitables.jpg" alt="Vesitables" className='rounded-md w-full'/>
                </div>
            </div>
            <div className="slider">
                <div className="image-section">
                    <img src="src/images/Vesitables.jpg" alt="Vesitables" className='rounded-md w-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSlider