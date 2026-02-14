'use client'
import { CartContext } from '@/context/CartProvider';
import React, { use } from 'react';

const CartItem = () => {
    const {cart}=use(CartContext)
    return (
        <div>
            {cart.length} Item Added
        </div>
    );
};

export default CartItem;