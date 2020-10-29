import React from 'react';

import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">{
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
            
        }

        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const matchStateToProps = ({ cart: { cartItems } } ) =>({
    cartItems
})

export default connect(matchStateToProps)(CartDropdown);