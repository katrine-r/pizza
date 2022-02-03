import React from "react";
import Header from "../../components/Header";
import Button from "../../components/UI/Button";
import CartBigIcon from "../../icons/CartBigIcon";
import CartClearIcon from "../../icons/CartClearIcon";
import PutCartIcon from "../../icons/PutCartIcon";
import AddCartIcon from "../../icons/AddCartIcon";
import RemoveCartIcon from "../../icons/RemoveCartIcon";
import GoBackIcon from "../../icons/GoBackIcon";

const CartPage = () => {
  return (
    // <div className="wrapper">
    //   <Header />

    //   <div className="content">
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
              <div className="cart__item">
                <div className="cart__item-img">
                  <img
                    className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                  />
                </div>
                <div className="cart__item-info">
                  <h3>Сырный цыпленок</h3>
                  <p>тонкое тесто, 26 см.</p>
                </div>
                <div className="cart__item-count">
                  <div className="button button--outline button--circle cart__item-count-minus">
                    <PutCartIcon />
                  </div>

                  <b>2</b>
                  <div className="button button--outline button--circle cart__item-count-plus">
                    <AddCartIcon />
                  </div>
                </div>
                <div className="cart__item-price">
                  <b>770 ₽</b>
                </div>
                <div className="cart__item-remove">
                  <div className="button button--outline button--circle">
                    <RemoveCartIcon />
                  </div>
                </div>
              </div>
              <div className="cart__item">
                <div className="cart__item-img">
                  <img
                    className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                  />
                </div>
                <div className="cart__item-info">
                  <h3>Сырный цыпленок</h3>
                  <p>тонкое тесто, 26 см.</p>
                </div>
                <div className="cart__item-count">
                  <div className="button button--outline button--circle cart__item-count-minus">
                    <PutCartIcon />
                  </div>
                  <b>2</b>
                  <div className="button button--outline button--circle cart__item-count-plus">
                    <AddCartIcon />
                  </div>
                </div>
                <div className="cart__item-price">
                  <b>770 ₽</b>
                </div>
                <div className="cart__item-remove">
                  <div className="button button--outline button--circle">
                    <RemoveCartIcon />
                  </div>
                </div>
              </div>
              <div className="cart__item">
                <div className="cart__item-img">
                  <img
                    className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                  />
                </div>
                <div className="cart__item-info">
                  <h3>Сырный цыпленок</h3>
                  <p>тонкое тесто, 26 см.</p>
                </div>
                <div className="cart__item-count">
                  <div className="button button--outline button--circle cart__item-count-minus">
                    <PutCartIcon />
                  </div>
                  <b>2</b>
                  <div className="button button--outline button--circle cart__item-count-plus">
                    <AddCartIcon />
                  </div>
                </div>
                <div className="cart__item-price">
                  <b>770 ₽</b>
                </div>
                <div className="cart__item-remove">
                  <div className="button button--outline button--circle">
                    <RemoveCartIcon />
                  </div>
                </div>
              </div>
              <div className="cart__item">
                <div className="cart__item-img">
                  <img
                    className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                  />
                </div>
                <div className="cart__item-info">
                  <h3>Сырный цыпленок</h3>
                  <p>тонкое тесто, 26 см.</p>
                </div>
                <div className="cart__item-count">
                  <div className="button button--outline button--circle cart__item-count-minus">
                    <PutCartIcon />
                  </div>
                  <b>2</b>
                  <div className="button button--outline button--circle cart__item-count-plus">
                    <AddCartIcon />
                  </div>
                </div>
                <div className="cart__item-price">
                  <b>770 ₽</b>
                </div>
                <div className="cart__item-remove">
                  <div className="button button--outline button--circle">
                    <RemoveCartIcon />
                  </div>
                </div>
              </div>
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
        </div>
    //   </div>
    // </div>
  );
};

export default CartPage;
