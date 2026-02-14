import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';

// --- Skeleton Component ---
export const ReviewSkeleton = () => (
    <div className="w-full bg-gray-50 rounded-2xl p-6 animate-pulse border border-gray-100">
        <div className="flex justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                </div>
            </div>
        </div>
        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-20"></div>
    </div>
);

// --- Main ReviewCard ---
const ReviewCard = ({ review }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(review?.likes?.length || 0);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
                {/* Header: User Info */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <img 
                            src={review.photo} 
                            alt={review.user} 
                            className="w-12 h-12 rounded-full border border-orange-100" 
                        />
                        <div>
                            <h4 className="font-bold text-gray-800 leading-tight">{review.user}</h4>
                            <p className="text-[11px] text-gray-400">{review.email}</p>
                        </div>
                    </div>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                size={14} 
                                className={`${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} 
                            />
                        ))}
                    </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    "{review.review}"
                </p>
            </div>

            {/* Footer: Like Button */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                <span className="text-xs font-semibold text-gray-400">
                    {likeCount} people liked
                </span>
                <button 
                    onClick={handleLike}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all text-sm font-bold ${
                        isLiked ? "bg-rose-50 text-rose-500" : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                    }`}
                >
                    <Heart size={16} className={isLiked ? "fill-rose-500" : ""} />
                    {isLiked ? "Liked" : "Like"}
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;