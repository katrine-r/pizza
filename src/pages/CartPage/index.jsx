import React from "react";
import CartBigIcon from "../../icons/CartBigIcon";
import CartClearIcon from "../../icons/CartClearIcon";
import GoBackIcon from "../../icons/GoBackIcon";
import CartItem from '../../components/CartItem';
import emptyCard from "../../img/empty-cart.png";
// import ConfusedFaceIcon from "../../icons/ConfusedFaceIcon";

const CartPage = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartBigIcon />
            Корзина
          </h2>
          <div className="cart__clear">
            <CartClearIcon />
            <span>Очистить корзину</span>
          </div>
        </div>

        <div className="content__items">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>3 шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>900 ₽</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <a
              href="/"
              className="button button--outline button--add go-back-btn"
            >
              <GoBackIcon />
              <span>Вернуться назад</span>
            </a>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCard} alt="Empty cart" />
        <a href="/" className="button button--black">
          <span>Вернуться назад</span>
        </a>
      </div> */}

    </div>
  );
};

export default CartPage;
