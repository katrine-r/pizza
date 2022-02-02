import React from "react";
import Header from "../../components/Header";
import emptyCard from "../../img/empty-cart.png";
import ConfusedFaceIcon from "../../icons/ConfusedFaceIcon";

const CartEmptyPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>
              {/* Корзина пустая <icon>😕</icon> */}
              Корзина пустая <ConfusedFaceIcon />
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            {/* <img src="/img/empty-cart.png" alt="Empty cart" /> */}
            <img src={emptyCard} alt="Empty cart" />
            <a href="/" className="button button--black">
              <span>Вернуться назад</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmptyPage;
