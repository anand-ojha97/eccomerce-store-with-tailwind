import React from 'react';
import { faSearch ,faUser ,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <div className="header-section">
        <div className='container mx-auto px-4'>
            <div className="topbar bg-default-green p-5 rounded-s-md">

            </div>
            <div className="header flex justify-between items-center p-3">
                <div className="logo">
                    <h1 className='font-bold text-4xl text-default-green'>Fruitables</h1>
                </div>
                <div className="menu-item">
                    <div className="menus">
                        <ul className='flex space-x-7'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">shop details</a></li>
                                <li className="group relative">
                                    <a href="#">Pages</a>
                                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden p-5">
                                    <li><a href="#">Cart</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    </ul>
                                </li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="account flex gap-3 items-center">
                     <div className="circle rounded-full pl-3 pr-3 p-2 border-2">
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