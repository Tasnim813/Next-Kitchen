import React from 'react';

const FoodSkeleton = () => {
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm p-0 overflow-hidden animate-pulse">
      {/* Image Placeholder */}
      <div className="h-48 w-full bg-gray-200"></div>

      {/* Content Placeholder */}
      <div className="p-5">
        <div className="flex justify-between mb-4">
          <div className="h-6 bg-gray-200 rounded-md w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded-md w-1/4"></div>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="h-3 bg-gray-200 rounded-md w-full"></div>
          <div className="h-3 bg-gray-200 rounded-md w-5/6"></div>
        </div>

        {/* Buttons Placeholder */}
        <div className="flex gap-3">
          <div className="h-10 bg-gray-200 rounded-xl flex-1"></div>
          <div className="h-10 bg-gray-200 rounded-xl flex-1"></div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default FoodSkeleton;

