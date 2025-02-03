import React from 'react';
import BannerSlider from '../Sliders/BannerSlider';
const HomeBanner = () => {

return (
    <div className="homeBanner bg-[url(images/hero-img.jpg)] py-28 bg-cover bg-center">
        <div className="container mx-auto px-4">
            <div className="banner-img-div">
                <div className="grid grid-cols-2 gap-4">
                    <div className="content-container pr-16">
                        <div className="bannerheading">
                            <h1 className='text-default-gold text-2xl font-bold'>100% Organic Foods</h1>
                            <div className="content py-9">
                                <p className='text-default-green text-7xl font-semibold'>Organic Veggies & Fruits Foods</p>
                            </div>
                        </div>
                        <div className="newslatter searchfrom">
                            <input type="email" name="email" placeholder="Search" id="searchbox" className='p-4 bg-white rounded-full border-2 border-default-gold focus:outline-none w-[85%] sm:w-[70%]'/>
                            <button type="submit" className='bg-default-green hover:bg-default-gold rounded-full text-white border-2 border-default-gold font-semibold p-4 w-[25%] -m-16 sm:w-[45%] sm:-m-12 md:w-[40%] lg:w-[35%] lg:-m-24'>Subscribe Now</button>
                        </div> 
                    </div>
                    <div className="slider">
                        <BannerSlider />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeBanner