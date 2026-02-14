
import React from 'react';
import FoodCard from '../component/card/FoodCard';
const getFoods=async()=>{
    const res=await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random")

    const data=await res.json()
    await new Promise((resolve)=>setTimeout(resolve,3000));
    return data.foods || []
}
const FoodPages = async() => {
    const foods= await getFoods()
    return <div>
        <h2 className='text-4xl font-bold'>Total <span className='text-yellow-500'>{foods.length}</span> foods found</h2>
        <div className='grid my-5 grid-cols-3 gap-5'>
            {
                foods.map(food=><FoodCard key={food.id} food={food}></FoodCard> )

            }

        </div>
    </div>;
};

export default FoodPages;