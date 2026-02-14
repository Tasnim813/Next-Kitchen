'use client'
import React, { useEffect, useState } from 'react';
import ReviewCard, { ReviewSkeleton } from '../component/card/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data.reviews);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className='text-4xl font-bold mb-6'>
                Total <span className='text-yellow-500'>{reviews.length}</span> Reviews found
            </h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {loading ? (
                    // Load houar somoy 6 ti skeleton dekhabe
                    [...Array(6)].map((_, i) => <ReviewSkeleton key={i} />)
                ) : (
                    reviews.map(review => (
                        <ReviewCard 
                            key={review.id} // ekhane 'id.review' hobe na
                            review={review} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Reviews;