import React from 'react'

const Header = () => {
  return (
    <div className="header-section">
        <div className='container mx-auto px-4'>
            <div className="header flex justify-between align-middle">
                <div className="logo">
                    <img src="shopping-cart.png" alt="shopping" />
                </div>
                <div className="menu-item">
                    <div className="menus">
                        <ul className='flex space-x-7'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">shop details</a></li>
                            <ul>
                                <li class="group relative">
                                    <a href="#">Pages</a>
                                    <ul class="absolute left-0 hidden group-hover:block bg-white shadow-md max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden">
                                    <li><a href="#">Cart</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    </ul>
                                </li>
                                </ul>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="logo">
                    <img src="shopping-cart.png" alt="shopping" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header