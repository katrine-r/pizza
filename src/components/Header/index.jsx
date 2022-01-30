import React from 'react'
import Logo from '../Logo'
import HeaderCart from '../HeaderCart'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <HeaderCart />
            </div>
        </div>
    )
}

export default Header