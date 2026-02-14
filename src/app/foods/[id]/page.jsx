import React, { Suspense } from 'react';

// Fetching function
const getSingleFood = async (id) => {
    try {
        const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, {
            cache: 'no-store'
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.details;
    } catch (error) {
        return null;
    }
}

// Skeleton Component
const FoodSkeleton = () => (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
        <div className="w-full h-[400px] bg-gray-200 rounded-2xl mb-8"></div>
        <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            <div className="flex gap-2">
                <div className="h-6 bg-gray-200 rounded w-20"></div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="h-24 bg-gray-200 rounded w-full"></div>
            <div className="h-[300px] bg-gray-200 rounded-xl w-full"></div>
        </div>
    </div>
);

// Details Component
const FoodDetails = async ({ id }) => {
    const food = await getSingleFood(id);

    if (!food) {
        return <div className="text-center py-20"><h2 className="text-2xl font-bold">Food not found</h2></div>;
    }

    // Extract YouTube ID for embedding
    const videoId = food.video?.split('v=')[1];

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8">
            {/* Image Header */}
            <div className="relative h-[300px] md:h-[450px] w-full mb-8 overflow-hidden rounded-2xl shadow-lg">
                <img 
                    src={food.foodImg} 
                    alt={food.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-bold text-xl text-green-600 shadow-md">
                    ${food.price}
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{food.title}</h1>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                            {food.category}
                        </span>
                        <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {food.area} Cuisine
                        </span>
                    </div>

                    <div className="prose max-w-none text-gray-600 mb-8">
                        <p>Enjoy our delicious {food.title}, a premium {food.category} dish hailing from {food.area} traditions. 
                        Carefully prepared with the finest ingredients to ensure a gourmet experience at your doorstep.</p>
                    </div>

                    {/* Video Section */}
                    {videoId && (
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-4">Cooking Guide</h3>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-100">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title="Food Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar / Order Card */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <h4 className="text-lg font-bold mb-4">Order Details</h4>
                        <div className="flex justify-between mb-2">
                            <span>Base Price</span>
                            <span>${food.price}</span>
                        </div>
                        <div className="flex justify-between mb-4 text-gray-500 text-sm">
                            <span>Delivery Fee</span>
                            <span>Free</span>
                        </div>
                        <hr className="mb-4" />
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Page = async ({ params }) => {
    const { id } = await params;

    return (
        <main className="min-h-screen bg-white">
            <Suspense fallback={<FoodSkeleton />}>
                <FoodDetails id={id} />
            </Suspense>
        </main>
    );
};

export default Page;