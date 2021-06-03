import React from 'react';
import CartItem from '../component/CartItem';
import "./CartScreen.css";


const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shop Cart</h2>

                <CartItem />
            </div>
            <div className="cartscreen__right">
            </div>
        </div>
    )
}

export default CartScreen
