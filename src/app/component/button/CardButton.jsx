'use client'
import React, { useState } from 'react';

const CardButton = () => {
    const [inCart,setInCart]=useState(false)
    const handleAddTwoCart=()=>{

        setInCart(true)
    }
    return (
        <div>
            <button onClick={handleAddTwoCart} 
            disabled={inCart} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200 disabled:bg-gray-100 disabled:text-gray-500">
                {inCart? "Added":"Add to Cart"}
            
          </button>
        </div>
    );
};

export default CardButton;