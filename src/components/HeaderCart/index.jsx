import logo from './../../img/pizza-logo.svg'
import Logo from '../Logo'
import React from 'react'
import CartIcon from '../../icons/CartIcon'

const HeaderCart = () => {
    return (
        <div className="header__cart">
            <a href="/cart.html" className="button button--cart">
                <span>520 ₽</span>
                <div className="button__delimiter"></div>
                <CartIcon />
                <CartIcon stroke={'red'} />
                <span>3</span>
            </a>
        </div>
    )
}

export default HeaderCart