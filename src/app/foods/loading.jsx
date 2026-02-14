import React from 'react';
import FoodSkeleton from '../component/skeletor/FoodSkeleton';

const loading = () => {
    return (
        <div className='grid my-5 grid-cols-3 gap-5'>
            {
                [...Array(12)].map((_,index)=> <FoodSkeleton key={index}></FoodSkeleton>)
            }
    
        </div>
    );
};

export default loading;