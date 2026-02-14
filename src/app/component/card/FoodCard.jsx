import Link from 'next/link';
import React from 'react';
import CardButton from '../button/CardButton';

const FoodCard = ({ food }) => {
  const {foodImg,title,category,id}=food ||[]
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Food Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={foodImg} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-xl font-bold tracking-tight text-gray-900">{food.title}</h5>
          <p className="text-lg font-extrabold text-orange-600">৳{food.price}</p>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">Delicious {food.category} based {food.title} prepared with fresh ingredients.</p>

        {/* Buttons */}
        <div className="flex gap-3">
          <CardButton food={food}></CardButton>
          <Link href={`/foods/${id}`} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-xl transition-colors duration-200">
            View Details
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default FoodCard;