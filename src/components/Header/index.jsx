import React from 'react'
import './_header.scss'
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