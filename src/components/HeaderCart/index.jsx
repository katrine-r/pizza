import React from 'react'
import CartIcon from '../../icons/CartIcon'
import { Link } from 'react-router-dom'

const HeaderCart = () => {
    return (
        <div className="header__cart">
            <Link to="/cart-page" className="button button--cart">
                <span>520 ₽</span>
                <div className="button__delimiter"></div>
                <CartIcon />
                <CartIcon stroke={'red'} />
                <span>3</span>
            </Link>
        </div>
    )
}

export default HeaderCart