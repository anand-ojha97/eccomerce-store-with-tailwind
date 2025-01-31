import React from 'react'
import { faTwitter, faYoutube, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
      <div className="footer-section bg-footer-bg py-24">
        <div className="container mx-auto px-4">
          <div className="subscribe-section grid grid-cols-12 gap-4 items-center justify-between border-b border-b-default-gold pb-8 sm:block">
            <div className="footerlogo col-span-3">
              <h2 className='text-4xl text-default-green font-semibold'>Fruitables</h2>
              <span className='text-default-gold text-lg'>Fresh products</span>
            </div>
            <div className="newslatter col-span-6 sm:my-6">
                <input type="email" name="email" placeholder="Your Email" id="footerEmal" className='p-4 bg-white rounded-full border-none focus:outline-none w-[85%] sm:w-[70%]'/>
                <button type="submit" className='bg-default-green hover:bg-default-gold rounded-full text-white font-semibold p-4 w-[25%] -m-16 sm:w-[40%] sm:-m-12'>Subscribe Now</button>
            </div> 
            <div className="footerSocialLinks col-span-3 text-right sm:text-center">
              <a href="#" className="twiter border border-default-gold px-3 py-2 rounded-full mr-2 sm:inline-block"><FontAwesomeIcon icon={faTwitter}  color='#FFB524' /></a>
              <a href="#" className="twiter border border-default-gold px-3 py-2 rounded-full mr-2 sm:inline-block"><FontAwesomeIcon icon={faYoutube}  color='#FFB524' /></a>
              <a href="#" className="twiter border border-default-gold px-3 py-2 rounded-full mr-2 sm:inline-block"><FontAwesomeIcon icon={faFacebookF} color='#FFB524' /></a>
              <a href="#" className="twiter border border-default-gold px-3 py-2 rounded-full sm:inline-block"><FontAwesomeIcon icon={faLinkedin}  color='#FFB524' /></a>
            </div>
          </div>
          <div className="footerBottomUrls pt-6">
            <div className="menus grid grid-cols-12 sm:grid-cols-1 sm:gap-y-8">
              <div className="col-span-3">
                <div className="readmoreCol">
                  <h2 className='text-white text-2xl mb-6'>Why People Like us!</h2>
                  <p className='text-gray-400 leading-loose text-lg'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                  <a href="#" className='capitalize py-3 px-6 border border-default-gold inline-block rounded-full text-default-green font-semibold mt-8 hover:bg-default-gold hover:text-white'>read more</a>
                </div>
              </div> 
              <div className="col-span-3 pl-6 sm:p-0">
                <div className="shop-info">
                  <h2 className='text-white text-2xl mb-8 sm:mb-4'>Shop Info</h2>
                  <ul className="footermenuItems">
                    <li><a href="#" className='text-white text-lg pb-1 block'>About Us</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>Contact Us</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>Privacy Policy</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>Terms & Condition</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>Return Policy</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>FAQs & Help</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3 pl-6 sm:p-0">
              <div className="shop-info">
                  <h2 className='text-white text-2xl mb-8 sm:mb-4'>Account</h2>
                  <ul className="footermenuItems">
                    <li><a href="#" className='text-white text-lg pb-1 block'>About Us</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>Contact Us</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>Privacy Policy</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>Terms & Condition</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>Return Policy</a></li>
                    <li><a href="#" className='text-white text-lg pb-1 block'>FAQs & Help</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3 pl-6 sm:p-0">
                <div className="contactsection">
                  <h2 className='text-white text-2xl mb-8 sm:mb-4'>Contact</h2>
                  <div className="adress text-gray-400 pb-3 text-lg">
                    <span>Address </span><a href="#">1429 Netus Rd, NY 48247</a>
                  </div>
                  <div className="adress text-gray-400 pb-3 text-lg">
                    <span>Email: </span><a href="#">Example@gmail.com</a>
                  </div>
                  <div className="adress text-gray-400 pb-3 text-lg">
                    <span>Phone: </span><a href="#"> +0123 4567 8910</a>
                  </div>
                  <div className="adress text-gray-400 pb-3 text-lg">
                    <span>Payment Accepted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer