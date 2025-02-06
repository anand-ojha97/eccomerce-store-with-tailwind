import React, { useState } from 'react';
import { faSearch ,faUser ,faBagShopping, faEnvelope, faLocationPin, faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

const [isOpen, SetisOpen] = useState(false);
const toggleMenu = () =>{
    SetisOpen(!isOpen);
}
  return (
    <div className="header-section bg-white pb-2 shadow-2xl sticky top-[-65px] z-50 sm:top-0 transition-all duration-300 ease-in-out">
        <div className='container mx-auto px-4'>
            <div className="topbar bg-default-green p-5 rounded-tl-[100px] rounded-br-[100px] rounded-bl-[40px] rounded-tr-[40px] sm:pt-7 sm:rounded-tl-[100px] sm:rounded-br-[100px] sm:hidden">
                <div className="topbar-row flex items-center justify-between px-4 sm:block">
                    <div className="contact-info text-center">
                        <div className="email flex gap-4 sm:block sm:w-full sm:pb-4">
                            <a href="http://" target="_blank" rel="noopener noreferrer" className='text-white sm:block'><FontAwesomeIcon icon={faLocationPin} color='#ffb524'/> 123 Street, New York</a>
                            <a href="mailto:Email@Example.com" className='text-white'><FontAwesomeIcon icon={faEnvelope} color='#ffb524'/> Email@Example.com</a>
                        </div>
                    </div>
                    <div className="breadcumbs">
                        <a href="#" className='text-white mr-2'>Privacy Policy / </a>
                        <a href="#" className='text-white mr-2'>Terms of Use / </a>
                        <a href="#" className='text-white'>Sales and Refunds</a>
                    </div>
                </div>
            </div>
            <div className="header flex justify-between items-center py-4">
                <div className="logo">
                    <h1 className='font-bold text-4xl text-default-green sm:text-3xl'>Fruitables</h1>
                </div>
                <div className="menu-item sm:order-2">
                <div className="toggle-btn">
                        <button className="menu-toggle border border-neutral-600 p-2 rounded-lg 2xl:hidden sm:block" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} size='2x' color='#81C408'/>
                        </button>
                    </div>
                    <div className={`p-3 absolute top-20 left-0 w-full bg-white border rounded-md shadow-lg transform transition-all duration-300 ${isOpen ? 'scale-100 block' : 'scale-95 hidden'}`}>
                        <ul className='flex space-x-7 capitalize sm:space-x-0 sm:block'>
                            <li className='sm:p-2'><a href="#">Home</a></li>
                            <li className='sm:p-2'><a href="#">Shop</a></li>
                            <li className='sm:p-2'><a href="#">shop details</a></li>
                                <li className="group relative sm:p-2'">
                                    <a href="#" className='sm:p-2'>Pages</a>
                                    <ul className="absolute left-0 hidden group-hover:block bg-gray-200 shadow-md max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden p-5 rounded-md ">
                                        <li className='hover:bg-default-gold hover:text-default-green'><a href="#" >Cart</a></li>
                                        <li className='hover:bg-default-gold hover:text-default-green'><a href="#">Checkout</a></li>
                                    </ul>
                                </li>
                            <li className='sm:p-2'><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="menu-items sm:hidden">
                        <ul className='flex space-x-7 capitalize sm:space-x-0 sm:block'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">shop details</a></li>
                                <li className="group relative">
                                    <a href="#">Pages</a>
                                    <ul className="absolute left-0 hidden group-hover:block bg-gray-200 shadow-md max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden rounded-md">
                                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><a href="#" >Cart</a></li>
                                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><a href="#">Checkout</a></li>
                                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><a href="#" >Testimonial</a></li>
                                    <li className='hover:bg-default-gold hover:text-default-green px-5 py-1'><a href="#">404 Page</a></li>
                                    </ul>
                                </li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="account flex gap-3 items-center">
                        <div className="circle rounded-full pl-3 pr-3 p-2 border border-default-gold hover:bg-default-gold duration-300 cursor-pointer transition-all">
                            <FontAwesomeIcon icon={faSearch} size='1x' color="#81c408" />
                        </div>
                        <FontAwesomeIcon icon={faBagShopping}  size='2x' color="#81c408" />
                        <FontAwesomeIcon icon={faUser} size='2x' color="#81c408" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header